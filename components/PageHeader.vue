<template>
  <div data-v-57a00ed6="" class="py-12 bg-orange-500">
    <div
      data-v-57a00ed6=""
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <div data-v-57a00ed6="" class="">
        <h2
          v-if="preHeaderText"
          data-v-57a00ed6=""
          class="text-base text-gray-100 font-semibold tracking-wide uppercase"
        >
          {{ preHeaderText }}
        </h2>
        <p
          data-v-57a00ed6=""
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-white
            sm:text-4xl
          "
        >
          {{ headerText }}
        </p>
        <p
          v-if="postHeaderText"
          data-v-57a00ed6=""
          class="mt-4 max-w-2xl text-xl text-gray-100 mx-auto text-center"
        >
          {{ postHeaderText }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['preHeaderText', 'headerText', 'postHeaderText'],
}
</script>
