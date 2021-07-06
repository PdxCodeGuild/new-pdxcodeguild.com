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
    ]
  }
  ```
-->
<template>
  <div
    id="what-will-i-learn"
    class="
      py-16
      xl:py-36
      px-4
      sm:px-6
      lg:px-8
      bg-white
      overflow-hidden
      xl:min-h-screen
      scroll-snap-child
    "
  >
    <div class="max-w-max lg:max-w-7xl mx-auto">
      <div class="relative z-10 mb-8 md:mb-2 md:px-6">
        <div class="text-base max-w-prose lg:max-w-none">
          <h2
            class="
              leading-6
              text-orange-600
              font-semibold
              tracking-wide
              uppercase
            "
          >
            What will I learn?
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
            Our bootcamps teach the latest technology to keep you on the cutting
            edge!
          </p>
        </div>
      </div>
      <div class="relative">
        <svg
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
        </svg>
        <div class="relative md:bg-white md:p-6">
          <div class="lg:grid lg:grid-cols-2 lg:gap-6">
            <div
              class="prose prose-orange prose-lg text-gray-500 lg:max-w-none"
            >
              <p>
                Unlock your potential! We have a proven track for individuals
                who are serious about becoming the best in the field and
                leveraging our comprehensive curriculum to reach their desired
                outcome. At PDX Code Guild, we go beyond basic syntax and
                one-language classes.
              </p>
              <p>
                Our
                <nuxt-link to="/courses" class="font-bold text-orange"
                  >Full-Stack Developer Bootcamps</nuxt-link
                >
                cover
              </p>
              <ul>
                <li>Python & JavaScript</li>
                <li>HTML & CSS</li>
                <li>Django Database Design</li>
                <li>APIs</li>
                <li>and more...</li>
              </ul>
            </div>
            <div class="mt-6 prose prose-orange prose-lg text-gray-500 lg:mt-0">
              <p>
                Bootcamp students learn the foundational skills that
                professional programmers use everyday. You will be able to
                transfer your full-stack developer skills to a wide variety of
                technical jobs in most programing languages.
              </p>
              <p>
                Our
                <nuxt-link to="/courses" class="font-bold text-orange"
                  >Advanced JavaScript Bootcamps</nuxt-link
                >
                cover
              </p>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>Mongo</li>
                <li>React</li>
                <li>and more...</li>
              </ul>
              <p>The future is yours!</p>
            </div>
          </div>
          <div class="mt-8 inline-flex rounded-md">
            <p
              class="
                flex
                items-center
                justify-center
                px-5
                py-3
                border border-transparent
                text-xl
                font-medium
              "
            >
              For more information, see
            </p>
            <nuxt-link
              to="/courses"
              class="
                flex
                items-center
                justify-center
                px-5
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                shadow
                text-white
                bg-orange-600
                hover:bg-orange-700
              "
            >
              Our Courses
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
