<template>
  <div
    :class="`
      rounded-full
      bg-${bgColor}
      lg:h-${diameterLg}
      lg:w-${diameterLg}
      h-${diameterSm}
      w-${diameterSm}
      sm:h-${diameterSm}
      sm:w-${diameterSm}
      text-center text-${textColor} 
      lg:text-2xl
      font-bold
      flex
      items-center
      justify-center
      p-8
    `"
  >
    <div>{{ innerHtml }}</div>
  </div>
</template>
<script>
export default {
  props: ['diameterLg', 'diameterSm', 'bgColor', 'textColor', 'innerHtml'],
}
</script>
