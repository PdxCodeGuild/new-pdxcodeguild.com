<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16">
      <p
        class="
          text-center text-base
          font-semibold
          uppercase
          text-gray-600
          tracking-wider
        "
      >
        A few places our grads work
      </p>
      <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        <div
          v-for="logo in logos"
          :key="logo.name"
          class="col-span-1 flex justify-center py-8 px-8 bg-white"
        >
          <img class="max-h-12" :src="logo.source" :alt="logo.name" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logos: [
        { name: 'BlueJeans', source: '/logos/bluejeans.png' },
        { name: 'Nike', source: '/logos/nike.png' },
        { name: 'IBM', source: '/logos/ibm.png' },
        { name: 'Elemental', source: '/logos/elemental.png' },
        { name: 'Moovel', source: '/logos/moovel.jpg' },
        { name: 'Jama Software', source: '/logos/jama.png' },
        { name: 'Learning.com', source: '/logos/learning.png' },
        { name: 'New Relic', source: '/logos/newrelic.png' },
        { name: 'Providence', source: '/logos/providence.png' },
        { name: 'Treehouse', source: '/logos/treehouse.png' },
        { name: 'Urban Airship', source: '/logos/urbanairship.png' },
      ],
    }
  },
}
</script>
