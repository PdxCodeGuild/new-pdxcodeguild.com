<template>
  <CourseDetail
    :table-props="tableProps"
    :tuition-props="tuitionProps"
    :course-concepts="courseConcepts"
  />
</template>
<script>
import CourseDetail from '~/components/courses/CourseDetail.vue'
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
  courseDescriptionTable: 'Upcoming Node and React Bootcamps',
}
tableProps.scheduledCourses.forEach((course) => {
  course.time = '6:00 pm - 9:36 pm'
  course.days = 'M - F'
})

const tuitionProps = {
  fullTuition: '11,500',
  needsBasedLow: '7,500',
  needsBasedHigh: '8,000',
}

/* new copy */
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

/* old copy */
// const courseConcepts = [
//   {
//     concept: 'Intermediate functional programming in ES5/ES6',
//     areaOfStudy:
//       'Functional programming, Destructuring and rest parameters, Asynchrony, Discuss prevalent frameworks and libraries and why we chose the MERN stack',
//   },
//   {
//     concept: 'Get React running using Create React App (CRA)',
//     areaOfStudy:
//       'Connect earlier lessons with React environment, Discuss benefits of small reusable components, Discuss state; props and rendering, Classes vs. Presentational components, Single page applications, Forms in React ',
//   },
//   {
//     concept: 'Beginner server-side concepts with Node.js',
//     areaOfStudy:
//       'Basic request-response, client-server concepts, Application architecture, Async I/O, Abstracting and chaining callbacks ',
//   },
//   {
//     concept: 'Node Express with MongoDB',
//     areaOfStudy:
//       'API construction, Connect our client (React) with our server (Node Express), Discuss fetch and how it works with API endpoints, Error-handling discussion with examples, Cover database concepts using Mongoose',
//   },
//   {
//     concept: 'Build features towards final project',
//     areaOfStudy:
//       'Project management (Agile), High level web application architecture, lan, design and implement a full stack project that demonstrates an understanding of all the topics covered',
//   },
// ]

export default {
  components: { CourseDetail },
  layout: 'courses',
  data() {
    return { tableProps, tuitionProps, courseConcepts }
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
