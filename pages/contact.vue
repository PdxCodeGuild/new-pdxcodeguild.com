<template>
  <div>
    <Contact />
    <CTA
      title="Want to Learn Web Development?"
      description="We're just a phone call or email away!"
      color="orange"
      cta="Call Us"
      href="tel:+15034448836"
      cta-alt="Email Us"
      href-alt="mailto:admissions@pdxcodeguild.com"
    />
  </div>
</template>
<script>
export default {
  head: {
    title: 'PDX Code Guild | Contact',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'An Advisor/School Certifying Official is standing by to answer any questions you may have. We are just a phone call or email away.',
      },
    ],
  },
}
</script>
