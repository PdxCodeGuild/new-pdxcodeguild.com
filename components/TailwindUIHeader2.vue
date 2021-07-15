<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <!-- Header -->
    <div
      :class="`relative pb-32 bg-${colorFilter || 'gray'}-${
        colorFilterWeight || '800'
      }`"
    >
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" :src="imgSrc" :alt="imgAlt" />
        <div
          :class="`absolute inset-0 bg-${colorFilter || 'gray'}-${
            colorFilterWeight || '800'
          } mix-blend-multiply`"
          aria-hidden="true"
        />
      </div>
      <div
        class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
      >
        <h1
          class="
            text-4xl
            font-extrabold
            tracking-tight
            text-white
            md:text-5xl
            lg:text-6xl
          "
        >
          {{ title }}
        </h1>
        <p class="mt-6 max-w-3xl text-xl text-gray-300">{{ subtitle }}</p>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section
      class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" class="sr-only">Contact us</h2>
      <div
        class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8"
      >
        <div
          v-for="section in sections"
          :key="section.name"
          class="flex flex-col bg-white rounded-2xl shadow-xl"
        >
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
            <div
              class="
                absolute
                top-0
                p-5
                inline-block
                bg-orange-500
                rounded-xl
                shadow-lg
                transform
                -translate-y-1/2
              "
            >
              <component
                :is="section.icon"
                class="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-xl font-medium text-gray-900">
              {{ section.name }}
            </h3>
            <p class="mt-4 text-base text-gray-500">
              {{ section.description }}
            </p>
          </div>
          <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
            <nuxt-link
              :to="section.hash"
              class="
                text-base
                font-medium
                text-orange-700
                hover:text-orange-600
              "
              >Learn more<span aria-hidden="true"> &darr;</span></nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/vue/outline'
import PencilAltIcon from '~/components/heroicons/PencilAltIcon.vue'
import CodeIcon from '~/components/heroicons/CodeIcon.vue'
import AcademicCap from '~/components/heroicons/AcademicCapIcon.vue'

const sections = [
  {
    name: 'Enrollment',
    hash: '#enrollment-process',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: PencilAltIcon,
  },
  {
    name: 'Students',
    hash: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: CodeIcon,
  },
  {
    name: 'Alumni',
    hash: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: AcademicCap,
  },
]

export default {
  props: [
    'title',
    'subtitle',
    'imgSrc',
    'imgAlt',
    'colorFilter',
    'colorFilterWeight',
  ],
  data() {
    return {
      sections,
    }
  },
}
</script>
