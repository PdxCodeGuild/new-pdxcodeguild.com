const fs = require('fs')
const htmlEntities = require('html-entities')
/* The purpose of this script is to ... */

const createPaths = (article) => {
  article.fields.path =
    '/articles/' +
    (article.fields.category === 1 ? 'news/' : 'job-advice/') +
    article.fields.slug
  article.fields.categoryPath =
    '/articles/' + (article.fields.category === 1 ? 'news/' : 'job-advice/')
}

function readAndManipulateArticles(cb) {
  fs.readFile('articlesData.json', { encoding: 'utf-8' }, (err, data) => {
    if (err) return // console.log(err)
    const tag = /<.{1,140}>/

    const articles = JSON.parse(data)
    articles.articles.forEach((article, i) => {
      let body = article.fields.body

      while (body.includes('<')) {
        body = body.replace(tag, '')
      }

      body = htmlEntities.decode(body)
      article.fields.body = body
    })
    articles.articles.forEach(createPaths)
    const stringifiedArticles = JSON.stringify(articles, null, 2)
    cb(stringifiedArticles)
  })
}

function writeArticlesJS(stringifiedJSON) {
  fs.writeFile('../static/data/articles01.json', stringifiedJSON, (_err) => {})
}

readAndManipulateArticles(writeArticlesJS)
