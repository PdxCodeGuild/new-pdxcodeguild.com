<template>
  <div
    v-if="visible"
    class="
      absolute
      top-0
      inset-x-0
      p-2
      transition
      transform
      origin-top-right
      md:hidden
      z-20
    "
  >
    <div
      class="
        rounded-lg
        shadow-lg
        ring-1 ring-black ring-opacity-5
        bg-white
        divide-y-2 divide-gray-50
      "
    >
      <div class="pt-5 pb-6 px-5">
        <div class="flex items-center justify-between">
          <div
            class="
              flex
              justify-start
              lg:w-0
              lg:flex-1
              h-12
              w-auto
              content-center
            "
          >
            <Logo />
            <nuxt-link
              class="
                pl-4
                h-7
                my-auto
                font-medium
                text-xl text-gray-800
                hover:text-gray-900
                w-64
              "
              to="/"
              ><h1>PDX Code Guild</h1></nuxt-link
            >
          </div>
          <div class="-mr-2">
            <button
              type="button"
              class="
                bg-white
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-500
                hover:bg-gray-100
                focus:outline-none
                focus:ring-2 focus:ring-inset focus:ring-orange-500
              "
              @click="$props.toggle"
            >
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-12">
          <nav class="grid grid-cols-1 gap-7">
            <nuxt-link
              to="/courses"
              class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-md
                  bg-orange-500
                  text-white
                "
              >
                <!-- Heroicon name: outline/calendar -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">
                Courses
              </div>
            </nuxt-link>

            <nuxt-link
              to="/prospective"
              class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-md
                  bg-orange-500
                  text-white
                "
              >
                <!-- Heroicon name: outline/academic-cap -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">
                Prospective Students
              </div>
            </nuxt-link>

            <nuxt-link
              to="/financial-aid"
              class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-md
                  bg-orange-500
                  text-white
                "
              >
                <!-- Heroicon name: outline/support -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">
                Financial Aid
              </div>
            </nuxt-link>

            <nuxt-link
              to="/contact"
              class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-md
                  bg-orange-500
                  text-white
                "
              >
                <!-- Heroicon name: outline/phone -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">
                Contact
              </div>
            </nuxt-link>

            <a
              href="https://meetup.com/portland-programmer-network"
              class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-md
                  bg-orange-500
                  text-white
                "
              >
                <!-- Heroicon name: outline/globe -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">Events</div>
            </a>
          </nav>
        </div>
      </div>
      <div class="py-6 px-5">
        <div>
          <nuxt-link
            to="apply"
            class="
              w-full
              flex
              items-center
              justify-center
              px-4
              py-2
              border border-transparent
              rounded-md
              shadow-sm
              text-base
              font-medium
              text-white
              bg-orange-500
              hover:bg-orange-600
            "
          >
            Apply
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['visible', 'toggle'],
}
</script>
