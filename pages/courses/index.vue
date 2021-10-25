<template>
  <main>
    <HeaderSimpleCentered
      title="Courses"
      subtitle="PDX Code Guild Developer Bootcamps"
    />
    <CovidNote />
    <Courses :courses="courses" />
    <section class="px-4 lg:px-16 lg:grid lg:grid-cols-2">
      <article class="prose prose-orange">
        <h3>Cost &amp; Financial Aid</h3>
        <p>
          PDX Code Guild works with a variety of organizations to provide
          financial aid for our students. Over half of our students have
          qualified for partial financial aid through the organizations we
          partner with.
        </p>
        <p>
          Because the criteria our partners use differ from organization to
          organization, we encourage you to complete your application as soon as
          possible so that our partners can start working with you.
        </p>
        <p>
          PDX Code Guild also offers a limited number of diversity discounts per
          class, based on merit and need, to women, people of color and people
          who are LGBTQ.
          <nuxt-link to="/financial-aid">Learn More.</nuxt-link>
        </p>

        <h3>* Licensure</h3>
        <p>
          The Full Stack Day, Full Stack Evening, and Advanced JavaScript
          courses are all licensed by Oregon's
          <a href="https://www.oregon.gov/highered/Pages/index.aspx"
            >Higher Education Coordinating Commission</a
          >.
        </p>
      </article>
      <article class="prose prose-orange">
        <h3>Resources, Equipment &amp; Facilities</h3>
        <p>
          PDX Code Guild is conveniently located in Portland's historic Kerns
          Neighborhood, a stone's throw from the city center. We are right off
          the highway and in walking distance of a public park, two climbing
          gyms, and plenty of coffee shops, restaurants, and donut shops.
        </p>
        <p>
          Public transportation to and from PDX Code Guild is convenient, as the
          classroom is located within a few blocks of bus, train, and streetcar
          stops. Free parking is available in our parking lot. Indoor bicycle
          storage is available.
        </p>
        <p>
          The PDX Code Guild classroom is set up with individual workstations,
          as well as places to practice white-boarding or relax on a comfy
          couch.
        </p>
        <p>
          Our large event space is set up with a whiteboard, projector and a
          large-screen TV are used for weekly tech meetups and community
          presentations.
        </p>
        <p>
          Students have access to a kitchen with a refrigerator to store their
          lunches and snacks in, a microwave, tables to eat at and a coffee
          maker.
        </p>
      </article>
    </section>
  </main>
</template>
<script>
// import {
//   dayCourses,
//   eveningCourses,
//   advancedCourses,
// } from '~/data/schedule.json'
import dateFormatter from '~/aux-functions/dateFormatter'

import Courses from '~/components/courses/Courses.vue'

// milliseconds in 8 days
// const eightDays = 691200000
// const now = Date.now()

// const nextDayCourse = dayCourses
//   .filter((course) => now - new Date(course.start_date) <= eightDays)[0]
//   .start.split(', ')[0]

// const nextEveningCourse = eveningCourses
//   .filter((course) => now - new Date(course.start_date) <= eightDays)[0]
//   .start.split(', ')[0]

// const nextAdvancedCourse = advancedCourses
//   .filter((course) => now - new Date(course.start_date) <= eightDays)[0]
//   .start.split(', ')[0]

const courses = [
  {
    name: 'Programming 101/102',
    description:
      'Programming 101/102 starts with the fundamentals of programming.  Absolute beginners are welcome here.  This course is a prerequisite to the other bootcamps.',
    imgSrc: '/images/coursecards/talking.jpg',
    imgAlt: 'PDX Code Guild Lounge Area',
    href: '/programming-101',
    stack: 'Python',
    nextCourse: 'Every 2 weeks',
    buttonText: 'Programming 101/102',
    info: ['2 weeks', 'Beginner friendly', 'Python', 'Evenings'],
    101: true,
  },
  {
    name: 'Full Stack Day',
    description:
      'This is the course.  Transform yourself into a web developer.  Learn and practice over months with a small group of students and teachers.',
    imgSrc: '/images/coursecards/laugh.jpg',
    imgAlt: 'PDX Code Guild Classroom',
    href: '/courses/day',
    stack: 'Python, JavaScript, HTML, CSS, Django',
    nextCourse: null,
    buttonText: 'Day Courses',
    info: [
      '14 weeks',
      'Full time',
      'Days',
      'Python & JavaScript',
      'HTML & CSS',
      'Django',
      'Licensed *',
    ],
  },
  {
    name: 'Full Stack Evening',
    description:
      'Like the Full Stack Day course, but designed for students busy during the day.  Learn the same concepts and technologies with our excellent evening instructors.',
    imgSrc: '/images/coursecards/couch.jpg',
    imgAlt: 'PDX Code Guild Lounge Area',
    href: '/courses/evening',
    stack: 'Python, JavaScript, HTML, CSS, Django',
    nextCourse: null,
    buttonText: 'Evening Courses',
    info: [
      '18 weeks',
      'Part time',
      'Evenings',
      'Python & JavaScript',
      'HTML & CSS',
      'Django',
      'Licensed *',
    ],
  },
  {
    name: 'Advanced JavaScript',
    description:
      'Our Advanced JavaScript course is for graduates of our Full Stack Bootcamps.  Take your web development skills to the next level learning the MERN stack.',
    imgSrc: '/images/coursecards/startup.jpg',
    imgAlt: 'Laptop and Notepad',
    href: '/courses/advanced-js',
    stack: 'Mongo, Express, Node, React',
    nextCourse: null,
    buttonText: 'Advanced Courses',
    info: [
      '11 weeks',
      'Part time',
      'Evenings',
      'MongoDB',
      'Express',
      'Node',
      'React',
      'Licensed *',
    ],
  },
]

export default {
  components: { Courses }, // CoursesFeatures }, // NewCourseCards },
  layout: 'courses',
  data() {
    return { courses }
  },
  head: {
    title: 'PDX Code Guild | Courses',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'PDX Code Guild Full Time Day & Part Time Evening Bootcamps.  Python, JavaScript, HTML, CSS, Django, Node & React. Coding Bootcamps. Programming Bootcamps. Portland Coding Bootcamps. Online Coding Bootcamps',
      },
    ],
  },
  created() {
    const courseInfo = [
      { type: 'day', index: 1 },
      { type: 'evening', index: 2 },
      { type: 'advanced', index: 3 },
    ]
    const eightDays = 691200000
    const now = Date.now()
    const eightDaysAgo = new Date(now - eightDays)

    courseInfo.forEach((course) => {
      this.$prismic.api
        .query(
          [
            this.$prismic.predicates.dateAfter(
              'my.scheduled_courses.start_date',
              eightDaysAgo
            ),
            this.$prismic.predicates.at(
              'my.scheduled_courses.course_type',
              course.type
            ),
          ],
          {
            orderings: '[my.scheduled_courses.start_date]',
            pageSize: 100,
          }
        )
        .then((response) => {
          this.courses[course.index].nextCourse = dateFormatter(
            response.results[0].data.start_date
          )
          // response.results.forEach((course) => {
          //   course = course.data
          //   course.start_date = dateFormatter(course.start_date)
          //   course.end_date = dateFormatter(course.end_date)
          //   this.scheduledCourses.push(course)
          // })
        })
    })
  },
}
</script>
