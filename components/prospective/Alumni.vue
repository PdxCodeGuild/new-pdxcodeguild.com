<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section class="relative bg-white pt-12 pb-16 sm:py-24 lg:py-32">
    <div
      id="alumni"
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
        Alumni
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
        You are not done
      </p>
      <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan
        in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id
        viverra nulla.
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
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
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
          </div>
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
  { name: 'Push to Deploy', icon: AcademicCapIcon },
  { name: 'SSL Certificates', icon: AcademicCapIcon },
  { name: 'Simple Queues', icon: AcademicCapIcon },
  { name: 'Advanced Security', icon: AcademicCapIcon },
  { name: 'Powerful API', icon: AcademicCapIcon },
  { name: 'Database Backups', icon: AcademicCapIcon },
]

export default {
  data() {
    return {
      features,
    }
  },
}
</script>
