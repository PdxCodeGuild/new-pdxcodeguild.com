const fs = require('fs')

/* The purpose of this script was to parse the large dump.json
file and extract all the relevant article information into
articlesData.json.  This script should not be needed anymore. */

function readDump(cb) {
  fs.readFile('dump.json', { encoding: 'utf-8' }, (err, data) => {
    if (err) return // console.log(err)

    data = JSON.parse(data)
    const articles = data.filter((datum) => datum.model === 'article.article')
    const categories = data.filter(
      (datum) => datum.model === 'article.category'
    )
    const images = data.filter((datum) => datum.model === 'article.images')

    const articlesData = { articles, categories, images }
    const stringifiedArticles = JSON.stringify(articlesData, null, 2)
    cb(stringifiedArticles)
  })
}

function writeNewArticles(stringifiedJSON) {
  fs.writeFile('articlesData.json', stringifiedJSON, (_err) => {})
}

readDump(writeNewArticles)
