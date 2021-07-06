const fs = require('fs')

/* The purpose of this script is to read articlesData.json, manipulate
each article's "body" property to give HTML elements tailwind classes
and output the new JSON to articlesData01.json.
articlesData.json is never changed so the source copy is preserved.
See sample-article-with-tailwind.vue for an example of tailwind classes */

function readAndManipulateArticles(cb) {
  fs.readFile('articlesData.json', { encoding: 'utf-8' }, (err, data) => {
    if (err) return // console.log(err)

    const articles = JSON.parse(data)
    articles.articles.forEach((article) => {
      let body = article.fields.body

      while (body.includes('<h2>')) {
        body = body.replace('<h2>', '<h2 class="text-3xl my-8">')
      }

      while (body.includes('<p>&nbsp;</p>')) {
        body = body.replace('<p>&nbsp;</p>', 'NONBREAKINGSPACEENTITY')
      }

      while (body.includes('<p>')) {
        body = body.replace('<p>', '<p class="my-4">')
      }

      while (body.includes('NONBREAKINGSPACEENTITY')) {
        body = body.replace('NONBREAKINGSPACEENTITY', '<p>&nbsp;</p>')
      }

      while (body.includes('<h3>')) {
        body = body.replace('<h3>', '<h3 class="text-2xl my-4">')
      }

      while (body.includes('<a href=')) {
        body = body.replace('<a href=', '<a class="text-orange" href=')
      }

      while (body.includes('<nuxt-link to=')) {
        body = body.replace(
          '<nuxt-link to=',
          '<nuxt-link class="text-orange" to='
        )
      }

      while (body.includes('<strong>')) {
        body = body.replace('<strong>', '<strong class="text-xl">')
      }

      article.fields.body = body
    })
    const stringifiedArticles = JSON.stringify(articles, null, 2)
    cb(stringifiedArticles)
  })
}

function writeNewArticles(stringifiedJSON) {
  fs.writeFile('articlesData01.json', stringifiedJSON, (_err) => {})
}

readAndManipulateArticles(writeNewArticles)
