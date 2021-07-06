<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section
    class="
      py-16
      bg-gray-50
      overflow-hidden
      lg:py-24
      xl:min-h-screen
      scroll-snap-child
    "
  >
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
          Why PDX Code Guild?
        </h2>
        <!-- <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          magnam voluptatum cupiditate veritatis in, accusamus quisquam.
        </p> -->
      </div>

      <div
        class="
          relative
          mt-12P
          lg:mt-24
          lg:grid lg:grid-cols-2
          lg:gap-8
          lg:items-center
        "
      >
        <div class="relative">
          <!-- <h3
            class="
              text-2xl
              font-extrabold
              text-gray-900
              tracking-tight
              sm:text-3xl
            "
          >
            Transfer funds world-wide
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            minima sequi recusandae, porro maiores officia assumenda aliquam
            laborum ab aliquid veritatis impedit odit adipisci optio iste
            blanditiis facere. Totam, velit.
          </p> -->

          <dl class="mt-10 space-y-10">
            <div v-for="item in topFeatures" :key="item.id" class="relative">
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
          <video class="relative mx-auto" controls="1">
            <source
              src="~/static/video/why-pdx-code-guild.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
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

      <div class="relative mt-12 sm:mt-16 lg:mt-24 scroll-snap-last-child">
        <div
          class="
            lg:grid lg:grid-flow-row-dense lg:grid-cols-2
            lg:gap-8
            lg:items-center
          "
        >
          <div class="lg:col-start-2">
            <!-- <h3
              class="
                text-2xl
                font-extrabold
                text-gray-900
                tracking-tight
                sm:text-3xl
              "
            >
              Always in the loop
            </h3>
            <p class="mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ex obcaecati natus eligendi delectus, cum deleniti sunt in labore
              nihil quod quibusdam expedita nemo.
            </p> -->

            <dl class="mt-10 space-y-10">
              <div
                v-for="item in bottomFeatures"
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
              class="relative mx-auto"
              width="490"
              src="/images/404Image.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="relative bg-orange-600 mt-4">
      <div
        class="
          h-56
          bg-orange-600
          sm:h-72
          md:absolute
          md:left-0
          md:h-full
          md:w-1/2
        "
      >
        <img
          class="w-full h-full object-cover"
          src="/images/coursecards/desk.jpg"
          alt="PDX Code Guild Members Working"
        />
      </div>
      <div
        class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div class="md:ml-auto md:w-1/2 md:pl-10">
          <h2
            class="
              text-base
              font-semibold
              uppercase
              tracking-wider
              text-gray-300
            "
          >
            What Are You Waiting For?
          </h2>
          <p
            class="
              mt-2
              text-white text-3xl
              font-extrabold
              tracking-tight
              sm:text-4xl
            "
          >
            Start Your Coding Journey Today
          </p>
          <!-- <p class="mt-3 text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p> -->
          <div class="mt-8">
            <div class="inline-flex rounded-md shadow">
              <nuxt-link
                to="/apply"
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
                  text-orange-900
                  bg-white
                  hover:bg-orange-100
                "
              >
                Apply
                <!-- <ExternalLinkIcon class="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" /> -->
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LightBulbIcon from '~/components/heroicons/LightBulbIcon.vue'
import TerminalIcon from '~/components/heroicons/TerminalIcon.vue'
import PresentationChartBarIcon from '~/components/heroicons/PresentationChartBarIcon.vue'
import CodeIcon from '~/components/heroicons/CodeIcon.vue'

const topFeatures = [
  {
    id: 1,
    name: 'Think like a programmer',
    description:
      'Moving beyond the syntax of individual languages, learning universal programmer practices and how to THINK like a programmer is most of the battle and the basis of what it takes to be versatile and successful in the tech industry. It’s also a skill set that most bootcamps miss in their curriculum. At PDX Code Guild, we go deeper to give you the skills you need to go where opportunity and desire take you.',
    icon: LightBulbIcon,
  },
  {
    id: 2,
    name: 'Small class size',
    description:
      'We arm you with the highest quality education and the top in-demand skills needed in the workforce right now. We give you small class sizes, highly qualified teachers, in-person 1-on-1 attention, after-hours workspace and assistance, job placement suport and alumni resources.',
    icon: PresentationChartBarIcon,
  },
]
const bottomFeatures = [
  {
    id: 1,
    name: 'Python & JavaScript',
    description:
      'Our courses start with Python because it has an approachable syntax for an object-oriented language. It’s not as “cluttered” as other languages like Java, C#, or C++. This helps demystify programming for people who are getting their feet wet. Python is very flexible and is used widely from system administration to research to gaming engines to functional programming.',
    icon: TerminalIcon,
  },
  {
    id: 2,
    name: 'Django',
    description:
      'Our students learn fundamentals in Python which we then expand upon with JavaScript, HTML5, and CSS3 into full stack development with one of Python’s most popular and widely used frameworks: Django.',
    icon: CodeIcon,
  },
]

export default {
  data() {
    return {
      topFeatures,
      bottomFeatures,
    }
  },
}
</script>
