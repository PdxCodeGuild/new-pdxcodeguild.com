<template>
  <CourseDetail
    :header-props="headerProps"
    :table-props="tableProps"
    :tuition-props="tuitionProps"
    :course-concepts="courseConcepts"
  />
</template>

<script>
import CourseDetail from '~/components/courses/CourseDetail.vue'
const headerProps = {
  title: 'Advanced JavaScript Bootcamps',
  subtitle: 'Take your skills to the next level',
  description:
    'Learn the MERN stack: Mongo, Express, React & Node.  Build another portfolio project and reach new coding heights.',
}

const tableProps = {
  courseDays: 'Monday - Friday',
  courseTimes: '6:00 pm - 9:36 pm',
  scheduledCourses: [
    {
      startDate: 'Oct. 4, 2021',
      endDate: 'Dec. 23, 2021',
    },
  ],
  courseDescriptionHeader: 'Full Stack Web Development with Node and React',
  tableHeading: 'Upcoming Advanced JS Bootcamps',
}

const tuitionProps = {
  fullTuition: '11,500',
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

export default {
  components: { CourseDetail },
  layout: 'courses',
  data() {
    return { headerProps, tableProps, tuitionProps, courseConcepts }
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
}
</script>
