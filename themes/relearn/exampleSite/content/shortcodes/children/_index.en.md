+++
alwaysopen = false
description = "List the child pages of a page"
title = "Children"
+++

The `children` shortcode lists the child pages of a page and its descendants .

## Usage

````go
{{%/* children */%}}
````

### Parameter

| Name               | Default           | Notes       |
|:-------------------|:------------------|:------------|
| **page**           | _&lt;current&gt;_ | Specify the page name (section name) to display children for. |
| **containerstyle** | `ul`              | Choose the style used to group all children. It could be any HTML tag name. |
| **style**          | `li`              | Choose the style used to display each descendant. It could be any HTML tag name. |
| **showhidden**     | `false`           | When `true`, child pages hidden from the menu will be displayed aswell. |
| **description**    | `false`           | When `true` shows a short text under each page in the list. When no description or summary exists for the page, the first 70 words of the content is taken - [read more info about summaries on gohugo.io](https://gohugo.io/content/summaries/). |
| **depth**          | `1`               | The depth of descendants to display. For example, if the value is `2`, the shortcode will display two levels of child pages.  To get all descendants, set this value to a high  number eg. `999`. |
| **sort**           | see notes         | The sort order of the displayed list.<br/><br/>If not set it is sorted by the [`ordersectionsby`]({{% relref "basics/configuration#global-site-parameters" %}}) setting of the site and the pages frontmatter<br/><br/>- `weight`: to sort on menu order<br/>- `title`: to sort alphabetically on menu label. |

## Examples

### All Default

````go
{{%/* children  */%}}
````

{{% children %}}

### With Description

````go
{{%/* children description="true" */%}}
````

{{%children description="true" %}}

### Infinte Depth and Hidden Pages

````go
{{%/* children depth="999" showhidden="true" */%}}
````

{{% children depth="999" showhidden="true" %}}

### Heading Styles for Container and Elements

````go
{{%/* children containerstyle="div" style="h2" depth="3" description="true" */%}}
````

{{% children containerstyle="div" style="h2" depth="3" description="true" %}}

### Divs for Group and Element Styles

````go
{{%/* children containerstyle="div" style="div" depth="3" */%}}
````

{{% children containerstyle="div" style="div" depth="3" %}}
