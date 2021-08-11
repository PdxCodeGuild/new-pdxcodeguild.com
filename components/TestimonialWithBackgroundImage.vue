<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white py-16 lg:py-24">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="
          relative
          py-24
          px-8
          bg-orange-500
          sm:bg-gradient-to-r
          sm:from-orange-600
          sm:to-orange-400
          rounded-xl
          shadow-2xl
          overflow-hidden
          lg:px-16
          lg:grid lg:grid-cols-2
          lg:gap-x-8
        "
      >
        <div
          class="
            absolute
            inset-0
            opacity-40
            filter
            saturate-0
            mix-blend-multiply
          "
        >
          <img :src="imgSrc" :alt="imgAlt" class="w-full h-full object-cover" />
        </div>
        <div class="relative lg:col-span-1">
          <!-- <img
            class="h-12 w-auto"
            src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
            alt=""
          /> -->
          <blockquote class="mt-6 text-white">
            <p class="text-lg font-medium sm:text-xl">{{ quote }}</p>
            <footer class="mt-6">
              <p class="flex flex-col font-medium">
                <span>{{ author }}</span>
                <span>{{ authorTitle }}</span>
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['author', 'quote', 'authorTitle', 'imgSrc', 'imgAlt'],
}
</script>
