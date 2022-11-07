+++
disableToc = false
title = "What's new"
weight = 2
+++

This document shows you what's new in the latest release. For a detailed list of changes, see the [history page]({{%relref "basics/history" %}}).

**Breaking**: A change that requires action by you after upgrading to assure the site is still functional.

**Change**: A change in default behavior. This may requires action by you / may or may not be revertable by configuration.

**New**: Marks new behavior you might find interesting or comes configurable.

---

## 4.0.0

- **Breaking**: The `custom_css` config parameter was removed from the configuration. If used in an existing installation, it can be achieved by overriding the `custom-header.html` template in a much more generic manner.

- **Breaking**: Because anchor hover color was not configurable without introducing more complexitity to the variant stylesheets, we decided to remove `--MAIN-ANCHOR-color` instead. You don't need to change anything in your custom color stylesheet as the anchors now get their colors from `--MAIN-LINK-color` and `--MAIN-ANCHOR-HOVER-color` respectivley.

- **New**: All shortcodes now support named parameter. The positional parameter are still supported but will not be enhanced with new features, so you don't need to change anything in your installation.

  This applies to [`expand`]({{% relref "shortcodes/expand" %}}) , [`include`]({{% relref "shortcodes/include" %}}) , [`notice`]({{% relref "shortcodes/notice" %}}) and [`siteparam`]({{% relref "shortcodes/siteparam" %}}) .

- **New**: The [`button`]({{% relref "shortcodes/button" %}}) shortcode received some love and now has a parameter for the color style similar to other shortcodes.

- **New**: New colors `--PRIMARY-color` and `--SECONDARY-color` were added to provide easier modification of your custom style. Shortcodes with a color style can now have `primary` or `secondary` as additional values.

  These two colors are the default for other, more specific color variables. You don't need to change anything in your existing custom color stylesheets as those variables get reasonable default values.

- **New**: The documentation for all shortcodes were revised.

---

## 3.4.0

- **Breaking**: If you had previously overwritten the `custom-footer.html` partial to add visual elements below the content of your page, you have to move this content to the new partial `content-footer.html`. `custom-footer.html` was never meant to contain HTML other than additional styles and JavaScript.

- **New**: If you prefer expandable/collapsible menu items, you can now set `collapsibleMenu=true` in your `config.toml`. This will add arrows to all menu items that contain sub menus. The menu will expand/collapse without navigation if you click on an arrow.

- **New**: You can activate [print support]({{%relref "basics/configuration#activate-print-support" %}}) in your `config.toml` to add the capability to print whole chapters or even the complete site.

- **New**: Translation for Traditional Chinese.

---

## 3.3.0

- **New**: Introduction of new CSS variables to set the font. The theme distinguishs between `--MAIN-font` for all content text and `--CODE-font` for inline or block code. There are additional overrides for all headings. See the [theme variant generator]({{%relref "basics/generator" %}}) of the exampleSite for all available variables.

- **New**: The new shortcode `swagger` is available to include a UI for REST OpenAPI Specifications. See the [documentation]({{% relref "shortcodes/swagger" %}}) for available features. This feature will not work with Internet Explorer 11.

---

## 3.2.0

- **Change**: In this release the Mermaid JavaScript library will only be loaded on demand if the page contains a Mermaid shortcode or is using Mermaid codefences. This changes the behavior of `disableMermaid` config option as follows: If a Mermaid shortcode or codefence is found, the option will be ignored and Mermaid will be loaded regardlessly.

  The option is still useful in case you are using scripting to set up your graph. In this case no shortcode or codefence is involved and the library is not loaded by default. In this case you can set `disableMermaid=false` in your frontmatter to force the library to be loaded. See the [theme variant generator]({{%relref "basics/generator" %}}) of the exampleSite for an example.

  **This change requires at least Hugo 0.93.0 to be used**. The minimum requirement will be reported during build on the console if not met.

- **New**: Additional color variant variable `--MERMAID-theme` to set the variant's Mermaid theme. This causes the Mermaid theme to switch with the color variant if it defers from the setting of the formerly selected color variant.

---

## 3.1.0

