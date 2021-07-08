<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!--
    Flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 translate-y-1"
  -->
  <div
    class="
      absolute
      z-10
      left-1/2
      transform
      -translate-x-1/2
      mt-3
      px-2
      w-screen
      max-w-md
      sm:px-0
    "
  >
    <div
      class="
        rounded-lg
        shadow-lg
        ring-1 ring-black ring-opacity-5
        overflow-hidden
      "
    >
      <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
        <div>
          <h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase">
            For Prospective Students
          </h3>
          <ul class="mt-4 space-y-4">
            <li class="text-base truncate">
              <nuxt-link
                to="/prospective"
                class="
                  font-medium
                  text-gray-900
                  hover:text-gray-700
                  transition
                  ease-in-out
                  duration-150
                "
              >
                What will I learn?
              </nuxt-link>
            </li>
            <li class="text-base truncate">
              <nuxt-link
                to="/prospective"
                class="
                  font-medium
                  text-gray-900
                  hover:text-gray-700
                  transition
                  ease-in-out
                  duration-150
                "
              >
                The Enrollment Process
              </nuxt-link>
            </li>
            <li class="text-base truncate">
              <nuxt-link
                to="/prospective"
                class="
                  font-medium
                  text-gray-900
                  hover:text-gray-700
                  transition
                  ease-in-out
                  duration-150
                "
              >
                What is the path?
              </nuxt-link>
            </li>
            <li class="text-base truncate">
              <nuxt-link
                to="/prospective"
                class="
                  font-medium
                  text-gray-900
                  hover:text-gray-700
                  transition
                  ease-in-out
                  duration-150
                "
              >
                Why PDX Code Guild?
              </nuxt-link>
            </li>
            <li class="text-base truncate">
              <nuxt-link
                to="/prospective"
                class="
                  font-medium
                  text-gray-900
                  hover:text-gray-700
                  transition
                  ease-in-out
                  duration-150
                "
              >
                For Veterans
              </nuxt-link>
            </li>

            <li class="text-base truncate">
              <nuxt-link
                to="/capstones"
                class="
                  font-medium
                  text-gray-900
                  hover:text-gray-700
                  transition
                  ease-in-out
                  duration-150
                "
              >
                Capstone Projects
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="mt-5 text-sm">
          <nuxt-link
            to="/prospective"
            class="
              font-medium
              text-orange-600
              hover:text-orange-500
              transition
              ease-in-out
              duration-150
            "
          >
            Learn More <span aria-hidden="true">&rarr;</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
