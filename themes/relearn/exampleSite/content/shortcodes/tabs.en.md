+++
description = "Show content in tabbed views"
title = "Tabbed views"
+++

The `tabs` shortcode displays arbitrary content in unlimited number of tabs. This comes in handy eg. for providing code snippets for multiple languages or providing configuration in different formats.

{{< tabs groupId="tabs-example-language" >}}
{{% tab name="python" %}}

```python
print("Hello World!")
```

{{% /tab %}}
{{% tab name="bash" %}}

```bash
echo "Hello World!"
```

{{% /tab %}}
{{< /tabs >}}

## Usage

````go
{{</* tabs */>}}
{{%/* tab name="python" */%}}
```python
print("Hello World!")
```
{{%/* /tab */%}}
{{%/* tab name="bash" */%}}
```bash
echo "Hello World!"
```
{{%/* /tab */%}}
{{</* /tabs */>}}
````

### Parameter

| Name                  | Default          | Notes       |
|:----------------------|:-----------------|:------------|
| **groupId**           | `default`        | Arbitrary name of the group the tab view belongs to.<br/><br/>Tab views with the same **groupId** sychronize their selected tab. This sychronization applies to the whole site! |
| _**&lt;content&gt;**_ | _&lt;empty&gt;_  | Arbitrary number of tabs defined with the `tab` sub-shortcode. |

{{% notice warning %}}
When using tab views with different content sets, make sure to use a common `groupId` for equal sets of tabs but distinct `groupId` for different sets.

The tab selection is restored automatically based on the `groupId` and if it cannot find a tab item because it came from the `'default'` group on a different page then all tabs will be empty at first!
{{% /notice %}}

## Examples

### Distinct `groupId`

````go
{{</* tabs groupId="config" */>}}
{{%/* tab name="json" */%}}
```json
{
  "Hello": "World"
}
```
{{%/* /tab */%}}
{{%/* tab name="XML" */%}}
```xml
<Hello>World</Hello>
```
{{%/* /tab */%}}
{{%/* tab name="properties" */%}}
```properties
Hello = World
```
{{%/* /tab */%}}
{{</* /tabs */>}}
````

{{< tabs groupId="tabs-example-config" >}}
{{% tab name="json" %}}
```json
{
  "Hello": "World"
}
```
{{% /tab %}}
{{% tab name="XML" %}}
```xml
<Hello>World</Hello>
```
{{% /tab %}}
{{% tab name="properties" %}}
```ini
Hello = World
```
{{% /tab %}}
{{< /tabs >}}

### Non-Distinct `groupId`

See what happens to this tab view if you select **properties** tab from the previous example.

````go
{{</* tabs groupId="config" */>}}
{{%/* tab name="json" */%}}
```json
{
  "Hello": "World"
}
```
{{%/* /tab */%}}
{{%/* tab name="XML" */%}}
```xml
<Hello>World</Hello>
```
{{%/* /tab */%}}
{{</* /tabs */>}}
````

{{< tabs groupId="tabs-example-config" >}}
{{% tab name="json" %}}
```json
{
  "Hello": "World"
}
```
{{% /tab %}}
{{% tab name="XML" %}}
```xml
<Hello>World</Hello>
```
{{% /tab %}}
{{< /tabs >}}
