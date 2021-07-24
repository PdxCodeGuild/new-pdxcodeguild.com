<template>
  <main>
    <HeaderSimpleCentered
      title="Courses"
      subtitle="PDX Code Guild Developer Bootcamps"
      description="Until further notice, every bootcamp at PDX Code Guild will be remote.  Attend classes virtually."
    />
    <!-- <CoursesFeatures /> -->
    <Courses :courses="courses" />
    <courses-header title="Cost &amp; Financial Aid">
      <p>
        PDX Code Guild works with a variety of organizations to provide
        financial aid for our students. Over half of our students have qualified
        for partial financial aid through the organizations we partner with.
      </p>
      <br />
      <p>
        Because the criteria our partners use differ from organization to
        organization, we encourage you to complete your application as soon as
        possible so that our partners can start working with you.
      </p>
      <br />
      <p>
        PDX Code Guild also offers a limited number of diversity discounts per
        class, based on merit and need, to women, people of color and people who
        are LGBTQ.
        <a href="#" class="text-orange-300 font-extrabold">Learn More.</a>
      </p>
    </courses-header>

    <courses-header
      title="Resources, Equipment &amp; Facilities"
      text-color="text-white"
      bg-color="bg-orange-500"
    >
      <p>
        PDX Code Guild is conveniently located in the heart of Portland’s
        innovation corridor, between Portland State University, OHSU, and the
        Portland State University Business Accelerator.
      </p>
      <br />
      <p>
        Public transportation to and from PDX Code Guild is convenient, as the
        classroom is located within a few blocks of bus, train, and streetcar
        stops. Free parking is available in a parking lot at the back of the
        building. There is free parking after 4pm on the street. Indoor bicycle
        storage is available. There are restaurants and food cart pods within
        walking distance.
      </p>
      <br />
      <p>
        The PDX Code Guild classroom is set up with individual workstations, as
        well as places to practice white-boarding or relax on a comfy couch.
      </p>
      <br />
      <p>
        Our large event space is set up with a whiteboard, projector and a
        large-screen TV are used for weekly tech meetups and community
        presentations.
      </p>
      <br />
      <p>
        Students have access to a kitchen with a refrigerator to store their
        lunches and snacks in, a microwave, tables to eat at and a coffee maker.
      </p>
    </courses-header>
  </main>
</template>
<script>
import Courses from '~/components/courses/Courses.vue'
// import CoursesFeatures from '~/components/courses/CoursesFeatures.vue'
// import NewCourseCards from '~/components/courses/NewCourseCards.vue'
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
    nextCourse: 'July 26',
    buttonText: 'Day Courses',
    info: [
      '14 weeks',
      'Full time',
      'Days',
      'Python & JavaScript',
      'HTML & CSS',
      'Django',
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
    nextCourse: 'Sep. 13',
    buttonText: 'Evening Courses',
    info: [
      '18 weeks',
      'Part time',
      'Evenings',
      'Python & JavaScript',
      'HTML & CSS',
      'Django',
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
    nextCourse: 'Oct. 4',
    buttonText: 'Advanced Courses',
    info: [
      '11 weeks',
      'Part time',
      'Evenings',
      'MongoDB',
      'Express',
      'Node',
      'React',
    ],
  },
]
console.log(process.env)
console.log(process.env.NODE_ENV)
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
}
</script>
