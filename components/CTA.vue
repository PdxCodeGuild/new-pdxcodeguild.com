<template>
  <div :class="`bg-${color}-500`">
    <div
      class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
    >
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">{{ title }}</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-gray-100">
        {{ description }}
      </p>
      <div class="space-x-4 mt-8 sm:mt-0">
        <a
          v-if="cta && href && href.includes(':')"
          :href="href"
          :class="`
          mt-8
          w-full
          sm:inline-flex
          items-center
          justify-center
          px-5
          py-3
          border border-transparent
          text-base
          font-medium
          rounded-md
          text-${color}-600
          bg-white
          hover:bg-indigo-50
          sm:w-auto
        `"
        >
          {{ cta }}
        </a>
        <nuxt-link
          v-else-if="href && cta"
          :to="href"
          :class="`
          mt-8
          w-full
          sm:inline-flex
          items-center
          justify-center
          px-5
          py-3
          border border-transparent
          text-base
          font-medium
          rounded-md
          text-${color}-600
          bg-white
          hover:bg-indigo-50
          sm:w-auto
        `"
        >
          {{ cta }}
        </nuxt-link>
        <a
          v-if="ctaAlt && hrefAlt && hrefAlt.includes(':')"
          :href="hrefAlt"
          :class="`
          mt-8
          w-full
          sm:inline-flex
          items-center
          justify-center
          px-5
          py-3
          border border-transparent
          text-base
          font-medium
          rounded-md
          text-${color}-600
          bg-white
          hover:bg-indigo-50
          sm:w-auto
        `"
        >
          {{ ctaAlt }}
        </a>
        <nuxt-link
          v-else-if="ctaAlt && hrefAlt"
          :to="hrefAlt"
          :class="`
          mt-8
          w-full
          sm:inline-flex
          items-center
          justify-center
          px-5
          py-3
          border border-transparent
          text-base
          font-medium
          rounded-md
          text-${color}-600
          bg-white
          hover:bg-indigo-50
          sm:w-auto
        `"
        >
          {{ ctaAlt }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'href', 'cta', 'color', 'ctaAlt', 'hrefAlt'],
}
</script>
