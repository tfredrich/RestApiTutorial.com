+++
description = "Some testing for different styles used in syntax highlightning and preformatted blocks"
title = "Code"
+++

Some testing for different styles used in syntax highlightning and preformatted blocks.

## Inline Code

`This is some very long inline code. Where does it wrap?`

What about wrapping short inline code if multiple sections are written `side` `by` `side`?

What about wrapping short inline code if multiple sections are written `side`/`by`/`side`?

What about wrapping long inline code if multiple sections are written `side567` `by34567` `side567`?

What about wrapping long inline code if multiple sections are written `side567`/`by34567`/`side567`?

Can we just use a <code>simple HTML element </code>?

## Block Code

````
Code fences without any selected language
````

````json
{
  "well": "some JSON in codefences in here"
}
````

<pre><code>{
  "well": "some JSON in HTML elements here"
}
</code></pre>

## Block Preformatted

    Some preformatted stuff with markdown indention

<pre>
Some preformatted stuff in HTML elements
</pre>
