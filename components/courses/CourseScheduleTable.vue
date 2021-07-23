<template>
  <figure class="flex flex-col">
    <div class="pb-5 px-6 border-b border-gray-200">
      <h3
        class="
          mt-2
          xl:mt-20
          text-3xl
          leading-8
          font-extrabold
          tracking-tight
          text-gray-900
          sm:text-4xl
          text-center
        "
      >
        {{ tableHeading }}
      </h3>
    </div>
    <div class="w-full flex justify-center">
      <div class="py-2 px-6 inline-block w-full md:w-8/12 lg:w-6/12 xl:w-8/12">
        <h2
          class="
            mt-4
            text-lg
            font-bold
            tracking-tight
            text-gray-700
            sm:text-xl
            text-center
            flex flex-col
            sm:flex-row
            sm:justify-center
          "
        >
          <span>
            {{ courseDays }}
          </span>
          <span class="text-orange-500 text-md sm:text-lg pl-2">
            {{ courseTimes }}
          </span>
        </h2>
        <div
          class="
            mt-4
            shadow
            overflow-hidden
            bg-gray-50
            border-b border-gray-200
            sm:rounded-lg
          "
        >
          <table class="divide-y divide-gray-200 w-full text-center">
            <thead class="bg-gray-50">
              <th
                class="
                  px-6
                  py-3
                  text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                Start Date
              </th>
              <th
                class="
                  px-6
                  py-3
                  text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                End Date
              </th>
            </thead>
            <tbody>
              <tr
                v-for="(course, i) in scheduledCourses"
                :key="i"
                :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
              >
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-sm
                    font-medium
                    text-gray-900
                    w-6/12
                  "
                >
                  {{ course.startDate }}
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-sm text-gray-500
                    w-6/12
                  "
                >
                  {{ course.endDate }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </figure>
</template>

<script>
export default {
  props: ['scheduledCourses', 'courseDays', 'courseTimes', 'tableHeading'],
}
</script>
