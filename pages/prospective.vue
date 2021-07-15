<template>
  <main class="lg:h-screen">
    <Nav scroll-snap="true" />
    <!-- <PageHeader header-text="Prospective Students" /> -->
    <TailwindUIHeader2
      title="Prospective Students"
      img-src="images/grayscale/StudentsConcentrating.jpg"
      img-alt="TODO"
      color-filter="orange"
      color-filter-weight="500"
    />
    <TailwindUIHeader2
      title="Prospective Students"
      img-src="images/orange/StudentsConcentrating.jpg"
      img-alt="TODO"
      color-filter="orange"
      color-filter-weight="500"
    />
    <WhoIsThisProgramRightFor />
    <hr />
    <EnrollmentProcess ref="enrollment" />
    <hr />
    <Veterans />
    <hr />
    <WhatIsThePath1 />
    <hr />
    <WhatIsThePath2 />
    <hr />
    <WhatWillILearn />
    <hr />
    <WhyPDXCodeGuild />
    <Footer scroll-snap="true" />
  </main>
</template>
<script>
import WhoIsThisProgramRightFor from '~/components/prospective/WhoIsThisProgramRightFor.vue'
import EnrollmentProcess from '~/components/prospective/EnrollmentProcess.vue'
import Veterans from '~/components/prospective/Veterans.vue'
import WhatIsThePath1 from '~/components/prospective/WhatIsThePath1.vue'
import WhatIsThePath2 from '~/components/prospective/WhatIsThePath2.vue'
import WhatWillILearn from '~/components/prospective/WhatWillILearn.vue'
import WhyPDXCodeGuild from '~/components/prospective/WhyPDXCodeGuild.vue'
export default {
  components: {
    WhoIsThisProgramRightFor,
    EnrollmentProcess,
    Veterans,
    WhatIsThePath1,
    WhatIsThePath2,
    WhatWillILearn,
    WhyPDXCodeGuild,
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
  mounted() {
    // console.log(this.$refs.enrollment.$el)
    // const enrollment = this.$refs.enrollment.$el
    // Window.scrollTo({
    //   x: enrollment.getClient
    // })
    // this.$refs.enrollment.$el.scrollTo()
  },
}
</script>
<style>
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
</style>
