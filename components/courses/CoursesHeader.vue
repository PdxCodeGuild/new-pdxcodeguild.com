<template>
  <header :class="`${bgColor ? bgColor : 'bg-orange-200'}`">
    <div class="max-w-7xl mx-3 py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:mx-48">
      <div :class="`${center ? 'text-center' : 'text-left'}`">
        <h1
          v-if="title"
          :class="`
            mt-1
            text-4xl
            font-extrabold
            text-orange-800
            sm:text-5xl
            sm:tracking-tight
            lg:text-6xl
            ${textColor ? textColor : 'text-orange-900'}
          `"
        >
          {{ title }}
        </h1>
        <article
          :class="`max-w-4xl mt-5 text-xl ${
            textColor ? textColor : 'text-orange-900'
          } text-left`"
        >
          <slot></slot>
        </article>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: ['title', 'header', 'description', 'bgColor', 'textColor', 'center'],
}
</script>
<style scoped>
/* #mtHoodBg {
  background-image: url('~/static/images/MtHood.png');
  background-size: cover;
  background-attachment: fixed;
} */
</style>
