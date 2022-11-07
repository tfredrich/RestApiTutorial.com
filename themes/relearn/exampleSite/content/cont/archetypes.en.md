+++
title = "Archetypes"
weight = 10
+++

Using the command: `hugo new [relative new content path]`, you can start a content file with the date and title automatically set. While this is a welcome feature, active writers need more: [archetypes](https://gohugo.io/content/archetypes/).

It is pre-configured skeleton pages with default front matter. Please refer to the documentation for types of page to understand the differences.

## Chapter {#archetypes-chapter}

To create a Chapter page, run the following commands

```shell
hugo new --kind chapter <name>/_index.md
```

It will create a page with predefined Front-Matter:

```toml
+++
chapter = true
pre = "<b>X. </b>"
title = "{{ replace .Name "-" " " | title }}"
weight = 5
+++

### Chapter X

# Some Chapter title

Lorem Ipsum.
```

## Default

To create a default page, run either one of the following commands either

```shell
hugo new <chapter>/<name>/_index.md
```

or

```shell
hugo new <chapter>/<name>.md
```

It will create a page with predefined Front-Matter:

```toml
+++
title = "{{ replace .Name "-" " " | title }}"
weight = 5
+++

Lorem Ipsum.
```
