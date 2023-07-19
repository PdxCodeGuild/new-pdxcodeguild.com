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
// import { dayCourses } from '~/data/schedule.json'
import CourseDetail from '~/components/courses/CourseDetail.vue'
const headerProps = {
  title: 'Full Stack Developer Day Bootcamps',
  subtitle: 'Become a web developer',
  description:
    'Break into tech.  Learn Python, JavaScript, HTML, CSS.  Finish with a full stack capstone project built in Django. Our cohorts are taught by licensed instructors.',
}

// milliseconds in 8 days
// const eightDays = 691200000
// const now = Date.now()

const tableProps = {
  // courseDays: 'Monday - Friday',
  // courseTimes: '9:30 am - 4:30 pm',
  // scheduledCourses: dayCourses.filter(
  //   (course) => now - new Date(course.start) <= eightDays
  // ),
  tableHeading: 'Upcoming Day Bootcamps',
  courseType: 'day',
}

const tuitionProps = {
  fullTuition: '24,400',
  needsBasedLow: '8,500',
  needsBasedHigh: '18,000',
}

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

const additionalInfoStats = [
  {
    name: 'Official course name',
    stat: 'Fulltime Python/JavaScript Fullstack Developer Bootcamp',
  },
  // {
  //   name: 'Also listed with the VA as',
  //   stat: '14-week Python-Based developer bootcamp',
  // },
  {
    name: 'Prerequisite',
    stat: 'Successful Completion of Programming 101/102',
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
  created() {
    this.$prismic.api.query('').then((response) => {
      const courses = response.results
        .map((course) => course.data)
        .filter((course) => course.type === 'day')
      this.tableProps.scheduledCourses = courses
    })
  },
}
</script>
