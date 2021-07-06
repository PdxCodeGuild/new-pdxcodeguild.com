<template>
  <section
    id="what-is-the-path-graduates"
    class="xl:min-h-screen xl:relative scroll-snap-child"
  >
    <h2 class="mt-20 text-5xl text-center lg:text-left pl-16 mx-auto pt-4">
      Graduates
    </h2>
    <div
      class="
        relative
        bg-white
        mt-20
        w-10/12
        lg:w-full
        border-grey-500 border-dotted
        lg:border-t-4
        mx-auto
      "
    >
      <dl
        class="
          space-y-10
          md:space-y-0
          md:grid
          lg:grid-cols-2
          md:gap-x-8 md:gap-y-10
          md:grid-cols-1
          lg:px-10
          px-0
          w-full
          lg:w-8/12
          mx-auto
        "
      >
        <div
          class="
            relative
            border-grey-500 border-l-4 border-dotted
            lg:border-l-0
          "
        >
          <div
            class="
              absolute
              lg:-top-6
              lg:left-6
              -left-6
              -top-8
              flex
              items-center
              justify-center
              h-12
              w-12
              rounded-md
              bg-orange-500
              text-white text-4xl
            "
          >
            1
          </div>
          <dt>
            <p
              class="
                my-6
                text-2xl
                leading-6
                font-medium
                text-gray-900
                flex
                justify-center
                align-center
              "
            >
              <CircleWithInnerText
                diameter-lg="52"
                diameter-sm="52"
                bg-color="orange-500"
                text-color="white"
                inner-html="Advanced JavaScript Bootcamp"
              />
            </p>
          </dt>
          <dd class="mt-10 mx-8 pb-16 text-base text-gray-500">
            <p class="lg:mt-10">
              Our
              <nuxt-link
                to="/courses/advanced-js"
                class="text-orange-500 hover:text-orange-600 text-lg"
                >Advanced Javascript Bootcamp
              </nuxt-link>
              is perfect for graduates of our Full Stack Bootcamp, industry
              professionals, and recent Computer Science graduates who want to
              gain sought-after advanced skills.
            </p>
            <!-- <p class="mt-4">
              To ensure our students have all of their questions answered and
              they are ready for the commitment it takes to be successful, each
              applicant will meet with an advisor to review their individualized
              needs and goals.
            </p> -->
          </dd>
        </div>
        <div
          class="
            relative
            border-grey-500 border-l-4 border-dotted
            lg:border-l-0
          "
        >
          <dt>
            <div
              class="
                absolute
                lg:-top-6
                lg:left-6
                -left-6
                -top-8
                flex
                items-center
                justify-center
                h-12
                w-12
                rounded-md
                bg-orange-500
                text-white text-4xl
              "
            >
              2
            </div>
            <p
              class="
                my-6
                text-2xl
                leading-6
                font-medium
                text-gray-900
                flex
                justify-center
                align-center
              "
            >
              <CircleWithInnerText
                diameter-lg="52"
                diameter-sm="52"
                bg-color="orange-500"
                text-color="white"
                inner-html="Keep Advacing Your Tech Career!"
              />
            </p>
          </dt>
          <dd class="mt-10 mx-8 pb-16 text-base text-gray-500">
            <p class="mt-10">
              Our mission is to help as many people as we can get access to
              great jobs in tech and to support our grads in their growth within
              the industry.
            </p>
            <p class="mt-4">
              We teach the cutting edge technologies that give our students a
              distinct advantage when taking their career to the next level.
            </p>
            <!-- <p class="mt-4">
              <span class="font-bold text-lg">Don’t worry</span>, our mission is
              to help as many people as we can get access to great careers in
              tech. If you’re not ready yet, we will advise you on how to
              prepare and offer you mentorship along the way.
            </p> -->
          </dd>
        </div>
      </dl>
    </div>
    <div
      class="
        relative
        bg-orange-100
        mt-20
        lg:absolute
        lg:bottom-0
        lg:left-0
        lg:right-0
      "
    >
      <div
        class="
          max-w-6xl
          mx-auto
          py-12
          px-4
          mt-20
          sm:px-6
          lg:py-18
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
          <span class="block">Ready to begin your coding adventure?</span>
          <span class="block text-orange-600">Let us be your guide!</span>
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
              Contact Us
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
