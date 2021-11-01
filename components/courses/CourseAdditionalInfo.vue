<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <dl :class="`grid grid-cols-1 gap-5 sm:grid-cols-${stats.length}`">
      <div
        v-for="item in stats"
        :key="item.name"
        class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
      >
        <dt class="text-sm font-medium text-gray-500 truncate">
          {{ item.name }}
        </dt>
        <dd class="mt-1 text-xl font-semibold text-gray-900">
          {{ item.stat }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['stats'],
}
</script>
