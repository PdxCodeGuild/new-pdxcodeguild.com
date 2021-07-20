<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section id="bootcamp" class="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg
        class="
          hidden
          lg:block
          absolute
          left-full
          transform
          -translate-x-1/2 -translate-y-1/4
        "
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
          height="784"
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>

      <div class="relative">
        <h2
          class="
            text-center text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          The Bootcamp
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          From the programming fundamentals of Python, to a full-stack Django
          project, our goal is to take students of all levels of programming
          experience and turn them into capable web developers.
        </p>
      </div>

      <div
        class="
          relative
          mt-12
          lg:mt-24
          lg:grid lg:grid-cols-2
          lg:gap-8
          lg:items-center
        "
      >
        <div class="relative">
          <h3
            class="
              text-2xl
              font-extrabold
              text-gray-900
              tracking-tight
              sm:text-3xl
            "
          >
            Become a web developer
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            Learn Python, JavaScript, HTML, CSS &amp; Django. Build a full-stack
            web application, even if you start with zero experience.
          </p>

          <dl class="mt-10 space-y-10">
            <div v-for="item in webDevFeatures" :key="item.id" class="relative">
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
                  <component
                    :is="item.icon"
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {{ item.name }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ item.description }}
              </dd>
            </div>
          </dl>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg
            class="
              absolute
              left-1/2
              transform
              -translate-x-1/2
              translate-y-16
              lg:hidden
            "
            width="784"
            height="404"
            fill="none"
            viewBox="0 0 784 404"
          >
            <defs>
              <pattern
                id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
              width="784"
              height="404"
              fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
            />
          </svg>
          <img
            class="relative mx-auto rounded-lg shadow-lg"
            width="490"
            src="images/InstructorAndStudent.jpg"
            alt="A PDX Code Guild instructor assists a student at a lectern."
          />
        </div>
      </div>

      <svg
        class="
          hidden
          lg:block
          absolute
          right-full
          transform
          translate-x-1/2 translate-y-12
        "
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
          height="784"
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div
          class="
            lg:grid lg:grid-flow-row-dense lg:grid-cols-2
            lg:gap-8
            lg:items-center
          "
        >
          <div class="lg:col-start-2">
            <h3
              class="
                text-2xl
                font-extrabold
                text-gray-900
                tracking-tight
                sm:text-3xl
              "
            >
              Get immersed in tech
            </h3>
            <p class="mt-3 text-lg text-gray-500">
              In our bootcamps, you will be writing code every day, learning the
              practical skills that developers use every day.
            </p>

            <dl class="mt-10 space-y-10">
              <div
                v-for="item in techImmersionFeatures"
                :key="item.id"
                class="relative"
              >
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
                    <component
                      :is="item.icon"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {{ item.name }}
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  {{ item.description }}
                </dd>
              </div>
            </dl>
            <div class="mt-10">
              <nuxt-link
                to="/courses"
                class="text-base font-medium text-orange-600"
              >
                Learn more about our courses
                <span aria-hidden="true">&rarr;</span>
              </nuxt-link>
            </div>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <svg
              class="
                absolute
                left-1/2
                transform
                -translate-x-1/2
                translate-y-16
                lg:hidden
              "
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                width="784"
                height="404"
                fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
              />
            </svg>
            <img
              class="relative mx-auto rounded-lg shadow-lg"
              width="490"
              src="images/coursecards/talking.jpg"
              alt="PDX Code Guild students chat on a couch.  A stuffed frog looks on."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/vue/outline'
import CodeIcon from '~/components/heroicons/CodeIcon.vue'
const webDevFeatures = [
  {
    id: 1,
    name: 'One-on-one instruction',
    description:
      'With small class sizes and hours of lab time each week, our students have access to instant help from Instructors and Teaching Assistants.  Get extra help outside of class at Study Hall––90 minutes every weekday.',
    icon: CodeIcon,
  },
  {
    id: 2,
    name: 'All levels of experience',
    description:
      "Whether you have prior programming experience, or you've never opened a terminal, our bootcamps are designed to turn all of our students into Full Stack Web Developers.",
    icon: CodeIcon,
  },
  {
    id: 3,
    name: 'Build a portfolio project',
    description:
      "Our bootcamp culminates in a Capstone Project––perfect for showing off everything you've learned!",
    icon: CodeIcon,
  },
]
const techImmersionFeatures = [
  {
    id: 1,
    name: 'Practical programming skills',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CodeIcon,
  },
  {
    id: 2,
    name: 'Hands-on learning',
    description:
      'In our bootcamps, you will be writing code every day, learning the practical skills that developers use in the tech industry.',
    icon: CodeIcon,
  },
]

export default {
  data() {
    return {
      webDevFeatures,
      techImmersionFeatures,
    }
  },
}
</script>
