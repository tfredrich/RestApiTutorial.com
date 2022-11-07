var lunrIndex, pagesIndex;

// Initialize lunrjs using our generated index file
function initLunr() {
    // First retrieve the index file
    $.getJSON(index_url)
        .done(function(index) {
            pagesIndex = index;
            // Set up lunrjs by declaring the fields we use
            // Also provide their boost level for the ranking
            lunrIndex = lunr(function() {
                this.ref('index');
                this.field('title', {
                    boost: 15
                });
                this.field('tags', {
                    boost: 10
                });
                this.field('content', {
                    boost: 5
                });

                this.pipeline.remove(lunr.stemmer);
                this.searchPipeline.remove(lunr.stemmer);

                // Feed lunr with each file and let lunr actually index them
                pagesIndex.forEach(function(page, idx) {
                    page.index = idx;
                    this.add(page);
                }, this);
            })
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ', ' + error;
            console.error('Error getting Hugo index file:', err);
        });
}

/**
 * Trigger a search in lunr and transform the result
 *
 * @param  {String} term
 * @return {Array}  results
 */
function search(term) {
    // Find the item in our index corresponding to the lunr one to have more info
    // Remove Lunr special search characters: https://lunrjs.com/guides/searching.html
    var searchTerm = lunr.tokenizer(term.replace(/[*:^~+-]/, ' ')).reduce( function(a,token){return a.concat(searchPatterns(token.str))}, []).join(' ');
    return !searchTerm ? [] : lunrIndex.search(searchTerm).map(function(result) {
        return { index: result.ref, matches: Object.keys(result.matchData.metadata) }
    });
}

function searchPatterns(word) {
    return [
        word + '^100',
        word + '*^10',
        '*' + word + '^10',
        word + '~' + Math.floor(word.length / 4) + '^1' // allow 1 in 4 letters to have a typo
    ];
}

// Let's get started
initLunr();
$(function() {
    var searchList = new autoComplete({
        /* selector for the search box element */
        selectorToInsert: '#header-wrapper',
        selector: '#search-by',
        /* source is the callback to perform the search */
        source: function(term, response) {
            response(search(term));
        },
        /* renderItem displays individual search results */
        renderItem: function(item, term) {
            var page = pagesIndex[item.index];
            var numContextWords = 2;
            var contextPattern = '(?:\\S+ +){0,' + numContextWords + '}\\S*\\b(?:' +
                item.matches.map( function(match){return match.replace(/\W/g, '\\$&')} ).join('|') +
                ')\\b\\S*(?: +\\S+){0,' + numContextWords + '}';
            var context = page.content.match(new RegExp(contextPattern, 'i'));
            var divcontext = document.createElement('div');
            divcontext.className = 'context';
            divcontext.innerText = (context || '');
            var divsuggestion = document.createElement('div');
            divsuggestion.className = 'autocomplete-suggestion';
            divsuggestion.setAttribute('data-term', term);
            divsuggestion.setAttribute('data-title', page.title);
            divsuggestion.setAttribute('data-uri', baseUri + page.uri);
            divsuggestion.setAttribute('data-context', context);
            divsuggestion.innerText = '» ' + page.title;
            divsuggestion.appendChild(divcontext);
            return divsuggestion.outerHTML;
        },
        /* onSelect callback fires when a search suggestion is chosen */
        onSelect: function(e, term, item) {
            location.href = item.getAttribute('data-uri');
        }
    });

    // JavaScript-autoComplete only registers the focus event when minChars is 0 which doesn't make sense, let's do it ourselves
    // https://github.com/Pixabay/JavaScript-autoComplete/blob/master/auto-complete.js#L191
    var selector = $('#search-by').get(0);
    $(selector).focus(selector.focusHandler);
});
