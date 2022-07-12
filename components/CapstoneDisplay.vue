<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <figure class="bg-white">
    <div class="content-center ml-auto">
      <div
        class="
          justify-center
          flex
          space-x-2
          lg:border-r lg:border-gray-200
          lg:pr-8
        "
      >
        <h1 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {{ capstone.name }}
        </h1>
        <h4
          class="text-center text-2xl font-extrabold text-gray-700 sm:text-3xl"
        >
          by {{ capstone.student }}
        </h4>
      </div>
    </div>
    <div>
      <!-- Image gallery -->
      <div
        v-if="capstone.images"
        class="
          mt-6
          max-w-2xl
          mx-auto
          sm:px-6
          lg:max-w-7xl
          lg:px-8
          lg:grid lg:grid-cols-3
          lg:gap-x-8
        "
      >
        <div
          class="
            hidden
            aspect-w-3 aspect-h-4
            rounded-lg
            overflow-hidden
            lg:block
          "
        >
          <img
            :src="capstone.images[0].src"
            :alt="capstone.images[0].alt"
            class="w-full h-full object-center object-cover"
          />
        </div>

        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              :src="capstone.images[1].src"
              :alt="capstone.images[1].alt"
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              :src="capstone.images[2].src"
              :alt="capstone.images[2].alt"
              class="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div
          class="
            aspect-w-4 aspect-h-5
            sm:rounded-lg
            sm:overflow-hidden
            lg:aspect-w-3 lg:aspect-h-4
          "
        >
          <img
            :src="capstone.images[3].src"
            :alt="capstone.images[3].alt"
            class="w-full h-full object-center object-cover"
          />
        </div>
      </div>
      <div
        v-else
        class="
          mt-6
          max-w-2xl
          mx-auto
          sm:px-6
          lg:max-w-7xl
          lg:px-8
          aspect-w-16 aspect-h-9
        "
      >
        <img :src="capstone.imageSrc" :alt="capstone.name" />
      </div>
      <!-- capstone info -->
      <div
        class="
          max-w-2xl
          mx-auto
          py-10
          px-4
          text-center
          sm:px-6
          lg:max-w-7xl
          lg:py-16
          lg:px-8
          lg:gap-x-8
        "
      >
        <div
          class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:pr-8"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ capstone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </figure>
</template>

<script>
export default {
  // props: ['capstone'], // props as array
  props: {
    // props as object
    capstone: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
