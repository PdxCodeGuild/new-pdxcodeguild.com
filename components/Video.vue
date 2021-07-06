<template>
  <div class="relative h-screen">
    <video
      ref="video"
      class="absolute w-full h-screen object-cover"
      loop
      autoplay
      muted
    >
      <source src="~/static/video/intro.mp4" type="video/mp4" />
      <source src="~/static/video/intro.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
    <div class="absolute bottom-0 right-0 p-4">
      <button
        v-if="!played"
        class="
          my-auto
          px-2
          h-10
          bg-white
          border border-transparent
          rounded-md
          shadow
          inline-flex
          items-center
          text-base
          font-medium
          text-orange-600
          hover:bg-orange-50
        "
        @click="playVideo"
      >
        Unmute and watch
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      played: false,
    }
  },
  methods: {
    playVideo() {
      const video = this.$refs.video
      this.played = true

      video.autoplay = false
      video.loop = false
      video.currentTime = 0
      video.muted = false
    },
  },
}
</script>
