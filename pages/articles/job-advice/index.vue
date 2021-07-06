<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="
      relative
      bg-gray-50
      pt-16
      pb-20
      px-4
      sm:px-6
      lg:pt-24
      lg:pb-28
      lg:px-8
    "
  >
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2
          class="
            text-3xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-4xl
          "
        >
          <nuxt-link to="/articles">Articles</nuxt-link>
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>
      <div
        class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
      >
        <div
          v-for="article in articles"
          :key="article.pk"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div class="flex-shrink-0">
            <img
              class="h-48 w-full object-cover"
              :src="article.fields.background_img"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <nuxt-link
                  :to="article.fields.categoryPath"
                  class="hover:underline"
                >
                  {{ article.fields.category }}
                </nuxt-link>
              </p>
              <nuxt-link :to="article.fields.path" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ article.fields.title }}
                </p>
                <p
                  class="
                    mt-3
                    text-base text-gray-500
                    overflow-ellipsis overflow-hidden
                    h-24
                  "
                >
                  {{ article.fields.body }}
                </p>
              </nuxt-link>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="#">
                  <span class="sr-only">{{ article.fields.author }}</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    :src="article.fields.author_img"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a href="#" class="hover:underline">
                    {{ article.fields.author }}
                  </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="article.datetime">
                    {{ article.fields.created_at }}
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  <!-- <span> {{ article.readingTime }} read </span> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '~/static/data/articles01.json'
const placeholderImages = [
  'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
]
const placeholderAuthorImages = [
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
]
const givePlaceholderImages = (article) => {
  article.fields.background_img =
    placeholderImages[Math.floor(Math.random() * placeholderImages.length)]
  article.fields.author_img =
    placeholderAuthorImages[
      Math.floor(Math.random() * placeholderAuthorImages.length)
    ]
}
const giveNamedCategories = (article) => {
  if (article.fields.category === 1) article.fields.category = 'News'
  else if (article.fields.category === 2) article.fields.category = 'Job Advice'
  else article.fields.category = 'Other'
}
const articles = data.articles.filter((article) => {
  return article.fields.category === 2
})
articles.forEach(givePlaceholderImages)
articles.forEach(giveNamedCategories)
articles.reverse()
export default {
  data() {
    return {
      articles,
    }
  },
  head: {
    title: 'PDX Code Guild | Job Advice',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'PDX Code Guild Job Advice Articles by Staff & Alumni',
      },
    ],
  },
}
</script>
