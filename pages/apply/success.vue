<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
-->
<template>
  <main class="py-16 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <section class="relative z-10">
          <div class="text-gray-500 mx-auto lg:max-w-none">
            <h2
              class="
                text-base text-orange-600
                font-semibold
                tracking-wide
                uppercase
              "
            >
              Your form has been submitted
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
              Thank you
            </p>
          </div>
          <div
            class="relative z-10 text-base mx-auto lg:max-w-5xl lg:mx-0 my-8"
          >
            <div class="prose prose-orange text-gray-500 mx-auto lg:max-w-none">
              <p class="text-lg text-gray-500">
                An advisor will reach out to you within 48 hours.
              </p>
              <p class="text-lg text-gray-500">
                If you would like to speak with us sooner:
              </p>
              <ul role="list">
                <li>
                  Please call
                  <a href="tel:+15034448836"> +1 (503) 444-8836 </a>
                </li>
                <li>
                  Or email
                  <a href="mailto:admissions@pdxcodeguild.com"
                    >admissions@pdxcodeguild.com</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <nuxt-link to="/">
            <button
              type="button"
              class="
                inline-flex
                items-center
                px-4
                py-2
                border border-transparent
                text-sm
                font-medium
                rounded-md
                shadow-sm
                text-white
                bg-orange-600
                hover:bg-orange-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
              "
            >
              Home
            </button>
          </nuxt-link>
        </section>
        <section
          class="
            mt-12
            relative
            text-base
            max-w-prose
            mx-auto
            lg:mt-0
            lg:max-w-none
          "
        >
          <svg
            class="
              absolute
              top-0
              right-0
              -mt-20
              -mr-20
              lg:top-auto
              lg:right-auto
              lg:bottom-1/2
              lg:left-1/2
              lg:mt-0
              lg:mr-0
              xl:top-0
              xl:right-0
              xl:-mt-20 xl:-mr-20
            "
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
            />
          </svg>
          <img
            class="relative bg-white rounded-lg shadow-lg"
            src="/images/404Image.jpg"
            alt="PDX Code Guild students relax during a break."
          />
        </section>
      </div>
    </div>
  </main>
</template>
