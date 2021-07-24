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
      'Yes.  Until further notice, all courses will continue to be conducted online.  However, nothing has changed in the content of the courses and the availability of assistance to students as compared to in-person courses.  We hope to return to in-person classes soon, as safety permits.',
  },
  {
    id: 2,
    question: 'Do PDX Code Guild courses have homework?',
    answer:
      'PDX Code Guild courses have built-in lab time during class hours.  We understand our students have busy lives and provide ample in-class time for students to work.  However, students are strongly encouraged to spend additional time outside of class to practice coding and work on assigned labs.  PDX Code Guild offers an additional 90 minutes of Study Hall every weekday for students to get help outside of class.',
  },
  {
    id: 3,
    question:
      'Is help available to PDX Code Guild students outside of class hours?',
    answer:
      'Yes.  Students may schedule to meet with their instructor for additional help with class material outside of class hours.  We also hold Study Hall from 4:30 pm - 6:00 pm Mon-Fri, where students can work, hang out, study, and get help with course work from PDX Code Guild staff.',
  },
  {
    id: 4,
    question: 'What does PDX Code Guild offer to its graduates?',
    answer:
      'PDX Code Guild offers a variety of services to graduates in good standing.  We have a dedicated Career Services Specialist hosting weekly Career Club meetups and available for one-on-one counseling.  Alumni are also welcome at Study Hall and all PDX Code Guild events.',
  },
  {
    id: 5,
    question:
      'Do veterans receive BAH (Basic Allowance for Housing) while attending PDX Code Guild with their benefits?',
    answer:
      'Yes.  Veterans receive a monthly housing allowance when attending our Full Stack Day, Full Stack Evening, and Advanced JavaScript Bootcamps with their benefits.',
  },
  {
    id: 6,
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
