<template>
  <section
    id="veterans"
    class="
      relative
      bg-white
      overflow-hidden
      xl:min-h-screen
      xl:relative
      scroll-snap-child
    "
  >
    <div class="hidden xl:block lg:absolute lg:inset-0" aria-hidden="true">
      <svg
        class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
        width="640"
        height="784"
        fill="none"
        viewBox="0 0 640 784"
      >
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x="118"
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
          y="72"
          width="640"
          height="640"
          class="text-gray-50"
          fill="currentColor"
        />
        <rect
          x="118"
          width="404"
          height="784"
          fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
        />
      </svg>
    </div>

    <div class="relative pb-16 sm:pb-24 lg:pb-32">
      <ProspectiveHeading2
        imperative="Use your Veteran's Benefits!"
        title="Veterans"
        description="Lorem Placeholdum Veteranarium"
      />

      <div
        class="
          mt-12
          mx-auto
          max-w-7xl
          lg:max-w-full
          px-4
          sm:mt-16
          sm:px-6
          lg:mt-24
        "
      >
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="
              sm:text-center
              md:max-w-2xl
              md:mx-auto
              lg:col-span-6
              lg:text-left
            "
          >
            <h1>
              <span
                class="
                  block
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                  sm:text-base
                  lg:text-sm
                  xl:text-base
                "
                >GI Bill &amp; Vet Tec</span
              >
              <span
                class="
                  mt-1
                  block
                  text-4xl
                  tracking-tight
                  font-extrabold
                  sm:text-5xl
                  xl:text-6xl
                "
              >
                <span class="block text-gray-900">PDX Code Guild</span>
                <span class="block text-orange-600">Veteran's Benefits</span>
              </span>
            </h1>
            <p
              class="
                mt-3
                text-base text-gray-500
                sm:mt-5
                sm:text-xl
                lg:text-lg
                xl:text-xl
              "
            >
              Having worked with numerous successful veterans in the past, PDX
              Code Guild is thrilled that students can use their GI Bill® to
              attend bootcamps at PDX Code Guild!
            </p>
            <p
              class="
                mt-3
                text-xs text-gray-500
                sm:mt-3
                sm:text-base
                lg:text-sm
                xl:text-base
              "
            >
              GI Bill® is a registered trademark of the U.S. Department of
              Veterans Affairs (VA). More information about education benefits
              offered by VA is available at the official U.S. government Web
              site at
              <a
                class="text-orange-500"
                href="https://www.benefits.va.gov/gibill"
                >https://www.benefits.va.gov/gibill</a
              >.
            </p>
          </div>
          <div
            class="
              mt-12
              relative
              sm:max-w-lg
              sm:mx-auto
              lg:mt-0
              lg:max-w-none
              lg:mx-0
              lg:col-span-6
              lg:flex
              lg:items-center
            "
          >
            <svg
              class="
                absolute
                top-0
                left-1/2
                transform
                -translate-x-1/2 -translate-y-8
                scale-75
                origin-top
                sm:scale-100
                lg:hidden
                -z-10
              "
              width="640"
              height="784"
              fill="none"
              viewBox="0 0 640 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x="118"
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
                y="72"
                width="640"
                height="640"
                class="text-gray-50"
                fill="currentColor"
              />
              <rect
                x="118"
                width="404"
                height="784"
                fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
              />
            </svg>
            <div
              class="
                relative
                mx-auto
                w-full
                rounded-lg
                shadow-lg
                lg:max-w-3xl
                xl:max-w5xl
              "
            >
              <span class="sr-only">Watch our video to learn more</span>
              <video ref="video" class="w-full" controls="1">
                <source src="~/static/video/veterans.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-orange-100 xl:absolute xl:bottom-0 xl:right-0 xl:left-0">
      <div
        class="
          max-w-7xl
          mx-auto
          py-12
          px-4
          sm:px-6
          lg:py-16
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
          <span class="block">Connect with a VA Certifying Official</span>
          <!-- <span class="block text-orange-600"
          >Start your free trial today.</span
        > -->
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
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
                text-white
                bg-orange-600
                hover:bg-orange-700
              "
            >
              Contact
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProspectiveHeading2 from '~/components/prospective/ProspectiveHeading2.vue'
export default {
  components: {
    ProspectiveHeading2,
  },
}
</script>
