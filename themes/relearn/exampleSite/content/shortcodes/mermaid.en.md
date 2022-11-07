+++
description = "Generate diagrams and flowcharts from text"
title = "Mermaid"
+++

With the [Mermaid](https://mermaidjs.github.io/) library and shortcode, you can  generate diagrams and flowcharts from text, in a similar manner as Markdown.

{{< mermaid >}}
graph LR;
    If --> Then
    Then --> Else
{{< /mermaid >}}

{{% notice note %}}
This only works in modern browsers.
{{% /notice %}}

{{% notice warning %}}
Due to limitations with [Mermaid](https://github.com/mermaid-js/mermaid/issues/1846), it is currently not possible to use Mermaid code fences in an initially collapsed `expand` shortcode. This is a know issue and [can't be fixed by this theme](https://github.com/McShelby/hugo-theme-relearn/issues/187).
{{% /notice %}}

## Usage

The generated graphs can be be panned by dragging them and zoomed by using the mousewheel. On mobile devices you can use finger gestures.

While the examples are using shortcode syntax it is recommended to use codefence syntax instead. This is because more and more other software supports Mermaid codefences (eg. GitHub) and so your markdown becomes more portable.

{{% notice note %}}
To use codefence syntax you have to turn off `guessSyntax` for the `markup.highlight` setting ([see the configuration section](#configuration)).
{{% /notice %}}

{{< tabs groupId="shortcode-codefence">}}
{{% tab name="codefence" %}}

````plaintext
```mermaid
graph LR;
    If --> Then
    Then --> Else
```
````

{{% /tab %}}
{{% tab name="shortcode" %}}

````go
{{</* mermaid */>}}
graph LR;
    If --> Then
    Then --> Else
{{</* /mermaid */>}}
````

{{% /tab %}}
{{< /tabs >}}

### Parameter

Parameter are only supported when using shortcode syntax. Defaults are used when using codefence syntax.

| Name                  | Default          | Notes       |
|:----------------------|:-----------------|:------------|
| **align**             | `center`         | Allowed values are `left`, `center` or `right`. |
| _**&lt;content&gt;**_ | _&lt;empty&gt;_  | Your mermaid graph. |

## Configuration

Mermaid is configured with default settings. You can customize Mermaid's default settings for all of your files thru a JSON object in your `config.toml`, override these settings per page thru your pages frontmatter or override these setting per diagramm thru [diagram directives](https://mermaid-js.github.io/mermaid/#/directives?id=directives).

The JSON object of your `config.toml` / frontmatter is forwarded into Mermaid's `mermaid.initialize()` function.

See [Mermaid documentation](http://mermaid-js.github.io/mermaid/#/Setup?id=mermaidapi-configuration-defaults) for all allowed settings.

The `theme` setting can also be set by your used color variant. This will be the sitewide default and can - again - be overridden by your settings in `config.toml`, frontmatter or diagram directives.

{{% notice note %}}
To use codefence syntax you have to turn off `guessSyntax` for the `markup.highlight` setting.
{{% /notice %}}

### Global Configuration File

````toml
[params]
  mermaidInitialize = "{ \"theme\": \"dark\" }"

[markup]
  [markup.highlight]
    # if set to `guessSyntax = true`, there will be no unstyled code even if no language
    # was given BUT mermaid code fences will not work anymore! So this is a mandatory
    # setting for your site
    guessSyntax = false
````

### Page's Frontmatter

````toml
+++
mermaidInitialize = "{ \"theme\": \"dark\" }"
+++
````

## Examples

### Flowchart with Non-Default Mermaid Theme

````go
{{</* mermaid align="left" */>}}
%%{init:{"theme":"forest"}}%%
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{<strong>Decision</strong>}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{</* /mermaid */>}}
````

{{< mermaid align="left" >}}
%%{init:{"theme":"forest"}}%%
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{<strong>Decision</strong>}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}

### Sequence

````go
{{</* mermaid */>}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{</* /mermaid */>}}
````

{{< mermaid >}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{< /mermaid >}}

### GANTT

````go
{{</* mermaid */>}}
gantt
        dateFormat  YYYY-MM-DD
        title Adding GANTT diagram functionality to Mermaid
        section A section
        Completed task            :done,    des1, 2014-01-06,2014-01-08
        Active task               :active,  des2, 2014-01-09, 3d
        Future task               :         des3, after des2, 5d
        Future task2              :         des4, after des3, 5d
        section Critical tasks
        Completed task in the critical line :crit, done, 2014-01-06,24h
        Implement parser and jison          :crit, done, after des1, 2d
        Create tests for parser             :crit, active, 3d
        Future task in critical line        :crit, 5d
        Create tests for renderer           :2d
        Add to Mermaid                      :1d
{{</* /mermaid */>}}
````

{{< mermaid >}}
gantt
        dateFormat  YYYY-MM-DD
        title Adding GANTT diagram functionality to Mermaid
        section A section
        Completed task            :done,    des1, 2014-01-06,2014-01-08
        Active task               :active,  des2, 2014-01-09, 3d
        Future task               :         des3, after des2, 5d
        Future task2              :         des4, after des3, 5d
        section Critical tasks
        Completed task in the critical line :crit, done, 2014-01-06,24h
        Implement parser and jison          :crit, done, after des1, 2d
        Create tests for parser             :crit, active, 3d
        Future task in critical line        :crit, 5d
        Create tests for renderer           :2d
        Add to Mermaid                      :1d
{{< /mermaid >}}

### Class

````go
{{</* mermaid */>}}
classDiagram
    Class01 <|-- AveryLongClass : Cool
    Class03 *-- Class04
    Class05 o-- Class06
    Class07 .. Class08
    Class09 --> C2 : Where am i?
    Class09 --* C3
    Class09 --|> Class07
    Class07 : equals()
    Class07 : Object[] elementData
    Class01 : size()
    Class01 : int chimp
    Class01 : int gorilla
    Class08 <--> C2: Cool label
{{</* /mermaid */>}}
````

{{< mermaid >}}
classDiagram
  Class01 <|-- AveryLongClass : Cool
  Class03 *-- Class04
  Class05 o-- Class06
  Class07 .. Class08
  Class09 --> C2 : Where am i?
  Class09 --* C3
  Class09 --|> Class07
  Class07 : equals()
  Class07 : Object[] elementData
  Class01 : size()
  Class01 : int chimp
  Class01 : int gorilla
  Class08 <--> C2: Cool label
{{< /mermaid >}}

### State Diagram with Codefence Syntax

````go
```mermaid
stateDiagram-v2
    open: Open Door
    closed: Closed Door
    locked: Locked Door
    open   --> closed: Close
    closed --> locked: Lock
    locked --> closed: Unlock
    closed --> open: Open
```
````

````mermaid
stateDiagram-v2
  open: Open Door
  closed: Closed Door
  locked: Locked Door
  open   --> closed: Close
  closed --> locked: Lock
  locked --> closed: Unlock
  closed --> open: Open
````
