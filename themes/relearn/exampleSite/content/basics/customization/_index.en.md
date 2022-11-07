+++
title = "Customization"
weight = 25
+++

The Relearn theme has been built to be as configurable as possible by defining multiple [partials](https://gohugo.io/templates/partials/)

In `themes/hugo-theme-relearn/layouts/partials/`, you will find all the partials defined for this theme. If you need to overwrite something, don't change the code directly. Instead [follow this page](https://gohugo.io/themes/customizing/). You'd create a new partial in the `layouts/partials` folder of your local project. This partial will have the priority.

This theme defines the following partials :

- `header.html`: the header of the page. _Not meant to be overwritten_
- `footer.html`: the footer of the page._Not meant to be overwritten_
- `menu.html`: left menu. _Not meant to be overwritten_
- `search.html`: search box. _Not meant to be overwritten_
- `custom-header.html`: custom headers in page. Meant to be overwritten when adding CSS imports. Don't forget to include `style` HTML tag directive in your file.
- `custom-footer.html`:  custom footer in page. Meant to be overwritten when adding Javacript. Don't forget to include `javascript` HTML tag directive in your file.
- `favicon.html`: the favicon
- `logo.html`: the logo, on top left hand corner
- `meta.html`: HTML meta tags, if you want to change default behavior
- `menu-pre.html`: side-wide configuration to prepend to menu items. If you override this, it is your responsiblity to take the page's `pre` setting into account.
- `menu-post.html`: side-wide configuration to append to menu items. If you override this, it is your responsiblity to take the page's `post` setting into account.
- `menu-footer.html`: footer of the the left menu
- `toc.html`: table of contents
- `content.html`: the content page itself. This can be overridden if you wan't to display page's meta data above or below the content.
- `content-footer`: footer below the content, has a default implementation but you can overwrite it if you don't like it.
## Change the logo

Create a new file in `layouts/partials/` named `logo.html`. Then write any HTML you want.
You could use an `img` HTML tag and reference an image created under the *static* folder, or you could paste a SVG definition!

{{% notice note %}}
The size of the logo will adapt automatically
{{% /notice %}}

## Change the favicon

If your favicon is a SVG, PNG or ICO, just drop off your image in your local `static/images/` folder and name it `favicon.svg`, `favicon.png` or `favicon.ico` respectivly.

If no favicon file is found, the theme will lookup the alternative filename `logo` in the same location and will repeat the search for the list of supported file types.

If you need to change this default behavior, create a new file in `layouts/partials/` named `favicon.html`. Then write something like this:

```html
<link rel="icon" href="/images/favicon.bmp" type="image/bmp" />
```

## Change the colors {#theme-variant}

The Relearn theme lets you choose between some predefined color variants in light or dark mode, but feel free to add one yourself!

You can preview the shipped variants by changing them in the variant selector at the bottom of the menu.

### Single variant

Set the `themeVariant` value with the name of your theme file. That's it!

```toml
[params]
  themeVariant = "relearn-light"
```

In the above exaple your theme file has to be named `theme-relearn-light.css`

### Multiple variants

You can also set multiple variants. In this case, the first variant is the default choosen on first view and a variant switch will be shown in the menu footer.

```toml
[params]
  # Change default color scheme with a variant one.
  themeVariant = [ "relearn-light", "relearn-dark" ]
```

{{% notice tip %}}
If you want to switch the syntax highlightning theme together with your color variant, generate a syntax highlighting stylesheet and configure your installation [according to Hugo's documentation](https://gohugo.io/content-management/syntax-highlighting/), and `@import` this stylesheet in your color variant stylesheet. For an example, take a look into `theme-relearn-light.css` and `config.toml` of the exampleSite.
{{% /notice %}}

### Roll your own

If you are not happy with the shipped variants you can either copy one of the shipped files, edit them in a text editor and configure the `themeVariant` parameter in your `config.toml` or just use the [interactive variant generator]({{%relref "basics/generator" %}}).
