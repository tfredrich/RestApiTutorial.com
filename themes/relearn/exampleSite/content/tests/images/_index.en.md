+++
description = "Some testing for different styles of image links"
title = "Images"
+++

Some testing for different styles of image links.

## Markdown

### Relative to page

![Magic](images/magic.gif?classes=shadow&height=50px)

### Relative to page up level

![Magic](../images/images/magic.gif?classes=shadow&height=50px)

### Static

![Logo](/images/logo.svg?classes=shadow&height=50px)

### External fully qualified

![Minion](https://octodex.github.com/images/minion.png?classes=shadow&height=50px)

### External without scheme

![Minion](//octodex.github.com/images/minion.png?classes=shadow&height=50px)

### External without scheme and scheme separator

![Minion](octodex.github.com/images/minion.png?classes=shadow&height=50px)

## HTML

### Relative to page

<p><img src="images/magic.gif?classes=shadow&height=50px"></p>

### Relative to page up level

<p><img src="../images/images/magic.gif?classes=shadow&height=50px"></p>

### Static

<p><img src="/images/logo.svg?classes=shadow&height=50px"></p>

### External fully qualified

<p><img src="https://octodex.github.com/images/minion.png?classes=shadow&height=50px"></p>

### External without scheme

<p><img src="//octodex.github.com/images/minion.png?classes=shadow&height=50px"></p>

### External without scheme and scheme separator

<p><img src="octodex.github.com/images/minion.png?classes=shadow&height=50px"></p>
