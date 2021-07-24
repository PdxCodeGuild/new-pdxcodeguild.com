<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="relative bg-orange-100">
    <div
      class="
        h-56
        bg-indigo-orange-100
        sm:h-72
        md:absolute
        md:left-0
        md:h-full
        md:w-1/2
      "
    >
      <img
        class="w-full h-full object-cover"
        src="/images/404Image.jpg"
        alt="PDX Code Guild students relax during a break."
      />
    </div>
    <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2
          v-if="error.statusCode === 404"
          class="text-base font-semibold uppercase tracking-wider text-gray-900"
        >
          The Page You're Looking For Doesn't Exist
        </h2>
        <h2
          v-else
          class="text-base font-semibold uppercase tracking-wider text-gray-900"
        >
          An Error has Occured {{ error }}
        </h2>
        <p
          class="
            mt-2
            text-orange-600 text-3xl
            font-extrabold
            tracking-tight
            sm:text-4xl
          "
        >
          Have any questions?
        </p>
        <p class="mt-3 text-lg text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
          tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
          et fermentum, augue. Aliquet amet volutpat quisque ut interdum
          tincidunt duis.
        </p>
        <div class="mt-8 w-full">
          <button class="inline-flex rounded-md shadow mr-12">
            <nuxt-link
              to="/"
              class="
                inline-flex
                items-center
                justify-center
                px-5
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-white
                bg-orange-600
                hover:bg-orange-700
              "
            >
              Home
            </nuxt-link>
          </button>
          <button class="inline-flex rounded-md shadow">
            <nuxt-link
              to="/contact"
              class="
                inline-flex
                items-center
                justify-center
                px-5
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-orange-600
                bg-white
                hover:bg-orange-200
              "
            >
              Contact Us
            </nuxt-link>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'],
}
</script>
