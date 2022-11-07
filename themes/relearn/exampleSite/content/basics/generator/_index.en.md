+++
disableMermaid = false
title = "Stylesheet generator"
weight = 26
+++

This interactive tool may help you to generate your own color variant stylesheet.

To get started, first select a color variant from the variant switch that fits you best as a starting point.

The graph is interactive and reflect the current colors. You can click on any of the colored boxes to adjust the respective color. The graph and the page will update accordingly.

The arrowed lines reflects how colors are inherited thru different parts of the theme if the descendent isn't overwritten. If you want to delete a color and let it inherit from its parent, just delete the value from the input field.

To better understand this select the `neon` variant and modify the differnet heading colors. There, colors for the heading `h2`, `h3` and `h4` are explicitly set. `h5` is not set and inherits its value from `h4`. `h6` is also not set and inherits its value from `h5`.

Once you've changed a color, the variant switch will show a "My custom variant" entry and your changes are stored in the browser. You can change pages and even close the browser without losing your changes.

Once you are satisfied, you can download the new variants file and install it in your site.

{{% notice note %}}
This only works in modern browsers.
{{% /notice %}}

## Variant generator

<span class="btn cstyle secondary"><a class="vardownload"><i class="fa-fw fas fa-download"></i> Download variant</a></span>
<span class="btn cstyle warning"><a class="varreset"><i class="fa-fw fas fa-trash"></i> Reset variant</a></span>

<div id="vargenerator" class="mermaid" style="background-color: var(--INTERNAL-MAIN-TEXT-color);" align="center">Graph</div>

<span class="btn cstyle secondary"><a class="vardownload"><i class="fa-fw fas fa-download"></i> Download variant</a></span>
<span class="btn cstyle warning"><a class="varreset"><i class="fa-fw fas fa-trash"></i> Reset variant</a></span>

<script>
variants.generator( '#vargenerator', '.vardownload', '.varreset' );
</script>
