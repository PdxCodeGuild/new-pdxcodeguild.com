<template>
  <!-- CREDIT: Keegan's Enrollment Process header -->
  <header class="text-center pt-4">
    <h2 class="text-base text-orange-500 font-semibold tracking-wide uppercase">
      {{ imperative }}
    </h2>
    <p
      class="
        mt-2
        text-3xl
        leading-8
        font-extrabold
        tracking-tight
        text-gray-900
        sm:text-4xl
      "
    >
      {{ title }}
    </p>
    <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
      {{ description }}
    </p>
  </header>
</template>
<script>
export default {
  props: ['imperative', 'title', 'description'],
}
</script>
