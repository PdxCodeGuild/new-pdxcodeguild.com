# Parsing Articles

The JSON and scripts in this directory are for the purpose of reading and manipulating JSON to create the hidden articles pages.  There are more in-depth comments in each JSON parser script.

## `jsonParser.js`

This should not need to be used anymore.

## `jsonParser2.js`

To make changes to the article's tailwind classes... update this script's `readAndManipulateArticles` function, changing the second argument of `body.replace` in the correct `while` loop.  See [sample-article-with-tailwind.vue](sample-article-with-tailwind.vue) for an example article with the current tailwind classes.

## `jsonParser3.js`

Running this script writes the .vue files based on the output of `jsonParser2.js`.

### Notes

* The *many* linting errors this causes can be solved with `yarn lint:fix`...
* ... Except for one `<` (less than) character in `pages/articles/news/quick-notes-python-syntax.vue`.  The `<` needs to be manually changed to `&lt;` or the Nuxt app will crash.
* (This could be permanently solved by manually replacing the characters in `articlesData.json`.)

Please reach out if you have any questions --Pete :slightly_smiling_face:
