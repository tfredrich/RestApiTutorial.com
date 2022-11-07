+++
tags = ["documentation", "tutorial"]
title = "Tags"
weight = 40
+++

The Relearn theme supports one default taxonomy of Hugo: the *tag* feature.

## Configuration

Just add tags to any page:

```toml
+++
tags = ["tutorial", "theme"]
title = "Theme tutorial"
weight = 15
+++
```

## Behavior

The tags are displayed at the top of the page, in their insertion order.

Each tag is a link to a *Taxonomy* page displaying all the articles with the given tag.

## List all the tags

In the `config.toml`  file you can add a shortcut to display all the tags

```toml
[[menu.shortcuts]]
name = "<i class='fas fa-tags'></i> Tags"
url = "/tags"
weight = 30
```