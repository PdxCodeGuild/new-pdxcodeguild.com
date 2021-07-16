<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section id="enrollment" class="bg-gray-50 overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <svg
        class="
          absolute
          top-0
          left-full
          transform
          -translate-x-1/2 -translate-y-3/4
          lg:left-auto
          lg:right-full
          lg:translate-x-2/3 lg:translate-y-1/4
        "
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
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
          fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
        />
      </svg>

      <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div class="lg:col-span-1">
          <h2
            class="
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            Enrollment
          </h2>
        </div>
        <dl
          class="
            mt-10
            space-y-10
            sm:space-y-0
            sm:grid sm:grid-cols-2
            sm:gap-x-8 sm:gap-y-10
            lg:mt-0
            lg:col-span-2
          "
        >
          <div v-for="feature in features" :key="feature.name">
            <dt>
              <div
                class="
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
                  :is="feature.icon"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                {{ feature.name }}
              </p>
            </dt>
            <component :is="feature.description" />
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
import StarIcon from '~/components/heroicons/StarIcon.vue'
import GettingStarted from '~/components/prospective/enrollment/GettingStarted.vue'
import Programming101 from '~/components/prospective/enrollment/Programming101.vue'
import FormalApplication from '~/components/prospective/enrollment/FormalApplication.vue'
import Tuition from '~/components/prospective/enrollment/Tuition.vue'

const features = [
  {
    name: 'Getting started',
    description: GettingStarted,
    icon: StarIcon,
  },
  {
    name: 'Programming 101',
    description: Programming101,
    icon: StarIcon,
  },
  {
    name: 'Formal application',
    description: FormalApplication,
    icon: StarIcon,
  },
  {
    name: 'Tuition',
    description: Tuition,
    icon: StarIcon,
  },
]

export default {
  data() {
    return {
      features,
    }
  },
}
</script>
