+++
title = "Multilingual and i18n"
weight = 30
+++

The Relearn theme is fully compatible with Hugo multilingual mode.

It provides:

- Translation strings for default values (English, Piratized English, Arabic, Simplified Chinese, Traditional Chinesse, Dutch, French, German, Hindi, Indonesian, Italian, Japanese, Korean, Polish, Portuguese, Russian, Spanish, Turkish, Vietnamese). Feel free to contribute!
- Automatic menu generation from multilingual content
- In-browser language switching

![I18n menu](images/i18n-menu.gif?classes=shadow&width=300px)

## Basic configuration

After learning [how Hugo handle multilingual websites](https://gohugo.io/content-management/multilingual), define your languages in your `config.toml` file.

For example with current English and Piratized English website.

```toml
# English is the default language
defaultContentLanguage = "en"

[Languages]
[Languages.en]
title = "Hugo Relearn Theme"
weight = 1
languageName = "English"

[Languages.pir]
title = "Cap'n Hugo Relearrrn Theme"
weight = 2
languageName = "Arrr! Pirrrates"
```

Then, for each new page, append the *id* of the language to the file.

- Single file `my-page.md` is split in two files:
    - in English: `my-page.md`
    - in Piratized English: `my-page.pir.md`
- Single file `_index.md` is split in two files:
    - in English: `_index.md`
    - in Piratized English: `_index.pir.md`

{{% notice info %}}
Be aware that only translated pages are displayed in menu. It's not replaced with default language content.
{{% /notice %}}

{{% notice tip %}}
Use [slug](https://gohugo.io/content-management/multilingual/#translate-your-content) Front Matter parameter to translate urls too.
{{% /notice %}}

## Overwrite translation strings

Translations strings are used for common default values used in the theme (*Edit* button, *Search placeholder* and so on). Translations are available in English and Piratized English but you may use another language or want to override default values.

To override these values, create a new file in your local i18n folder `i18n/<idlanguage>.toml` and inspire yourself from the theme `themes/hugo-theme-relearn/i18n/en.toml`

## Disable language switching

Switching the language in the browser is a great feature, but for some reasons you may want to disable it.

Just set `disableLanguageSwitchingButton=true` in your `config.toml`

```toml
[params]
  # When using mulitlingual website, disable the switch language button.
  disableLanguageSwitchingButton = true
```
