<template>
  <main>
    <Video />
    <!-- <CTA
      title="Want to launch your learning journey now?"
      description="Take our free 15-hour Programming 101 Class for free!
      No application necessary - Limited seating available"
      href="https://www.eventbrite.com/o/pdx-code-guild-17959456298"
      cta="Learn To Code"
      color="blue"
      cta-alt="Learn To Code"
      href-alt=""
    /> -->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="py-12 bg-white mt-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="
              text-base text-orange-500
              font-semibold
              tracking-wide
              uppercase
            "
          >
            Why PDX Code Guild?
          </h2>
          <p
            class="
              mt-2
              text-3xl
              leading-8
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            What makes PDX Code Guild Special.
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our students are individuals, not numbers on a page. We understand
            that each student has their own unique needs and talents.
          </p>
        </div>

        <div class="mt-10">
          <dl
            class="
              space-y-10
              md:space-y-0
              md:grid md:grid-cols-3
              md:gap-x-8 md:gap-y-10
            "
          >
            <div class="relative">
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-orange-500
                    text-white
                  "
                >
                  <!-- Heroicon name: outline/globe-alt -->
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Top Quality Education
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Our instructors are proven programmers whose expertise falls
                within, and extends beyond, the scope of the curriculum.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-orange-500
                    text-white
                  "
                >
                  <!-- Heroicon name: outline/scale -->
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
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Community Centered Culture
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Real world developers rarely work on a project alone. Here, we
                cultivate collaboration through group projects and code reviews.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-orange-500
                    text-white
                  "
                >
                  <!-- Heroicon name: outline/lightning-bolt -->
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Focused On The Individual
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Maintaining smaller class sizes is essential to our mission to
                empower students to building a successful career in coding.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

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
    <div class="bg-white pt-16 lg:py-24">
      <div class="pb-16 bg-orange-500 lg:pb-0 lg:z-10 lg:relative">
        <div
          class="
            lg:mx-auto
            lg:max-w-7xl
            lg:px-8
            lg:grid lg:grid-cols-3
            lg:gap-8
          "
        >
          <div class="relative lg:-my-8">
            <div
              aria-hidden="true"
              class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            ></div>
            <div
              class="
                mx-auto
                max-w-md
                px-4
                sm:max-w-3xl
                sm:px-6
                lg:p-0
                lg:h-full
              "
            >
              <div
                class="
                  aspect-w-10 aspect-h-6
                  rounded-xl
                  shadow-xl
                  overflow-hidden
                  sm:aspect-w-16 sm:aspect-h-7
                  lg:aspect-none
                  lg:h-full
                "
              >
                <img
                  class="object-cover lg:h-full lg:w-full"
                  src="/images/AlumniHackerspace.jpg"
                  alt="PDX Code Guild Alumni Hackerspace"
                />
              </div>
            </div>
          </div>
          <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div
              class="
                mx-auto
                max-w-md
                px-4
                sm:max-w-2xl
                sm:px-6
                lg:px-0
                lg:py-20
                lg:max-w-none
              "
            >
              <blockquote>
                <div>
                  <svg
                    class="h-12 w-12 text-white opacity-30"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                    />
                  </svg>
                  <p class="mt-6 text-2xl font-medium text-white">
                    I love that you can spend a week or two learning what a
                    university would waste an entire semester trying to teach
                    you. There's really no more efficient, or productive, way to
                    dip your toes into programming and dive deep right away.
                  </p>
                </div>
                <footer class="mt-6">
                  <p class="text-base font-medium text-white">Conner R.</p>
                  <p class="text-base font-medium text-orange-100">
                    PDX Code Guild Alumni
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="
              text-base text-orange-500
              font-semibold
              tracking-wide
              uppercase
            "
          >
            How can PDX Code Guild Help you?
          </h2>
          <p
            class="
              mt-2
              text-3xl
              leading-8
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            Get your dream job.
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our grads work at some excellent companies. You can too.
          </p>
        </div>

        <div class="mt-10">
          <dl
            class="
              space-y-10
              md:space-y-0
              md:grid md:grid-cols-3
              md:gap-x-8 md:gap-y-10
            "
          >
            <div class="relative">
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-orange-500
                    text-white
                  "
                >
                  <!-- Heroicon name: outline/globe-alt -->
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Launch your career in tech.
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Are you longing for more interesting, satisfying work? Have you
                reached a ceiling in your current position? Looking for a career
                with robust growth potential? PDX Code Guild has helped students
                from all backgrounds break into the tech industry.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-orange-500
                    text-white
                  "
                >
                  <!-- Heroicon name: outline/scale -->
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
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  High-Paying Tech Careers with Robust Growth
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                This school got started based on a need in the industry. There
                was simply not enough qualified developers to meet the demand.
                That trend continues today as Portland rapidly climbs the charts
                in top tech hubs in the nation.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-orange-500
                    text-white
                  "
                >
                  <!-- Heroicon name: outline/lightning-bolt -->
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Flexible and Fulfilling Work
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Tech careers are high-paying, robust and flexible. PDX Code
                Guild Graduates have a wide variety of opportunities available
                to them. Graduates work as software developers, frontend
                developers, backend developers, quality assurance engineers,
                full-stack developers, entrepreneurs, contractors and more.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-orange-100">
      <div
        class="
          max-w-7xl
          mx-auto
          py-12
          px-4
          sm:px-6
          lg:py-24
          lg:px-8
          lg:flex
          lg:items-center
          lg:justify-between
        "
      >
        <h2
          class="
            text-3xl
            font-extrabold
            tracking-tight
            text-gray-900
            md:text-4xl
          "
        >
          <span class="block">Ready to join the guild?</span>
          <span class="block text-orange-500"
            >It's a straight forward application.</span
          >
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <nuxt-link
              to="apply"
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
  </main>
</template>

<script>
export default {
  layout: 'home',
}
</script>
