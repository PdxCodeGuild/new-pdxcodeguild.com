<template>
  <main class="relative">
    <!-- <PageHeader
      pre-header-text="We're here for you"
      header-text="Drop us a line."
      post-header-text="Let us know how we can help!"
    /> -->
    <TailwindUIHeader1
      title="Get Started"
      subtitle="If you're ready to apply, we'll send you the official application and
        invite you to an informal interview. If you'd like more information
        first, simply put a note in the last field."
      img-src="images/grayscale/Frog.jpg"
    />

    <!-- <div class="pt-10 relative mx-auto lg:w-6/12 px-2 md:px-8">
      <p class="mt-4 max-w-2xl lg:mx-auto text-gray-500">
        If you're ready to apply, we'll send you the official application and
        invite you to an informal interview. If you'd like more information
        first, simply put a note in the last field.
      </p>
    </div> -->

    <div
      class="
        mt-6
        pb-5
        border-b border-gray-200
        px-4
        md:px-8
        lg:mx-auto
        lg:w-2/3
      "
    >
      <h3 class="text-lg lg:text-2xl leading-6 font-medium text-gray-900">
        PDX Code Guild Application
      </h3>
      <p class="mt-2 max-w-4xl text-sm lg:text-base text-gray-500">
        If you're ready to apply, we'll send you the official application and
        invite you to an informal interview. If you'd like more information
        first, simply put a note in the last field.
      </p>
    </div>
    <Form />
    <div
      class="
        border-t border-gray-200
        mt-5
        leading-6
        text-gray-500 text-center text-xs
        px-4
        md:px-8
        lg:mx-auto
        lg:w-2/3
      "
    >
      <p class="mt-4">
        GI Bill® is a registered trademark of the U.S. Department of Veterans
        Affairs (VA). More information about education benefits offered by VA is
        available at the official U.S. government Web site at
        <a
          href="https://www.benefits.va.gov/gibill"
          class="text-orange"
          target="_blank"
          rel="noreferrer noopener"
          >https://www.benefits.va.gov/gibill</a
        >
        .
      </p>
      <p class="mt-5">
        PDX Code Guild does not discriminate on the basis of race, creed, color,
        ethnicity, national origin, religion, sex, sexual orientation, gender
        expression, age, height, weight, physical or mental ability, veteran
        status, military obligations, and marital status.
      </p>
    </div>
  </main>
</template>
<script>
export default {
  head: {
    title: 'PDX Code Guild | Apply',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Quick and Easy PDX Code Guild Application. GI Bill VetTec Coding Bootcamp',
      },
    ],
  },
}
</script>
