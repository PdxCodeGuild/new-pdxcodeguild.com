<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!-- :class="{ 'scroll-snap-last-child': scrollSnap }"
  put this class in the footer to enable scroll-snap -->
  <footer class="bg-white" aria-labelledby="footerHeading">
    <h2 id="footerHeading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:pt-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <Logo class="h-20" />
          <p class="text-gray-500 text-base">
            Learn to code and make connections in the industry.
          </p>
          <SocialLinks />
        </div>
        <div class="mt-12 grid grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">
          <div>
            <h3
              class="
                text-sm
                font-semibold
                text-gray-400
                tracking-wider
                uppercase
              "
            >
              Courses
            </h3>
            <ul class="mt-4 space-y-4">
              <li>
                <nuxt-link
                  to="/courses/day"
                  class="text-base text-gray-500 hover:text-gray-900"
                >
                  Full Stack Day Boot Camp
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/courses/evening"
                  class="text-base text-gray-500 hover:text-gray-900"
                >
                  Full Stack Evening Boot Camp
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/courses/advanced-js"
                  class="text-base text-gray-500 hover:text-gray-900"
                >
                  Advanced Javascript
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/programming-101"
                  class="text-base text-gray-500 hover:text-gray-900"
                >
                  Programming 101
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              class="
                text-sm
                font-semibold
                text-gray-400
                tracking-wider
                uppercase
              "
            >
              PDX Code Guild
            </h3>
            <ul class="mt-4 space-y-4">
              <li>
                <nuxt-link
                  to="/about"
                  class="text-base text-gray-500 hover:text-gray-900"
                >
                  About
                </nuxt-link>
              </li>

              <li>
                <nuxt-link
                  to="/articles"
                  class="text-base text-gray-500 hover:text-gray-900"
                >
                  Blog
                </nuxt-link>
              </li>

              <li>
                <nuxt-link
                  to="/faq"
                  class="text-base text-gray-500 hover:text-gray-900"
                >
                  Frequently Asked Questions
                </nuxt-link>
              </li>

              <!-- <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900">
                  Press
                </a>
              </li> -->

              <!-- <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900">
                  Partners
                </a>
              </li> -->
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3
              class="
                text-sm
                font-semibold
                text-gray-400
                tracking-wider
                uppercase
              "
            >
              Legal
            </h3>
            <ul class="mt-4 space-y-4">
              <!-- <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900">
                  Claim
                </a>
              </li> -->

              <li>
                <nuxt-link
                  to="/privacy"
                  class="text-base text-gray-500 hover:text-gray-900"
                >
                  Privacy
                </nuxt-link>
              </li>

              <!-- <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900">
                  Terms
                </a>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-200 pt-8">
        <p class="text-base text-gray-400 xl:text-center">
          &copy; {{ currentYear }} PDX Code Guild. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['scrollSnap'],
  computed: {
    currentYear() {
      const year = new Date().getFullYear()
      return year
    },
  },
}
</script>
