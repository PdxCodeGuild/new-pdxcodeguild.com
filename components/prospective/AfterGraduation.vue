<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section class="relative bg-white pt-12 pb-16 sm:py-24 lg:py-32">
    <div
      id="after"
      class="
        mx-auto
        max-w-md
        px-4
        pt-4
        text-center
        sm:max-w-3xl
        sm:px-6
        lg:px-8
        lg:max-w-7xl
      "
    >
      <h2
        class="text-base font-semibold tracking-wider text-orange-600 uppercase"
      >
        After Graduation
      </h2>
      <p
        class="
          mt-2
          text-3xl
          font-extrabold
          text-gray-900
          tracking-tight
          sm:text-4xl
        "
      >
        You're just getting started
      </p>
      <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        Graduation is only the beginning of your coding adventure. These are
        just some of the resources available to PDX Code Guild Alumni.
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <figure v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    class="
                      inline-flex
                      items-center
                      justify-center
                      p-3
                      bg-orange-500
                      rounded-md
                      shadow-lg
                    "
                  >
                    <component
                      :is="feature.icon"
                      class="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                >
                  {{ feature.name }}
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import {
//   CloudUploadIcon,
//   CogIcon,
//   LockClosedIcon,
//   RefreshIcon,
//   ServerIcon,
//   ShieldCheckIcon,
// } from '@heroicons/vue/outline'
import AcademicCapIcon from '~/components/heroicons/AcademicCapIcon.vue'

const features = [
  {
    name: 'Career Services',
    icon: AcademicCapIcon,
    description:
      'We have a dedicated Career Services Specialist to assist our alumni with resumés, LinkedIn & interview prep.',
  },
  {
    name: 'Mock Technical Interviews',
    icon: AcademicCapIcon,
    description:
      'Sit down for a practice technical interview with one of our advisors.  Get the feedback and insight of a real technical interview without the stakes.',
  },
  {
    name: 'Study Hall',
    icon: AcademicCapIcon,
    description:
      'Study Hall is available to Alumni as well as Students.  Come by to hang out, work and ask questions of our TAs.',
  },
  {
    name: 'Tech Talks',
    icon: AcademicCapIcon,
    description:
      'Attend one of our monthly presentations on a wide array of coding topics––from git and test-driven development to ray tracing and game design!',
  },
  {
    name: 'Advanced JavaScript Course',
    icon: AcademicCapIcon,
    description:
      'Take your skills to the next level with our Advanced JavaScript course.',
  },
  {
    name: 'In-Person Events... Soon',
    icon: AcademicCapIcon,
    description: "We can't wait to have in-person events again!  Stay tuned.",
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
