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
// import { eveningCourses } from '~/data/schedule.json'
import CourseDetail from '~/components/courses/CourseDetail.vue'
const headerProps = {
  title: 'Full Stack Developer Evening Bootcamps',
  // title: 'Evening Python/JavaScript Web Developer Bootcamp',
  subtitle: 'Become a web developer',
  description:
    'New choices of hours for evening bootcamps! In addition to 6 pm - 9: 36 pm, we now have bootcamp offered at 3 pm-6:36 pm PST (6 pm-9:36 pm EST) The first date with the earlier hours is July 25th, 2022. \nBreak into tech.  Learn Python, JavaScript, HTML, CSS.  Finish with a full stack capstone project built in Django. Our cohorts are taught by licensed instructors.',
}

// // milliseconds in 8 days
// const eightDays = 691200000
// const now = Date.now()

const tableProps = {
  //   courseDays: 'Monday - Friday',
  //   courseTimes: '6:00 pm - 9:36 pm',
  //   scheduledCourses: eveningCourses.filter(
  //     (course) => now - new Date(course.start) <= eightDays
  //   ),
  // courseDescriptionHeader: 'Full Stack Developer Evening Bootcamps',
  courseType: 'evening',
  tableHeading: 'Upcoming Evening Bootcamps',
}

const tuitionProps = {
  fullTuition: '24,600',
  needsBasedLow: '8,000',
  needsBasedHigh: '10,000',
}

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

const additionalInfoStats = [
  {
    name: 'Official course name',
    stat: 'Evening Python/JavaScript Web Developer Bootcamp',
  },
  {
    name: 'Also listed with the VA as',
    stat: '18-week Python-Based Developer Bootcamp',
  },
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
