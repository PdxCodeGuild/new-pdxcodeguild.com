<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section class="px-6 lg:px-12">
    <h3 class="text-lg leading-6 font-medium text-gray-900 lg:text-center">
      A lot of things have changed with COVID-19, but the way we conduct our
      bootcamps hasn't&mdash;in our live-remote bootcamps, our students get:
    </h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <figure
        v-for="feature in features"
        :key="feature.name"
        class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
      >
        <dt class="text-2xl font-semibold text-gray-900">
          {{ feature.title }}
        </dt>
        <dd class="mt-1 text-sm font-medium text-gray-500">
          {{ feature.description }}
        </dd>
      </figure>
    </dl>
  </section>
</template>

<script>
const features = [
  {
    title: 'One-on-one instruction',
    description:
      'Our students get instant assistance from instructors and TAs.  Our lectures are live and students have the opportunity to ask questions at any time.',
  },
  {
    title: 'Live classrooms',
    description:
      'We may be remote, but our virtual classrooms are still classrooms.  The relationships our students build with their classmates and staff will be the first of many opportunities to connect in the industry.',
  },
  {
    title: 'A chance to learn from anywhere',
    description:
      'A silver lining of the global pandemic has been the opportunity to engage with students all over the world.',
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
