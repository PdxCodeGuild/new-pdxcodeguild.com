<template>
  <CourseDetail
    :header-props="headerProps"
    :table-props="tableProps"
    :tuition-props="tuitionProps"
    :course-concepts="courseConcepts"
    :additional-info-stats="additionalInfoStats"
  />
</template>

<script>
// import { advancedCourses } from '~/data/schedule.json'
import CourseDetail from '~/components/courses/CourseDetail.vue'
const headerProps = {
  title: 'Advanced JavaScript Bootcamps',
  subtitle: 'Take your skills to the next level',
  description:
    'Learn the MERN stack: Mongo, Express, React & Node.  Build another portfolio project and reach new coding heights.',
}

// milliseconds in 8 days
// const eightDays = 691200000
// const now = Date.now()

const tableProps = {
  courseDays: 'Monday - Friday',
  // courseTimes: '6:00 pm - 9:36 pm',
  // scheduledCourses: advancedCourses.filter(
  //   (course) => now - new Date(course.start) <= eightDays
  // ),
  courseType: 'advanced',
  courseDescriptionHeader: 'Full Stack Web Development with Node and React',
  tableHeading: 'Upcoming Advanced JS Bootcamps',
}

const tuitionProps = {
  fullTuition: '15,700',
  needsBasedLow: '7,500',
  needsBasedHigh: '8,000',
}

const courseConcepts = [
  { concept: 'Languages', areaOfStudy: 'Javascript, JSX' },
  {
    concept: 'Libraries and Frameworks',
    areaOfStudy:
      'Node/npm, Express, React, Mongo/Mongoose, Socket.io, React Router',
  },
  {
    concept: 'Tools',
    areaOfStudy:
      'Command Line, HTTP, REST APIs, Web Sockets, Deployment via Heroku, NoSQL databases (Mongo)',
  },
  {
    concept: 'Methodologies',
    areaOfStudy:
      'Single Page Applications (SPAs), Functional Programming (closures, higher-order functions), Testing and Test-Driven Development, Agile/Scrum in a team setting (group projects), Asynchronous Event-Driven Architectures',
  },
]

const additionalInfoStats = [
  {
    name: 'Official course name',
    stat: 'Advanced Node & React Fullstack Bootcamp',
  },
  {
    name: 'Prerequisite',
    stat: 'Successful Completion of Day or Evening Fullstack Bootcamp',
  },
]

export default {
  components: { CourseDetail },
  layout: 'courses',
  data() {
    return {
      headerProps,
      tableProps,
      tuitionProps,
      courseConcepts,
      additionalInfoStats,
    }
  },
  head: {
    title: 'PDX Code Guild | Advanced JavaScript Bootcamp: React & Node',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'PDX Code Guild Advanced JavaScript Bootcamp.  Part-Time Evening Classes 6:00 pm - 9:36 pn.  JavaScript, Mongo, Express, Node & React',
      },
    ],
  },
  created() {
    this.$prismic.api.query('').then((response) => {
      const courses = response.results
        .map((course) => course.data)
        .filter((course) => course.type === 'advanced')
      this.tableProps.scheduledCourses = courses
    })
  },
}
</script>
