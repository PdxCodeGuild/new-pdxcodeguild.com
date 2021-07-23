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
  title: 'Full Stack Developer Day Bootcamps',
  subtitle: 'This is a test for the subtitle',
  description: 'This is a test for the description',
}
const tableProps = {
  courseDays: 'Monday - Friday',
  courseTimes: '9:30 am - 4:30 pm',
  scheduledCourses: [
    {
      startDate: 'July 6, 2021',
      endDate: 'Nov. 5, 2021',
    },
    {
      startDate: 'Sept. 7, 2021',
      endDate: 'Dec. 17, 2021',
    },
    {
      startDate: 'Oct. 4, 2021',
      endDate: 'Jan. 14, 2022',
    },
    {
      startDate: 'Nov. 15, 2021',
      endDate: 'Feb. 25, 2022',
    },
  ],
  courseDescriptionHeader: 'Full Stack Developer Day Bootcamps',
  tableHeading: 'Upcoming Day Bootcamps',
}
// tableProps.scheduledCourses.forEach((course) => {
//   course.time = '9:30 am - 4:30 pm'
//   course.days = 'M - F'
// })

const tuitionProps = {
  fullTuition: '18,400',
  needsBasedLow: '8,500',
  needsBasedHigh: '16,400',
}

/* new copy */
const courseConcepts = [
  { concept: 'Languages', areaOfStudy: 'HTML, CSS, JavaScript, Python' },
  {
    concept: 'Libraries and Frameworks',
    areaOfStudy:
      'Django, Vue, CSS Libraries(Bootstrap/Materialize/etc.), Pip Packages',
  },
  {
    concept: 'Tools',
    areaOfStudy:
      'Mac/Windows/Linux, Command Line, Text Editors/IDEs, Sqlite, Git CLI, GitHub, Ajax (Axios/Fetch), Promises, HTTP, REST APIs, Deployment/Heroku, Virtual Environments/Pipenv, DOM Manipulation',
  },
  {
    concept: 'Methodologies',
    areaOfStudy:
      'Responsive Design, Database Design/ORM, Object-Oriented Programming, Data Structures, Algorithms, Programming Paradigms, Debugging/Dev Tools, Capstone/Project Planning, Reading and Searching Documentation',
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
    title: 'PDX Code Guild | Full Stack Developer Bootcamp: Day',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'PDX Code Guild Full Stack Developer Bootcamp.  Full-Time Day Classes 9:30 am - 4:30 pm.  Python, JavaScript, HTML, CSS, Django & Vue',
      },
    ],
  },
}
</script>
