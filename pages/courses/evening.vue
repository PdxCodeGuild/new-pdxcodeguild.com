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
  subtitle: 'Become a web developer',
  description:
    'Break into tech.  Learn Python, JavaScript, HTML, CSS.  Finish with a full stack capstone project built in Django.',
}

const tableProps = {
  courseDays: 'Monday - Friday',
  courseTimes: '6:00 pm - 9:36 pm',
  scheduledCourses: [
    {
      startDate: 'Sept. 13, 2021',
      endDate: 'Feb. 4, 2021',
    },
  ],
  courseDescriptionHeader: 'Full Stack Developer Evening Bootcamps',
  tableHeading: 'Upcoming Evening Bootcamps',
}

const tuitionProps = {
  fullTuition: '17,600',
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
