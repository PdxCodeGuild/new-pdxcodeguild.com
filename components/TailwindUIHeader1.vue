<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="relative bg-orange-800">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" :src="imgSrc" :alt="imgAlt" />
      <div
        class="absolute inset-0 bg-orange-800 mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1
        class="
          text-4xl
          font-extrabold
          tracking-tight
          text-white
          sm:text-5xl
          lg:text-6xl
        "
      >
        {{ title }}
      </h1>
      <p class="mt-6 text-xl text-orange-100 max-w-3xl">{{ subtitle }}</p>
    </div>
  </header>
</template>
<script>
export default {
  props: ['title', 'subtitle', 'imgSrc', 'imgAlt'],
}
</script>
