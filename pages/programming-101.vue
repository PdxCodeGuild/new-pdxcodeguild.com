<template>
  <div class="relative bg-white">
    <PageHeader
      pre-header-text="Dive in"
      header-text="Programming 101 & 102"
      post-header-text="The quickest way to get started writing code"
    />
    <div class="relative bg-white mt-20">
      <div class="lg:absolute lg:inset-0 rounded-2">
        <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            class="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div
        class="
          relative
          pt-4
          pb-4
          px-4
          sm:pt-16
          sm:px-6
          lg:px-8
          lg:max-w-7xl
          lg:mx-auto
          lg:grid lg:grid-cols-2
        "
      >
        <div class="lg:col-start-2 lg:pl-8">
          <div
            class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0"
          >
            <h2
              class="
                leading-6
                text-orange-600
                font-semibold
                tracking-wide
                uppercase
              "
            >
              Learn with us
            </h2>
            <h3
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
              Programming 101 & 102
            </h3>
            <p class="mt-8 text-lg text-gray-500">
              Jump-start your programming education with this fast-paced intro
              course. With interactive lectures and hands-on Python labs, you
              will gain the basic tools and skills, giving you a solid
              foundation for further learning.
            </p>
            <div class="mt-5 prose prose-orange text-gray-500">
              <ul>
                <li>
                  <!-- <div class="ml-3">
                    <p class="text-lg font-medium text-gray-900"> -->
                  Five days per week for two weeks
                  <!-- </p>
                  </div> -->
                </li>

                <li>
                  <!-- <div class="ml-3">
                    <p class="text-lg font-medium text-gray-900"> -->
                  High quality, hands-on experience
                  <!-- </p>
                  </div> -->
                </li>

                <li>
                  <!-- <div class="ml-3">
                    <p class="text-lg font-medium text-gray-900"> -->
                  Instructor-led, classroom setting
                  <!-- </p>
                  </div> -->
                </li>
                <li>
                  <!-- <div class="ml-3">
                    <p class="text-lg font-medium text-gray-900"> -->
                  Set up your environment and learn the tools
                  <!-- </p>
                  </div> -->
                </li>
                <li>
                  <!-- <div class="ml-3">
                    <p class="text-lg font-medium text-gray-900"> -->
                  Access to instructors and teaching assistants
                  <!-- </p>
                  </div> -->
                </li>
                <!-- <li class="py-8"> -->
                <div
                  class="
                    ml-3
                    mt-8
                    flex
                    justify-center
                    md:justify-start
                    lg:flex-shrink-0
                  "
                >
                  <div class="inline-flex rounded-md shadow">
                    <a
                      href="https://pdxcodeguild.eventbrite.com"
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
                      Learn More
                    </a>
                  </div>
                </div>
                <!-- </li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white overflow-hidden sm:rounded-lg mt-20">
      <div class="max-w-3xl mx-auto">
        <dl>
          <div class="sm:grid sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              <h3 class="py-6 text-3xl leading-6 font-medium text-gray-900">
                Course Overview
              </h3>
            </dt>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Python</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Basics of Python, Procedural Python
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Environment</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Visual Studio Code, terminal command line
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Best Practices</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Writing documentation, effective comments, encapsulation, minimal
              viable product
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              Problem Solving Skills
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Flowcharts, pseudo-code
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="bg-orange-100">
      <div
        class="
          max-w-7xl
          mx-auto
          py-12
          px-4
          mt-20
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
          <span class="block">Ready to start writing code?</span>
          <span class="block text-orange-600">Get started today.</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <button class="inline-flex rounded-md shadow">
            <a
              href="/apply"
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
              Apply
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'courses',
  head: {
    title: 'PDX Code Guild | Programming 101',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '2 Week Intro to Python Course.  Online Coding Bootcamps',
      },
    ],
  },
}
</script>
<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
