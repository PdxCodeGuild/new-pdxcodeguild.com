<template>
  <figure
    class="
      relative
      bg-gray-100
      overflow-hidden
      shadow
      rounded-lg
      divide-y divide-gray-200
      w-full
      p-4
      h-100
    "
  >
    <img :src="imgSrc" class="mx-auto rounded-md" />
    <h2 class="px-4 py-2 text-sm font-bold">
      {{ title }}
    </h2>
    <!-- <div class="flex flex-col justify-between"> -->
    <div class="px-4 py-2 h-40">
      {{ description }}
    </div>
    <div class="flex justify-between w-full">
      <nuxt-link
        :to="moreLink"
        type="button"
        class="
          inline-flex
          items-center
          px-4
          py-2
          mx-2
          border border-transparent
          text-base
          font-medium
          rounded-md
          shadow-sm
          text-white
          bg-orange-500
          hover:bg-orange-400
          text-center
        "
      >
        Read More
      </nuxt-link>
      <nuxt-link
        to="apply"
        type="button"
        class="
          inline-flex
          items-center
          px-4
          py-2
          mx-2
          border border-transparent
          text-base
          font-medium
          rounded-md
          shadow-sm
          text-white
          bg-orange-500
          hover:bg-orange-400
          text-center
        "
      >
        Apply
      </nuxt-link>
    </div>
    <!-- </div> -->
  </figure>
</template>
<script>
export default {
  props: [
    'title',
    'description',
    'imgSrc',
    'readMoreHref',
    'applyHref',
    'moreLink',
  ],
}
</script>
