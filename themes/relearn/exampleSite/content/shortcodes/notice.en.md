+++
description = "Disclaimers to help you structure your page"
title = "Notice"
+++

The `notice` shortcode shows various types of disclaimers with adjustable color, title and icon to help you structure your page.

{{% notice style="primary" title="There may be pirates" icon="skull-crossbones" %}}
It is all about the boxes.
{{% /notice %}}

## Usage

While the examples are using named parameter you are free to use positional aswell.

{{< tabs groupId="shortcode-parameter">}}
{{% tab name="named" %}}

````go
{{%/* notice style="primary" title="There may be pirates" icon="skull-crossbones" */%}}
It is all about the boxes.
{{%/* /notice */%}}
````

{{% /tab %}}
{{% tab name="positional" %}}

````go
{{%/* notice primary "There may be pirates" "skull-crossbones" */%}}
It is all about the boxes.
{{%/* /notice */%}}
````

{{% /tab %}}
{{< /tabs >}}

### Parameter

| Name      | Position | Default   | Notes       |
|:----------|:---------|:----------|:------------|
| **style** | 1        | `default` | The color scheme used to highlight the box content.<br/><br/>- by severity: `info`, `note`, `tip`, `warning`<br/>- by brand color: `primary`, `secondary`<br/>- by color: `blue`, `green`, `grey`, `orange`, `red`<br/>- by special color: `default`, `transparent` |
| **title** | 2        | see notes | Arbitray text for the box title. Depending on the **style** there may be a default title. Any given value will overwrite the default.<br/><br/>- for severity styles: the matching title for the severity<br/>- for all other colors: _&lt;empty&gt;_<br/><br/>If you want no title for a severity style, you have to set this parameter to `" "` (a non empty string filled with spaces) |
| **icon**  | 3        | see notes | [Font Awesome icon name]({{%relref "cont/icons#finding-an-icon" %}}) set to the left of the title. Depending on the **style** there may be a default icon. Any given value will overwrite the default.<br/><br/>- for severity styles: a nice matching icon for the severity<br/>- for all other colors: _&lt;empty&gt;_<br/><br/>If you want no icon for a severity style, you have to set this parameter to `" "` (a non empty string filled with spaces) |

## Examples

### By Severity

#### Info with markup

{{% notice style="info" %}}
An **information** disclaimer

You can add standard markdown syntax:

- multiple paragraphs
- bullet point lists
- _emphasized_, **bold** and even **_bold emphasized_** text
- [links](https://example.com)
- etc.

```plaintext
...and even source code
```

> the possiblities are endless (almost - including other shortcodes may or may not work)
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="info" */%}}
An **information** disclaimer

You can add standard markdown syntax:

- multiple paragraphs
- bullet point lists
- _emphasized_, **bold** and even ***bold emphasized*** text
- [links](https://example.com)
- etc.

```plaintext
...and even source code
```

> the possiblities are endless (almost - including other shortcodes may or may not work)
{{%/* /notice */%}}
````

{{% /expand %}}

#### Note

{{% notice style="note" %}}
A **notice** disclaimer
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="note" */%}}
A **notice** disclaimer
{{%/* /notice */%}}
````

{{% /expand %}}

#### Tip

{{% notice style="tip" %}}
A **tip** disclaimer
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="tip" */%}}
A **tip** disclaimer
````

{{% /expand %}}

#### Warning

{{% notice style="warning" %}}
A **warning** disclaimer
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="warning" */%}}
A **warning** disclaimer
{{%/* /notice */%}}
````

{{% /expand %}}

#### Warning with Non-Default Title and Icon

{{% notice style="warning" title="Here are dragons" icon="dragon" %}}
A **warning** disclaimer
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="warning" title="Here are dragons" icon="dragon" */%}}
A **warning** disclaimer
{{%/* /notice */%}}
````

{{% /expand %}}

#### Warning without a Title and Icon

{{% notice style="warning" title=" " icon=" " %}}
A **warning** disclaimer
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="warning" title=" " icon=" " */%}}
A **warning** disclaimer
{{%/* /notice */%}}
````

{{% /expand %}}

### By Brand Colors

#### Primary with Title only

{{% notice style="primary" title="Primary" %}}
A **primary** disclaimer
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="primary" title="Primary" */%}}
A **primary** disclaimer
{{%/* /notice */%}}
````

{{% /expand %}}

#### Secondary with Icon only

{{% notice style="secondary" icon="stopwatch" %}}
A **secondary** disclaimer
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="secondary" icon="stopwatch" */%}}
A **secondary** disclaimer
{{%/* /notice */%}}
````

{{% /expand %}}

### By Color

#### Blue without a Title and Icon

{{% notice style="blue" %}}
A **blue** disclaimer
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="blue" */%}}
A **blue** disclaimer
{{%/* /notice */%}}
````

{{% /expand %}}

#### Green with Title only

{{% notice style="green" title="Green" %}}
A **green** disclaimer
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="green" title="Green" */%}}
A **green** disclaimer
{{%/* /notice */%}}
````

{{% /expand %}}

#### Grey with Icon only

{{% notice style="grey" icon="bug" %}}
A **grey** disclaimer
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="grey" icon="bug" */%}}
A **grey** disclaimer
{{%/* /notice */%}}
````

{{% /expand %}}

#### Orange with Title and Icon

{{% notice style="orange" title="Orange" icon="bug" %}}
A **orange** disclaimer
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="orange" title="Orange" icon="bug" */%}}
A **orange** disclaimer
{{%/* /notice */%}}
````

{{% /expand %}}

#### Red

{{% notice style="red" %}}
A **red** disclaimer
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="red" */%}}
A **red** disclaimer
{{%/* /notice */%}}
````

{{% /expand %}}

### By Special Color

#### Default with Title and Icon

{{% notice default "Pay Attention to this Note!" "skull-crossbones" %}}
Some serious information.
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="default" title"Pay Attention to this Note!" icon="skull-crossbones" */%}}
Some serious information.
{{%/* /notice */%}}
````

{{% /expand %}}

#### Transparent with Title and Icon

{{% notice style="transparent" title="Pay Attention to this Note!" icon="skull-crossbones" %}}
Some serious information.
{{% /notice %}}

{{% expand "Show markup" %}}

````go
{{%/* notice style="transparent" title"Pay Attention to this Note!" icon="skull-crossbones" */%}}
Some serious information.
{{%/* /notice */%}}
````

{{% /expand %}}
