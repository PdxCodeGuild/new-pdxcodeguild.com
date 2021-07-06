<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <!-- <h2
          class="
            text-base text-orange-600
            font-semibold
            tracking-wide
            uppercase
          "
        >
          Who is this program right for?
        </h2> -->
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
          Who is this program right for?
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          If any of these describe you and you're ready to attend the best
          programmer bootcamp,
          <nuxt-link to="/contact" class="text-orange">
            talk with an advisor
          </nuxt-link>
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="
            space-y-10
            md:space-y-0
            md:grid md:grid-cols-2
            md:gap-x-8 md:gap-y-10
          "
        >
          <div
            v-for="question in questions"
            :key="question.name"
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
                  :is="question.icon"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{ question.name }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ question.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
import RefreshIcon from '~/components/heroicons/RefreshIcon.vue'
import BriefcaseIcon from '~/components/heroicons/BriefcaseIcon.vue'
import LightBulbIcon from '~/components/heroicons/LightBulbIcon.vue'
import AcademicCapIcon from '~/components/heroicons/AcademicCapIcon.vue'
import PresentationChartLineIcon from '~/components/heroicons/PresentationChartLineIcon.vue'
import DesktopComputerIcon from '~/components/heroicons/DesktopComputerIcon.vue'

const questions = [
  {
    name: 'Career Change',
    description:
      'Are you ready for a career change? Want to break into the tech industry?',
    icon: RefreshIcon,
  },
  {
    name: 'Advancement',
    description:
      'Looking to advance to more technical roles within your current company?',
    icon: BriefcaseIcon,
  },
  {
    name: 'Entrpreneurs',
    description:
      'Are you ready to go all-in on your new idea as an Entrepreneur?',
    icon: LightBulbIcon,
  },
  {
    name: 'College Students',
    description:
      'Looking to enhance your skills and get work experience while also in college?',
    icon: AcademicCapIcon,
  },
  {
    name: 'Tech Skill',
    description:
      'Want the tech skills that offer the biggest variety of career choices?',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Freelancers',
    description:
      'Are you a Freelancer? Do you want to enhance your skills or start something new?',
    icon: DesktopComputerIcon,
  },
]

export default {
  data() {
    return {
      questions,
    }
  },
}
</script>
