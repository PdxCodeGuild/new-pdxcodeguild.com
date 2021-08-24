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
      <div class="py-2 px-6 inline-block w-full">
        <!-- <h2
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
        </h2> -->
        <div
          class="
            mt-4
            shadow
            bg-gray-50
            border-b border-gray-200
            sm:rounded-lg
            overflow-x-auto
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
                Days
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
                Time
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
                  {{ course.start_date }}
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
                  {{ course.end_date }}
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
                  M &#8212; F
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
                  {{ course.start_time }} &#8212; {{ course.end_time }}
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
import dateFormatter from '~/aux-functions/dateFormatter'
// import filterOutOldDates from '~/aux-functions/filterOutOldDates'
export default {
  props: [
    // 'scheduledCourses',
    'courseDays',
    'courseTimes',
    'tableHeading',
    'courseType',
  ],
  data() {
    return { scheduledCourses: [] }
  },
  // computed: {
  //   scheduledCourses() {
  //     const coursesArray = []
  //     const eightDays = 691200000
  //     const now = Date.now()
  //     const eightDaysAgo = new Date(now - eightDays)
  //     this.$prismic.api
  //       .query([
  //         this.$prismic.predicates.dateAfter(
  //           'my.scheduled_courses.start_date',
  //           eightDaysAgo
  //         ),
  //       ])
  //       .then((response) => {
  //         response.results.forEach((course) => {
  //           course.start_date = dateFormatter(course.start_date)
  //           course.end_date = dateFormatter(course.end_date)
  //           coursesArray.push(course)
  //         })
  //       })
  //     return coursesArray
  //   },
  // },
  created() {
    console.log(this.courseType)
    console.log(this.scheduledCourses)
    const eightDays = 691200000
    const now = Date.now()
    const eightDaysAgo = new Date(now - eightDays)
    this.$prismic.api
      .query(
        [
          this.$prismic.predicates.dateAfter(
            'my.scheduled_courses.start_date',
            eightDaysAgo
          ),
          this.$prismic.predicates.at(
            'my.scheduled_courses.type',
            this.courseType
          ),
        ],
        {
          orderings: '[my.scheduled_courses.start_date]',
        }
        // this.$prismic.predicates.at(
        //   'my.scheduled_courses.course_type',
        //   this.courseType
        // ),
      )
      .then((response) => {
        console.log({ response })
        let i = 0
        response.results.forEach((course) => {
          course = course.data
          console.log({ course })
          // console.log(course.data.start_date)
          console.log('hello' + i)
          console.log('goodbye')
          i++
          course.start_date = dateFormatter(course.start_date)
          course.end_date = dateFormatter(course.end_date)
          this.scheduledCourses.push(course)
          console.log(this.scheduledCourses)
        })
      })
  },
  //   // milliseconds in 8 days
  //   const eightDays = 691200000
  //   const now = Date.now()
  //   const eightDaysAgo = new Date(now - eightDays)

  //   // https://prismic.nuxtjs.org/injected-kits
  //   // use this.$prismic inside of the export object
  //   // generally `Prismic` in prismic docs === `this.$prismic` in vue/nuxt

  //   // this.$prismic
  //   //   .getByUID('scheduled_course', [
  //   //     https://prismic.io/docs/technologies/query-content-from-cms-nuxtjs#use-cases
  //   this.$prismic.api
  //     .query([
  //       // this.$prismic.predicates.at('document.type', 'scheduled_courses'),
  //       // https://prismic.io/docs/technologies/rest-api-technical-reference#at
  //       // this.$prismic.predicates.at(
  //       //   'my.scheduled_course.course_type',
  //       //   this.courseType
  //       // ),
  //       // https://prismic.io/docs/technologies/rest-api-technical-reference#date-predicates
  //       this.$prismic.predicates.dateAfter(
  //         'my.scheduled_courses.start_date',
  //         eightDaysAgo
  //       ),
  //     ])
  //     .then((response) => {
  //       console.log(response)
  //       response.
  //       // this.scheduledCourses = response.results.map((course) => {
  //       //   course.start_date = dateFormatter(course.start_date)
  //       //   course.end_date = dateFormatter(course.end_date)
  //       //   return course
  //       // })
  //     })
  //     .catch((error) => console.log(error.message))
  //   // this.scheduledCourses = this.scheduledCourses
  //   //   .filter((course) => cou)
  //   // this.scheduledCourses.forEach((course) => {
  //   // })
  // },
}
</script>
