+++
description = "Get value of site params"
title = "Site param"
+++

The `siteparam` shortcode prints values of site params.

## Usage

While the examples are using named parameter you are free to use positional aswell.

{{< tabs groupId="shortcode-parameter">}}
{{% tab name="named" %}}


````go
{{%/* siteparam name="editURL" */%}}
````

{{% /tab %}}
{{% tab name="positional" %}}

````go
{{%/* siteparam "editURL" */%}}
````

{{% /tab %}}
{{< /tabs >}}

### Parameter

| Name                 | Position | Default          | Notes       |
|:---------------------|:---------|:-----------------|:------------|
| **name**             | 1        | _&lt;empty&gt;_  | The name of the site param to be displayed. |

## Examples

### `editURL` from `config.toml`

```go
`editURL` value: {{%/* siteparam name="editURL" */%}}
```

`editURL` value: {{% siteparam name="editURL" %}}
