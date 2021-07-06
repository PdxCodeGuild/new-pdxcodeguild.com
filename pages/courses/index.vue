<template>
  <main>
    <PageHeader header-text="PDX Code Guild Courses" />
    <!-- <CoursesHeader
      title="PDX Code Guild Courses"
      :center="true"
      :mt-hood-bg="true"
    /> -->

    <CoursesFeatures />

    <CTA
      title="With both full-time day and part-time evening bootcamps, we have a program to fit your schedule."
      description="Already know programming? Want to dive deeper? The Advanced JavaScript and Advanced Portfolio classes are accepting applications. These classes will fill fast - apply now!"
      color="orange"
      cta="Take the Free 101/102 Course"
      href="https://www.eventbrite.com/o/pdx-code-guild-17959456298"
      cta-alt="Contact Us"
      href-alt="/contact"
    />
    <!-- TODO: note these are placeholders -->
    <div
      class="
        max-w-7xl
        mx-auto
        sm:px-6
        lg:px-8
        md:grid md:grid-cols-2
        md:
        gap-11
        my-2
        justify-around
      "
    >
      <!-- <CourseCard
        v-for="(course, i) in courses"
        :key="i"
        :title="course.title"
        :description="course.description"
        :img-src="course.imgSrc"
        :read-more-href="course.readMoreHref || '#'"
        :apply-href="course.applyHref || '#'"
        :more-link="course.more"
      /> -->
    </div>
    <NewCourseCards :courses="courses" />
    <courses-header title="Cost & Financial Aid">
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
      title="Resources, Equipment & Facilities"
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
import CoursesHeader from '~/components/courses/CoursesHeader.vue'
import CoursesFeatures from '~/components/courses/CoursesFeatures.vue'
// import CourseCard from '~/components/courses/CourseCard.vue'
import NewCourseCards from '~/components/courses/NewCourseCards.vue'
// TODO: better copy for imgAlt text
const courses = [
  {
    title: 'Full-Stack Developer BootCamp: Day',
    description:
      'This full time, 14 week, Python-based developer bootcamp is an immerse, hands on way to launch your tech career.',
    imgSrc: '/images/coursecards/laugh.jpg',
    imgAlt: 'PDX Code Guild Classroom',
    link: '/courses/day',
    stack: 'Python, JavaScript, HTML, CSS, Django',
  },
  {
    title: 'Full-Stack Developer Bootcamp: Evening',
    description:
      'This part time, 18 week, Python developer bootcamp is a splendid way to learn programming while keeping your day gig.',
    imgSrc: '/images/coursecards/couch.jpg',
    imgAlt: 'PDX Code Guild Lounge Area',
    link: '/courses/evening',
    stack: 'Python, JavaScript, HTML, CSS, Django',
  },
  {
    title: 'Advanced JavaScript - React and Node',
    description:
      'This course is the perfect way to take a deeper dive into Javascript with React and Node!',
    imgSrc: '/images/coursecards/startup.jpg',
    imgAlt: 'Laptop and Notepad',
    link: '/courses/advanced-js',
    stack: 'Mongo, Express, Node, React',
  },
  {
    title: 'Intro to Programming',
    description:
      'Intro to Programming is a great way to dip your toe into programming and learn the basic fundamentals through Python',
    imgSrc: '/images/coursecards/talking.jpg',
    imgAlt: 'PDX Code Guild Lounge Area',
    link: '/programming-101',
    stack: 'Python',
  },
]

export default {
  components: { CoursesHeader, CoursesFeatures, NewCourseCards },
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
