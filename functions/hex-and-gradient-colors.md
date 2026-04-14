# HEX and Gradient Colors

AmazingTitles uses `ColorTranslator` to process legacy colors, HEX colors, and gradients.

## Legacy colors

Standard legacy codes work as expected:

```text
&aGreen text
&cRed text
&lBold text
```

## HEX colors

The plugin also supports direct HEX insertion in this format:

```text
&{#FFAA00}Golden text
```

## RGB gradients

Use this format for a HEX gradient:

```text
<#FF0000>Gradient text</#00FF00>
```

The same style also works with legacy endpoints:

```text
<&c>Gradient text</&e>
```

## Compatibility behavior

- On RGB-capable servers, gradients are expanded into per-character colors
- On older servers without RGB support, gradient wrappers are stripped and the raw text remains

## Practical examples

```text
&{#00AAFF}Loading world data
<#00AAFF>&lAmazing</#FF55FF>Titles
<&b>Cold</&f> and clean
```

## Where it applies

You can use these formats in:

- animation text
- subtitles
- notification symbols
- notification text
- interactive messages
- extension-generated frames

## Recommendation

If you want one configuration to look acceptable on both old and new versions:

- keep important content readable without RGB
- use gradients as visual enhancement, not as the only signal
