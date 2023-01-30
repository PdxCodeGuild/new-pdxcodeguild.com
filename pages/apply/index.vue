<template>
  <main class="relative">
    <TailwindUIHeader1
      title="Ready to start your coding adventure?"
      img-src="images/orange/AlumniHackerspace.jpg"
      img-alt="Programmers gather at a long table to work and socialize."
      color-filter="orange"
      color-filter-weight="300"
      :center="true"
    />

    <div class="mt-6 pb-5 px-4 md:px-8 lg:mx-auto lg:w-2/3">
      <h3 class="text-lg lg:text-2xl leading-6 font-medium text-gray-900">
        Contact Form
      </h3>
      <p class="mt-2 max-w-4xl text-sm lg:text-base text-gray-500">
        Have questions about PDX Code Guild? Fill out this form and we will
        reach out to you.
      </p>
    </div>
    <Form />
    <div
      class="
        border-t border-gray-200
        mt-5
        leading-6
        text-gray-500 text-left text-xs
        px-4
        md:px-8
        lg:mx-auto
        lg:w-2/3
      "
    >
      <!-- <p class="mt-4">
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
      </p> -->
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
        content: 'Quick and Easy PDX Code Guild Application. Coding Bootcamp',
      },
    ],
  },
}
</script>
