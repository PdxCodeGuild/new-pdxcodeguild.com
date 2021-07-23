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
  subtitle: 'Become a web developer',
  description:
    'Break into tech.  Learn Python, JavaScript, HTML, CSS.  Finish with a full stack capstone project built in Django.',
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
  tableHeading: 'Upcoming Day Bootcamps',
}

const tuitionProps = {
  fullTuition: '18,400',
  needsBasedLow: '8,500',
  needsBasedHigh: '16,400',
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
