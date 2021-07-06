<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="relative bg-white" :class="{ 'scroll-snap-child': scrollSnap }">
    <div
      class="
        flex
        justify-between
        items-center
        px-4
        py-6
        sm:px-6
        md:justify-start
        md:space-x-10
      "
      :class="{ 'absolute w-full z-20': transparent }"
    >
      <div
        class="flex justify-start lg:w-0 lg:flex-1 h-12 w-auto content-center"
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
          ><h1 class="font-bold" :class="{ 'text-gray-100': transparent }">
            PDX Code Guild
          </h1></nuxt-link
        >
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button
          ref="hamburgerButton"
          type="button"
          class="
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
          aria-expanded="false"
          @click="toggleMenu"
        >
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/menu -->
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-10">
        <div class="relative">
          <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
          <button
            ref="coursesButton"
            class="
              group
              rounded-md
              inline-flex
              items-center
              text-base
              font-medium
              hover:text-gray-900
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
              mx-2
            "
            :aria-expanded="coursesOpen"
            :class="{
              'text-gray-200': transparent,
              'text-gray-500': !transparent,
            }"
            @click="showCourses(!coursesOpen)"
          >
            <span>Courses</span>
            <!--
            Heroicon name: solid/chevron-down

            Item active: "text-gray-600", Item inactive: "text-gray-400"
          -->
            <svg
              class="ml-2 h-5 w-5 group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              :class="{
                'text-gray-200': transparent,
                'text-gray-500': !transparent,
              }"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <FlyoutCourses v-if="coursesOpen" />

          <button
            ref="prospectiveButton"
            type="button"
            class="
              group
              rounded-md
              inline-flex
              items-center
              text-base
              font-medium
              hover:text-gray-900
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
              mx-2
            "
            :class="{
              'text-gray-200': transparent,
              'text-gray-500': !transparent,
            }"
            :aria-expanded="prospectiveOpen"
            @click="showProspective(!prospectiveOpen)"
          >
            <span>Prospective Students</span>
            <!--
            Heroicon name: solid/chevron-down

            Item active: "text-gray-600", Item inactive: "text-gray-400"
          -->
            <svg
              class="ml-2 h-5 w-5 group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              :class="{
                'text-gray-200': transparent,
                'text-gray-500': !transparent,
              }"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <FlyoutProspective v-if="prospectiveOpen" />
          <button
            type="button"
            class="
              group
              rounded-md
              inline-flex
              items-center
              text-base
              font-medium
              hover:text-gray-900
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
              mx-2
            "
            :class="{
              'text-gray-200': transparent,
              'text-gray-500': !transparent,
            }"
          >
            <nuxt-link to="/financial-aid">Financial Aid</nuxt-link>
          </button>
        </div>
      </nav>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <NuxtLink
          to="contact"
          class="whitespace-nowrap text-base font-medium hover:text-gray-900"
          :class="{
            'text-gray-200': transparent,
            'text-gray-500': !transparent,
          }"
        >
          Contact
        </NuxtLink>
        <nuxt-link
          to="apply"
          class="
            ml-8
            whitespace-nowrap
            inline-flex
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

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <!-- <div
      class="absolute w-full h-screen z-15 transparent"
      @click="closeFlyouts"
    ></div> -->
    <NavMobile :toggle="toggleMenu" :visible="mobileMenuOpen" />
  </nav>
</template>

<script>
export default {
  props: ['transparent', 'scrollSnap'],
  data() {
    return {
      mobileMenuOpen: false,
      coursesOpen: false,
      prospectiveOpen: false,
    }
  },
  mounted() {
    // add click listener to close nav flyouts
    this.$root.$el.addEventListener('click', this.closeFlyouts)
  },
  beforeDestroy() {
    // remove click listener
    this.$root.$el.removeEventListener('click', this.closeFlyouts)
  },
  methods: {
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    showCourses(show) {
      if (show === true) this.prospectiveOpen = false
      this.coursesOpen = show
    },
    showProspective(show) {
      if (show === true) this.coursesOpen = false
      this.prospectiveOpen = show
    },
    closeFlyouts(e) {
      // if a click occurs outside one of the nav dropdown buttons, close the nav flyouts
      // const prospectiveButton = document.querySelector('#prospective-button')
      // const coursesButton = document.querySelector('#courses-button')
      // const hamburgerButton = document.querySelector('#hamburger-button')
      if (
        !this.$refs.prospectiveButton.contains(e.target) &&
        !this.$refs.coursesButton.contains(e.target) &&
        !this.$refs.hamburgerButton.contains(e.target)
      ) {
        this.coursesOpen = false
        this.prospectiveOpen = false
        if (this.mobileMenuOpen) {
          this.toggleMenu()
        }
      }
    },
  },
}
</script>
