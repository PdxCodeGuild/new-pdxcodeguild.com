<template>
  <div class="px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
    <div class="max-w-max lg:max-w-7xl mx-auto">
      <div class="relative z-10 mb-8 md:mb-2 md:px-6">
        <div class="text-base max-w-prose lg:max-w-none">
          <p
            class="
              mt-20
              text-3xl
              leading-8
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            Tuition &amp; Financial Aid
          </p>
        </div>
      </div>
      <div class="relative">
        <!-- <svg
          class="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
            fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
          />
        </svg>
        <svg
          class="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
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
            fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
          />
        </svg> -->
        <div class="relative md:bg-white md:p-6">
          <div class="">
            <div
              class="prose prose-orange prose-lg text-gray-500 lg:max-w-none"
            >
              <p>
                Full tuition
                <span class="text-orange">${{ fullTuition }}</span> <br />
                with needs based or diversity scholarship
                <span class="text-orange"
                  >${{ needsBasedLow }}-${{ needsBasedHigh }}</span
                >
              </p>
              <!-- <br /> -->
              <p>
                Qualifying students may be eligible for third party
                <span class="text-orange">grants</span>
                that pay for a portion or all of tuition, on top of the
                previously mentioned discounts.
              </p>
              <!-- <br /> -->
              <!-- <p>
                For Military: In addition to the above we accept Veterans’
                benefits including the GI Bill®
              </p>
              <p class="text-xs">
                GI Bill® is a registered trademark of the U.S. Department of
                Veterans Affairs (VA). More information about education benefits
                offered by VA is available at the official U.S. government Web
                site at
                <a
                  href="https://www.benefits.va.gov/gibill/"
                  class="text-orange"
                  >https://www.benefits.va.gov/gibill/</a
                >.
              </p> -->
              <div class="mt-10">
                <nuxt-link
                  to="/financial-aid"
                  class="text-base font-medium text-orange-600"
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['fullTuition', 'needsBasedLow', 'needsBasedHigh'],
}
</script>
