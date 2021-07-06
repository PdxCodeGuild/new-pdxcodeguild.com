<template>
  <div class="py-12 bg-white">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">A better way to send money.</h2>
      <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
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
                mx-auto
              "
            >
              <component
                :is="feature.icon"
                class="h-6 w-6"
                aria-hidden="true"
              />
            </div>
            <p
              class="
                mt-5
                text-2xl
                leading-6
                font-medium
                text-gray-900 text-center
              "
            >
              {{ feature.name }}
            </p>
          </dt>
          <dd class="mt-2 text-lg text-gray-500 text-center">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
// import { StarIcon, ClockIcon, HomeIcon } from '@heroicons/vue/outline'
// console.log(StarIcon, ClockIcon, HomeIcon)
import ClockIcon from '~/components/heroicons/ClockIcon.vue'
import StarIcon from '~/components/heroicons/StarIcon.vue'
import HomeIcon from '~/components/heroicons/HomeIcon.vue'

const features = [
  {
    name: 'Licensed',
    description:
      'The Python based developer bootcamp is licensed by Oregon’s Higher Education Coordinating Commission',
    icon: StarIcon,
  },
  {
    name: 'Intensive',
    description:
      'Our accelerated curriculum requires you to be an active and responsible learner.',
    icon: ClockIcon,
  },
  {
    name: 'Supportive',
    description:
      'The success of our school hinges on the success of each individual student. We take this very seriously',
    icon: HomeIcon,
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
