<template>
  <main>
    <HeaderSimpleCentered
      title="Capstone Projects"
      subtitle="Your own original full-stack web application"
      description="Placeholder for description text"
    />

    <CapstoneDisplay
      v-for="capstone in capstones"
      :key="capstone"
      :capstone="capstone"
    />

    <CTA
      title="About Capstones"
      description="The Capstone is a web application that touches on every major technology we cover at PDX Code Guild: Python, HTML, CSS, JavaScript, and Django.


      By completing a Capstone project, students create a software product from start to finish, learning each step of the software development lifecycle. Students use the knowledge they have learned throughout the course to create a polished end product.


      A finished Capstone provides both a practical application of web development concepts and skills, and is the perfect start to a professional development portfolio!"
      color="orange"
      cta="More About Our Courses"
      href="/courses"
    />
  </main>
</template>
<script>
const capstones = [
  {
    name: 'Storied',
    description:
      'Storied is a place for gaming enthusiasts of well-crafted Fantasy and Sci-Fi Stories. It was built with Vue.JS for the Front End, and a Django REST Framework API for the back-end.',
    student: 'Chris Roos',
    imageSrc: '/images/capstones/storied/storied.png',
  },
  {
    name: 'Fiber Amie',
    description:
      "Fiber Amie is a simple but effective knitting and crochet companion app. It's intended to be easy to use, accessible, and mobile-friendly. You can quickly look up yarn in your stash, see what needles or hooks you have, add projects and images, and use the built-in row counter to keep track of your spot in a pattern.",
    student: 'Aimee Young',
    imageSrc: '/images/capstones/fiber-amie/fiberamieprojectsdesktop.png',
  },
  {
    name: 'Vehicle Maintenance Logbook',
    description:
      'A web based vehicle maintenance logbook where users can track their vehicle(s) maintenance as well as get information about their vehicle with a VIN Decoder. Can be viewed from any web connected device; providing easily accessible records of any maintenance completed by the user or a professional shop and provides general recommendations for regular maintenance intervals. A useful tool for any car owner!',
    student: 'Mitch Chapman',
    imageSrc: '/images/capstones/vehicle-maintenance-logbook/image.png',
  },
  {
    name: 'Salieri',
    description:
      'Salieri is a music composition app that allows you to quickly write your own music as multi-track MIDI.  It was designed to be helpful and accessible to all kinds of users, from casual experimenters to seasoned musicians.  The ability to read sheet music or play an instrument is not required.',
    student: 'Logan Douglass',
    imageSrc: '/images/capstones/salieri/salfix2.png',
  },
]
export default {
  data() {
    return { capstones }
  },
  head: {
    title: 'PDX Code Guild | Capstones',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Capstone Gallery',
      },
    ],
  },
}
</script>
