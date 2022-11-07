+++
description = "List of files attached to a page"
title = "Attachments"
+++

The `attachments` shortcode displays a list of files attached to a page with adjustable color, title and icon.

{{% attachments /%}}

## Usage

````go
{{%/* attachments /*/%}}
````

The shortcurt lists files found in a specific folder.

Currently, it supports two implementations for pages

1. If your page is a Markdown file, attachements must be placed in a folder named like your page and ending with `.files`.

    > * content
    >   * _index.md
    >   * **page.files**
    >      * attachment.pdf
    >   * page.md

2. If your page is a folder, attachements must be placed in a nested `files` folder.

    > * content
    >   * _index.md
    >   * page
    >      * index.md
    >      * **files**
    >          * attachment.pdf

Be aware that if you use a multilingual website, you will need to have as many folders as languages.


### Parameter

| Name        | Default       | Notes       |
|:------------|:--------------|:------------|
| **style**   | `transparent` | The color scheme used to highlight the box content.<br/><br/>- by severity: `info`, `note`, `tip`, `warning`<nd color: `primary`, `secondary`<br/>- by color: `blue`, `green`, `grey`, `orange`, `red`<br/>- by special color: `default`,t` |
| **title**   | see notes     | Arbitray text for the box title. Depending on the **style** there may be a default title. Any given value will overwault.<br/><br/>- for severity styles: the matching title for the severity<br/>- for all other colors: `Attachments`<br/><br/>If you wa you have to set this parameter to `" "` (a non empty string filled with spaces) |
| **icon**    | see notes     | [Font Awesome icon name]({{%relref "cont/icons#finding-an-icon" %}}) set to the left of the title. Depending le** there may be a default icon. Any given value will overwrite the default.<br/><br/>- for severity styles: a nice matching iseverity<br/>- for all other colors: `paperclip`<br/><br/>If you want no icon, you have to set this parameter to `" "` (a non empty d with spaces) |
| **sort**    | `asc`         | Sorting the output in `asc`ending or `desc`ending order. |
| **pattern** | `.*`          | A [regular expressions](https://en.wikipedia.org/wiki/Regular_expression), used to filter the attachments by file name. For example:<br/><br/>- to match a file suffix of 'jpg', use `.*jpg` (not `*.jpg`)<br/>- to match file names ending in `jpg` or `png`, use `.*(jpg\|png)` |

## Examples

### Custom Title, List of Attachments Ending in pdf or mp4

````go
{{%/* attachments title="Related files" pattern=".*(pdf|mp4)" /*/%}}
````

{{% attachments title="Related files" pattern=".*(pdf|mp4)" /%}}

### Info Styled Box, Descending Sort Order

````go
{{%/* attachments style="info" sort="desc" /*/%}}
````

{{% attachments style="info" sort="desc" /%}}

### Style and Icons

For further examples for **style**, **title** and **icon**, see the [`notice` shortcode]({{% relref "shortcodes/notice" %}}) documentation. The parameter are working the same way for both shortcodes, besides having different defaults.
