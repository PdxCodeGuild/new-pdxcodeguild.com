<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        divide-y divide-gray-200
        sm:px-6
        lg:py-16
        lg:px-8
      "
    >
      <h2 class="text-3xl font-extrabold text-gray-900">
        Frequently asked questions
      </h2>
      <div class="mt-8">
        <dl class="divide-y divide-gray-200">
          <div
            v-for="faq in faqs"
            :key="faq.id"
            class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
          >
            <dt class="text-base font-medium text-gray-900 md:col-span-5">
              {{ faq.question }}
            </dt>
            <dd class="mt-2 md:mt-0 md:col-span-7">
              <p class="text-base text-gray-500">
                {{ faq.answer }}
              </p>
              <p class="text-xs text-gray-400">{{ faq.note }}</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
const faqs = [
  {
    id: 1,
    question: 'Are PDX Code Guild courses online?',
    answer:
      'All bootcamps are avilable in a live-remote format with select cohorts will be offered both in-person and live-remote. Programming 101 and 102 will continue to be live-remote online classes.',
  },
  {
    id: 2,
    question: 'Do PDX Code Guild courses have homework?',
    answer:
      'PDX Code Guild courses have built-in time during class hours to work on labs with the help of instructors and teaching assistants. Courses are designed so that the average student can complete most labs during class, and study hall is provided for an additional 90 minutes  of TA-led peer mentoring every week day.',
  },
  {
    id: 3,
    question:
      'Is help available to PDX Code Guild students outside of class hours?',
    answer:
      'Yes. Teaching Assistants provide peer mentoring in study hall Mon-Fri, 4:00 pm - 6:00 pm  Pacific Time. Students can work, hang out, study, and get help with course work. Additionally, PDX Code Guild has an active community of alumni, staff, and graduates that will answer questions.',
  },
  {
    id: 4,
    question: 'What does PDX Code Guild offer to its graduates?',
    answer:
      'PDX Code Guild offers a variety of services to graduates in good standing. We have a dedicated Career Services Specialist hosting Career Club meetups and available for one-on-one counseling. Alumni are also welcome at Study Hall and all PDX Code Guild events.',
  },
  {
    id: 5,
    question: 'What veterans benefits does PDX Code Guild accept?',
    answer:
      'VetTec, GI Bill®, VR&E, VRRAP and more are accepted at PDX Code Guild.',
    note: 'GI Bill® is a registered trademark of the U.S. Department of Veterans Affairs (VA). More information about education benefits offered by VA is available at the official U.S. government Web site at https://www.benefits.va.gov/gibill.',
  },
  {
    id: 6,
    question:
      'Do veterans receive BAH (Basic Allowance for Housing) while attending PDX Code Guild with their benefits?',
    answer:
      'Yes.  Veterans receive a monthly housing allowance when attending our Full Stack Day, Full Stack Evening, and Advanced JavaScript Bootcamps with their benefits.',
  },
  {
    id: 7,
    question:
      'Do PDX Code Guild evening bootcamps qualify as full time for veterans using their benefits?',
    answer:
      'Yes.  The Full Stack Day, Full Stack Evening, and Advanced JavaScript Bootcamps all qualify as full time classes for veterans using their benefits.',
  },
]

export default {
  data() {
    return {
      faqs,
    }
  },
}
</script>
