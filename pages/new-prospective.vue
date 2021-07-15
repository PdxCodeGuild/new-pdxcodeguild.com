<template>
  <main class="lg:h-screen">
    <Nav scroll-snap="true" />
    <ProspectiveHeader
      title="Prospective Students"
      img-src="images/orange/StudentsConcentrating.jpg"
      img-alt="TODO"
      color-filter="orange"
      color-filter-weight="500"
    />
    <WhoIsThisProgramRightFor />
    <EnrollmentProcess />
    <Students />
    <WhatWillILearn />
    <Alumni />
    <Footer scroll-snap="true" />
  </main>
</template>
<script>
import ProspectiveHeader from '~/components/prospective/ProspectiveHeader.vue'
import WhoIsThisProgramRightFor from '~/components/prospective/WhoIsThisProgramRightFor.vue'
import EnrollmentProcess from '~/components/prospective/EnrollmentProcess.vue'
import Students from '~/components/prospective/Students.vue'
import WhatWillILearn from '~/components/prospective/WhatWillILearn.vue'
import Alumni from '~/components/prospective/Alumni.vue'

export default {
  components: {
    ProspectiveHeader,
    WhoIsThisProgramRightFor,
    Students,
    WhatWillILearn,
    EnrollmentProcess,
    Alumni,
  },
  layout: 'prospective',
  head: {
    title: 'PDX Code Guild | Prospective Students',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          "PDX Code Guild Course Information, Enrollment Information, Veteran's Benefits & More.  Coding Bootcamps. Programming Bootcamps. Portland Coding Bootcamps. Online Coding Bootcamps.",
      },
    ],
  },
}
</script>
<style>
/* SCROLL SNAP */
/* https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp
@media (min-width: 1280px) {
  Hide scrollbar for Chrome, Safari and Opera
  body::-webkit-scrollbar {
    display: none;
  }

  Hide scrollbar for IE, Edge and Firefox
  body {
    -ms-overflow-style: none; IE and Edge
    scrollbar-width: none; Firefox
  }
} */
</style>
<style scoped>
/* SCROLL SNAP */
/* @media (min-width: 1280px) {
  main {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  }
  main >>> .scroll-snap-child {
    scroll-snap-align: start;
  }
  main >>> .scroll-snap-last-child {
    scroll-snap-align: end;
  }
} */
/* main {
  scroll-behavior: smooth;
} */
</style>
