<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="
            text-base
            font-semibold
            text-orange-600
            tracking-wide
            uppercase
          "
        >
          {{ title }}
        </h2>
        <p
          class="
            mt-1
            text-4xl
            font-extrabold
            text-gray-900
            sm:text-5xl
            sm:tracking-tight
            lg:text-6xl
          "
        >
          {{ subtitle }}
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'subtitle', 'description'],
}
</script>
