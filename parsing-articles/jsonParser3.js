const fs = require('fs')

/* The purpose of this script is to parse articlesData01.json and
write the contents as .vue files in pages/articles/news and
pages/articles/job-advice.
There are some excerpts from articlesData01.json in comments here. */

const pkToCategory = {
  1: 'news',
  2: 'job-advice',
  3: 'code-guild-news',
}

const numToMonth = {
  '01': 'Jan.',
  '02': 'Feb.',
  '03': 'Mar.',
  '04': 'Apr.',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'Aug.',
  '09': 'Sep.',
  10: 'Oct.',
  11: 'Nov.',
  12: 'Dec.',
}

function articlesToVue(cb) {
  fs.readFile('articlesData01.json', { encoding: 'utf-8' }, (err, data) => {
    if (err) return // console.log(err)
    const articles = JSON.parse(data)
    articles.articles.forEach((article) => {
      // "author": "Sheri Dover",
      const author = article.fields.author
      // "created_at": "2018-10-05",
      const [year, month, dayStr] = article.fields.created_at.split('-')
      const day = +dayStr

      /* Some article objects have no HTML elements in their "body" properties.
      If needsMargin is true, the body will be wrapped in a <p class="my-8">
      to make things look a little nicer. */
      const needsMargin = !(
        article.fields.body.includes('<') && article.fields.body.includes('>')
      )

      const vue = `
        <template>
          <main>
            <article class="mx-6 sm:mx-24 lg:mx-48">
              <!-- byline -->
              <p class="text-right mt-8">by ${author} - ${
        numToMonth[month]
      } ${day}, ${year}</p>
              <!-- title -->
              <h1 class="font-bold text-5xl">${article.fields.title}</h1>
              <!-- body -->
              ${needsMargin ? '<p class="my-8">' : ''}
              ${article.fields.body}
              ${needsMargin ? '</p>' : ''}
            </article>
            <CTA
              title="Are you ready to become a developer?"
              description="We're happy to answer any questions you have about the process.  Drop us a line or sign up for Programming 101."
              color="orange"
              cta="Contact"
              href="/contact"
              cta-alt="Programming 101"
              href-alt="/programming-101"
            />
          </main>
        </template>
        <script>
        export default {
          head: {
            title: 'PDX Code Guild | ${article.fields.title}',
            meta: [
              {
                hid: 'description',
                name: 'description',
                content: '${article.fields.title} by ${article.fields.author}',
              },
            ],
          },
        }
        </script>

      `
      cb(article, vue)
    })
  })
}

function writeArticle(article, vue) {
  // "fields": {
  //   "title": "All About Financial Aid",
  //   "slug": "Financial-aid",
  //   "category": 1,
  fs.writeFile(
    `../pages/articles/${pkToCategory[article.fields.category]}/${
      article.fields.slug
    }.vue`,
    vue,
    (_err) => {}
  )
}

articlesToVue(writeArticle)
