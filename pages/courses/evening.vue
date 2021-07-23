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
  title: 'Full Stack Developer Evening Bootcamps',
  subtitle: 'This is a test for the subtitle',
  description: 'This is a test for the description',
}
const tableProps = {
  courseDays: 'Monday - Friday',
  courseTimes: '6:00 pm - 9:36 pm',
  scheduledCourses: [
    {
      startDate: 'Aug. 2, 2021',
      endDate: 'Dec. 17, 2021',
    },
    {
      startDate: 'Sept. 13, 2021',
      endDate: 'Feb. 4, 2021',
    },
  ],
  courseDescriptionHeader: 'Full Stack Developer Evening Bootcamps',
  tableHeading: 'Upcoming Evening Bootcamps',
}
// tableProps.scheduledCourses.forEach((course) => {
//   course.time = '6:00 pm - 9:36 pm'
//   course.days = 'M - F'
// })

const tuitionProps = {
  fullTuition: '17,600',
  needsBasedLow: '8,000',
  needsBasedHigh: '10,000',
}

/* new copy */
const courseConcepts = [
  { concept: 'Languages', areaOfStudy: 'HTML, CSS, JavaScript, Python' },
  {
    concept: 'Libraries and Frameworks',
    areaOfStudy:
      'Django, CSS Libraries(Bootstrap/Materialize/etc.), Pip Packages',
  },
  {
    concept: 'Tools',
    areaOfStudy:
      'Mac/Windows/Linux, Command Line, Text Editors/IDEs, Sqlite, Git CLI, GitHub, Ajax (Axios/Fetch), Promises, HTTP, REST APIs, Deployment/Heroku, Virtual Environments/Pipenv, DOM Manipulation',
  },
  {
    concept: 'Methodologies',
    areaOfStudy:
      'Responsive Design, Database Design/ORM, Object-Oriented Programming, Debugging/Dev Tools, Capstone/Project Planning, Reading and Searching Documentation',
  },
]

/* old copy */
// const courseConcepts = [
//   {
//     concept: 'General',
//     areaOfStudy:
//       'Procedural programming, Object oriented programming, Test Driven Development, Debugging, Unit Testing, Functional Testing, and UI Development',
//   },
//   {
//     concept: 'Python',
//     areaOfStudy:
//       'Python 3.6, Procedural Python, Object-oriented Python, Writing PEP8 compliant Python, The Python Standard Library, Using 3rd Party Modules',
//   },
//   {
//     concept: 'JavaScript',
//     areaOfStudy: 'Object-oriented JavaScript, DOM manipulation, ES6, jQuery',
//   },
//   {
//     concept: 'Systems',
//     areaOfStudy:
//       'Command line (Bash and Powershell), Filesystem Management and Layout, Python Dependency Management, Virtual Environments ',
//   },
//   { concept: 'Frontend', areaOfStudy: 'HTML, CSS' },
//   { concept: 'Python frameworks', areaOfStudy: 'Django 1.11' },
//   {
//     concept: 'Capstone',
//     areaOfStudy: 'Your own original full-stack web application',
//   },
//   { concept: 'Networks', areaOfStudy: 'Http Request, Deployment Ideas ' },
//   {
//     concept: 'Text Editors and IDE’s',
//     areaOfStudy: 'Atom Editor, PyCharm IDE, Visual Studio Code ',
//   },
//   {
//     concept: 'Source Control',
//     areaOfStudy: 'Using Git (Version Control), Using Github and Bitbucket ',
//   },
//   {
//     concept: 'Best Practices',
//     areaOfStudy: 'Writing documentation and good comments, Encapsulation ',
//   },
//   {
//     concept: 'Problem Solving Skills',
//     areaOfStudy:
//       'Writing pseudo code, Finding and using documentation, Discerning what’s useful on the internet and applying it, White Boarding, The Web Developer and Inspector Tools ',
//   },
// ]

export default {
  components: { CourseDetail },
  layout: 'courses',
  data() {
    return { headerProps, tableProps, tuitionProps, courseConcepts }
  },
  head: {
    title: 'PDX Code Guild | Full Stack Developer Bootcamp: Evening',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'PDX Code Guild Full Stack Developer Bootcamp.  Part-Time Evening Classes 6:00 pm - 9:36 pm.  Python, JavaScript, HTML, CSS & Django',
      },
    ],
  },
}
</script>