- **New**: [`attachment`]({{% relref "shortcodes/attachments" %}}) and [`notice`]({{% relref "shortcodes/notice" %}}) shortcodes have a new parameter to override the default icon. Allowed values are all [Font Awesome 5 Free](https://fontawesome.com/v5/search?m=free) icons.

---

## 3.0.0

- **Breaking**: We made changes to the menu footer. If you have your `menu-footer.html` [partial overridden]({{%relref "basics/customization" %}}), you may have to review the styling (eg. margins/paddings) in your partial. For a reference take a look into the `menu-footer.html` partial that is coming with the exampleSite.

  This change was made to allow your own menu footer to be placed right after the so called prefooter that comes with the theme (containing the language switch and *Clear history* functionality).

- **Breaking**: We have changed the default colors from the original Learn theme (the purple menu header) to the Relearn defaults (the light green menu header) as used in the official documentation.

  This change will only affect your installation if you've not set the `themeVariant` parameter in your `config.toml`. [If you still want to use the Learn color variant]({{%relref "basics/customization/#theme-variant" %}}), you have to explicitly set `themeVariant="learn"` in your `config.toml`.

  Note, that this will also affect your site if viewed with Internet Explorer 11 but in this case it can not be reconfigured as Internet Explorer does not support CSS variables.

- **Change**: Due to a bug, that we couldn't fix in a general manner for color variants, we decided to remove `--MENU-SEARCH-BOX-ICONS-color` and introduced `--MENU-SEARCH-color` instead. You don't need to change anything in your custom color stylesheet as the old name will be used as a fallback.

- **Change**: For consistency reasons, we renamed `--MENU-SEARCH-BOX-color` to `--MENU-SEARCH-BORDER-color`. You don't need to change anything in your custom color stylesheet as the old name will be used as a fallback.

- **New**: With this release you are now capable to define your own *dark mode* variants.

  To make this possible, we have introduced a lot more color variables you can use in [your color variants]({{%relref "basics/customization/#theme-variant" %}}). Your old variants will still work and don't need to be changed as apropriate fallback values are used by the theme. Nevertheless, the new colors allow for much more customization.

  To see what's now possible, see the new variants `relearn-dark` and `neon` that are coming with this release.

- **New**: To make the creation of new variants easier for you, we've added a new interactive [theme variant generator]({{%relref "basics/generator" %}}). This feature will not work with Internet Explorer 11.

- **New**: You can now configure multiple color variants in your `config.toml`. In this case, the first variant is the default chosen on first view and a variant switch will be shown in the menu footer. See the [documentation]({{%relref "basics/customization/#multiple-variants" %}}) for configuration.

  Note, that the new variant switch will not work with Internet Explorer 11 as it does not support CSS variables. Therefore, the variant switcher will not be displayed with Internet Explorer 11.

---

## 2.9.0

- **Breaking**: This release removes the themes implementation of `ref`/`relref` in favor for Hugos standard implementation. This is because of inconsistencies with the themes implementation. In advantage, your project becomes standard complient and exchanging this theme in your project to some other theme will be effortless.

  In a standard complient form you must not link to the `*.md` file but to its logical name. You'll see, referencing other pages becomes much easier. All three types result in the same reference:

  | Type          | Non-Standard                     | Standard               |
  | ------------- | -------------------------------- | ---------------------- |
  | Branch bundle | `basics/configuration/_index.md` | `basics/configuration` |
  | Leaf bundle   | `basics/configuration/index.md`  | `basics/configuration` |
  | Page          | `basics/configuration.md`        | `basics/configuration` |

  If you've linked from a page of one language to a page of another language, conversion is a bit more difficult but [Hugo got you covered](https://gohugo.io/content-management/cross-references/#link-to-another-language-version) as well.

  Also, the old themes implementation allowed refs to non-existing content. This will cause Hugos implementation to show the error below and abort the generation. If your project relies on this old behavior, you can [reconfigure the error handling](https://gohugo.io/content-management/cross-references/#link-to-another-language-version) of Hugos implementation.

  In the best case your usage of the old implementation is already standard complient and you don't need to change anything. You'll notice this very easily once you've started `hugo server` after an upgrade and no errors are written to the console.

  You may see errors on the console after the update in the form:

  ````sh
  ERROR 2021/11/19 22:29:10 [en] REF_NOT_FOUND: Ref "basics/configuration/_index.md": "hugo-theme-relearn\exampleSite\content\_index.en.md:19:22": page not found
  ````

  In this case, you must apply one of two options:

  1. Copy the old implementation files `theme/hugo-theme-relearn/layouts/shortcode/ref.html` and `theme/hugo-theme-relearn/layouts/shortcode/relref.html` to your own projects `layouts/shortcode/ref.html` and `layouts/shortcode/relref.html` respectively. **This is not recommended** as your project will still rely on non-standard behavior afterwards.

  2. Start up a text editor with regular expression support for search and replace. Apply the following conversions in the given order on all `*.md` files. **This is the recommended choice**.

    | Type          | Search                       | Replace by |
    | ------------- | ---------------------------- | ---------- |
    | Branch bundle | `(ref\s+"[^"]*)/_index\.md"` | `$1"`      |
    | Leaf bundle   | `(ref\s+"[^"]*)/index\.md"`  | `$1"`      |
    | Page          | `(ref\s+"[^"]*)\.md"`        | `$1"`      |

---

## 2.8.0

- **Change**: Although never officially documented, this release removes the font `Novacento`/`Novecento`. If you use it in an overwritten CSS please replace it with `Work Sans`. This change was necessary as Novacento did not provide all Latin special characters and lead to mixed styled character text eg. for czech.

- **New**: The theme now supports favicons served from `static/images/` named as `favicon` or `logo` in SVG, PNG or ICO format [out of the box]({{% relref "basics/customization/#change-the-favicon" %}}). An overridden partial `layouts/partials/favicon.html` may not be necessary anymore in most cases.

- **New**: You can hide the table of contents menu for the whole site by setting the `disableToc` option in your `config.toml`. For an example see [the example configuration]({{%relref "basics/configuration/#global-site-parameters" %}}).

---

## 2.7.0

- **New**: Optional second parameter for [`notice`]({{% relref "shortcodes/notice" %}}) shortcode to set title in box header.

---

## 2.6.0

- **New**: Your site can now be served from a subfolder if you set `baseURL` and `canonifyURLs=true` in your `config.toml`. See the [documentation]({{% relref "basics/configuration/#a-word-on-running-your-site-in-a-subfolder" %}}) for a detailed example.

---

## 2.5.0

- **Change**: New colors `--CODE-BLOCK-color` and `--CODE-BLOCK-BG-color` were added to provide a fallback for Hugos syntax highlightning in case `guessSyntax=true` is set. Ideally the colors are set to the same values as the ones from your chosen chroma style.

---

## 2.4.0

- **Change**: Creation of customized stylesheets was simplified down to only contain the CSS variables. Everything else can and should be deleted from your custom stylesheet to assure everything works fine. For the predefined stylesheet variants, this change is already included.

- **New**: Hidden pages are displayed by default in their according tags page. You can now turn off this behavior by setting `disableTagHiddenPages=true` in your `config.toml`.

- **New**: You can define the expansion state of your menus for the whole site by setting the `alwaysopen` option in your `config.toml`. Please see further [documentation]({{%relref "cont/pages/#override-expand-state-rules-for-menu-entries" %}}) for possible values and default behavior.

- **New**: New frontmatter `ordersectionsby` option to change immediate children sorting in menu and `children` shortcode. Possible values are `title` or `weight`.

- **New**: Alternate content of a page is now advertised in the HTML meta tags. See [Hugo documentation](https://gohugo.io/templates/rss/#reference-your-rss-feed-in-head).

---

## 2.3.0

- **New**: Showcase multilanguage features by provding a documentation translation "fer us pirrrates". There will be no other translations besides the original English one and the Pirates one due to maintenance constraints.

---

## 2.2.0

- **New**: Hidden pages are displayed by default in the sitemap generated by Hugo and are therefore visible for search engine indexing. You can now turn off this behavior by setting `disableSeoHiddenPages=true` in your `config.toml`.

---

## 2.1.0

- **Change**: In case the site's structure contains addional *.md files not part of the site (eg files that are meant to be included by site pages - see `CHANGELOG.md` in the exampleSite), they will now be ignored by the search.

- **New**: Hidden pages are indexed for the site search by default. You can now turn off this behavior by setting `disableSearchHiddenPages=true` in your `config.toml`.

- **New**: If a search term is found in an `expand` shortcode, the expand will be opened.

- **New**: The menu will scroll the active item into view on load.

---

## 2.0.0

- **Change**: Syntaxhighlightning was switched to the [built in Hugo mechanism](https://gohugo.io/content-management/syntax-highlighting/). You may need to configure a new stylesheet or decide to roll you own as described on in the Hugo documentation

- **Change**: In the predefined stylesheets there was a typo and `--MENU-HOME-LINK-HOVERED-color` must be changed to `--MENU-HOME-LINK-HOVER-color`. You don't need to change anything in your custom color stylesheet as the old name will be used as a fallback.

- **Change**: `--MENU-HOME-LINK-color` and `--MENU-HOME-LINK-HOVER-color` were missing in the documentation. You should add them to your custom stylesheets if you want to override the defaults.

- **Change**: Arrow navigation and `children` shortcode were ignoring setting for `ordersectionsby`. This is now changed and may result in different sorting order of your sub pages.

- **Change**: If hidden pages are accessed directly by typing their URL, they will be exposed in the menu.

- **Change**: A page without a `title` will be treated as `hidden=true`.

- **New**: You can define the expansion state of your menus in the frontmatter. Please see further [documentation]({{%relref "cont/pages/#override-expand-state-rules-for-menu-entries" %}}) for possible values and default behavior.

- **New**: New partials for defining pre/post content for menu items and the content. See [documentation]({{% relref "basics/customization" %}}) for further reading.

- **New**: Shortcode [`children`]({{% relref "shortcodes/children" %}}) with new parameter `containerstyle`.

- **New**: New shortcode [`include`]({{% relref "shortcodes/include" %}}) to include arbitrary file content into a page.

---

## 1.2.0

- **New**: Shortcode [`expand`]({{% relref "shortcodes/expand" %}}) with new parameter to open on page load.

---

## 1.1.0

- **New**: [`Mermaid`]({{% relref "shortcodes/mermaid#configuration" %}}) config options can be set in `config.toml`.

---

## 1.0.0

- **New**: Initial fork of the [Learn theme](https://github.com/matcornic/hugo-theme-learn) based on Learn 2.5.0 on 2021-07-01. This introduces no new features besides a global rename to `Relearn` and a new logo. For the reasons behind forking the Learn theme, see [this comment](https://github.com/matcornic/hugo-theme-learn/issues/442#issuecomment-907863495) in the Learn issues.
