<template>
  <main>
    <CoursesHeader
      :mt-hood-bg="true"
      title="Your own original full-stack web application"
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
export default {
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
