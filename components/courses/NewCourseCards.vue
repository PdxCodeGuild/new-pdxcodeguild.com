<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
-->
<template>
  <section class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Courses
          </h2>
          <!-- TODO: some new copy would look great here -->
          <!-- <p class="text-xl text-gray-500">
            Nulla quam felis, enim faucibus proin velit, ornare id pretium.
            Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat
            eu faucibus vivamus eget bibendum cras.
          </p> -->
        </div>
        <div class="lg:col-span-2">
          <ul
            class="
              space-y-12
              sm:grid sm:grid-cols-2
              sm:gap-x-4 sm:gap-y-10
              sm:space-y-0
              lg:gap-x-8
            "
          >
            <figure
              v-for="course in courses"
              :key="course.name"
              class="hover:bg-orange-400 rounded-lg group p-2 h-full"
            >
              <nuxt-link :to="course.link" class="space-y-4 h-full">
                <!-- <div class="aspect-w-3 aspect-h-2 relative"> aspect ratio didn't seem to be making any difference and broke some other things -->
                <div class="relative">
                  <div class="absolute hidden lg:block w-full h-full">
                    <nuxt-link :to="course.link" class="top-0 left-0 absolute">
                      <button
                        type="button"
                        class="
                          px-6
                          py-3
                          border border-transparent
                          text-base
                          font-medium
                          rounded-md
                          shadow-sm
                          text-white
                          bg-orange-600
                          hover:bg-orange-700
                          group-focus:outline-none
                          group-focus:ring-2
                          group-focus:ring-offset-2
                          group-focus:ring-orange-500
                        "
                      >
                        Read More
                      </button>
                    </nuxt-link>
                    <nuxt-link to="/apply" class="absolute bottom-0 right-0">
                      <button
                        type="button"
                        class="
                          px-6
                          py-3
                          border border-transparent
                          text-base
                          font-medium
                          rounded-md
                          shadow-sm
                          text-white
                          bg-orange-600
                          hover:bg-orange-700
                          group-focus:outline-none
                          group-focus:ring-2
                          group-focus:ring-offset-2
                          group-focus:ring-orange-500
                        "
                      >
                        Apply
                      </button>
                    </nuxt-link>
                  </div>
                  <img
                    class="object-cover shadow-lg rounded-lg"
                    :src="course.imgSrc"
                    :alt="course.imgAlt"
                  />
                </div>
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3 class="group-hover:text-white">{{ course.title }}</h3>
                  <p class="text-orange-700 group-hover:text-orange-900">
                    {{ course.stack }}
                  </p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500 group-hover:text-white">
                    {{ course.description }}
                  </p>
                </div>

                <ul
                  class="
                    flex
                    justify-between
                    space-x-5
                    lg:hidden
                    align-self-end align-bottom
                  "
                >
                  <nuxt-link :to="course.link">
                    <button
                      type="button"
                      class="
                        px-6
                        py-3
                        border border-transparent
                        text-base
                        font-medium
                        rounded-md
                        shadow-sm
                        text-white
                        bg-orange-500
                        hover:bg-orange-700
                        focus:outline-none
                        focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
                      "
                    >
                      Read More
                    </button>
                  </nuxt-link>
                  <nuxt-link to="/apply">
                    <button
                      type="button"
                      class="
                        px-6
                        py-3
                        border border-transparent
                        text-base
                        font-medium
                        rounded-md
                        shadow-sm
                        text-white
                        bg-orange-500
                        hover:bg-orange-700
                        focus:outline-none
                        focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
                      "
                    >
                      Apply
                    </button>
                  </nuxt-link>
                </ul>
              </nuxt-link>
            </figure>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['courses'],
}
</script>
