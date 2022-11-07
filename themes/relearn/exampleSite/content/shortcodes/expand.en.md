+++
description = "Expandable/collapsible sections of text"
title = "Expand"
+++

The `expand` shortcode displays an expandable/collapsible section of text.

{{% expand title="Expand me..." %}}Thank you!{{% /expand %}}

## Usage

While the examples are using named parameter you are free to use positional aswell.

{{< tabs groupId="shortcode-parameter">}}
{{% tab name="named" %}}

````go
{{%/* expand title="Expand me..." */%}}Thank you!{{%/* /expand */%}}
````

{{% /tab %}}
{{% tab name="positional" %}}

````go
{{%/* expand "Expand me..." */%}}Thank you!{{%/* /expand */%}}
````

{{% /tab %}}
{{< /tabs >}}

### Parameter

| Name                  | Position | Default          | Notes       |
|:----------------------|:---------|:-----------------|:------------|
| **title**             | 1        | `"Expand me..."` | Arbitray text to appear next to the expand/collapse icon. |
| **open**              | 2        | `false`          | When `true` the content text will be initially shown as expanded. |
| _**&lt;content&gt;**_ |          | _&lt;empty&gt;_  | Arbitray text to be displayed on expand. |

## Examples

### All Defaults

````go
{{%/* expand */%}}Yes, you did it!{{%/* /expand */%}}
````

{{% expand %}}Yes, you did it!{{% /expand %}}

### Initially Expanded

````go
{{%/* expand title="Expand me..." open="true" */%}}No need to press you!{{%/* /expand */%}}
````

{{% expand title="Expand me..." open="true" %}}No need to press you!{{% /expand %}}

### Arbitrary Text

````go
{{%/* expand title="Show me almost endless possibilities" */%}}
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
{{%/* /expand */%}}
````

{{% expand title="Show me almost endless possibilities" %}}
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
{{% /expand %}}
