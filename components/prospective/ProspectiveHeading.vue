<template>
  <header
    class="
      md:flex
      md:items-center
      md:justify-between
      bg-orange-500
      p-8
      md:p-12
      lg:p-16
    "
  >
    <div class="flex-1 min-w-0">
      <h2
        class="
          text-2xl
          font-bold
          leading-7
          text-white
          sm:text-3xl
          sm:truncate
          sm:text-center
          md:text-4xl
          lg:text-5xl
        "
      >
        {{ title }}
      </h2>
    </div>
  </header>
</template>
<script>
export default {
  props: ['title'],
}
</script>
