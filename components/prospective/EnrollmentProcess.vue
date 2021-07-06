<template>
  <section
    id="enrollment-process"
    class="
      relative
      bg-white
      lg:min-h-screen
      xl:flex xl:flex-col
      xl:justify-between
      scroll-snap-child
    "
  >
    <ProspectiveHeading2
      imperative="Start learning today!"
      title="Enrollment is easy"
      description="Our simple two-step enrollment process wil get you started quickly."
    />
    <div class="relative bg-white mt-20">
      <dl
        class="
          space-y-10
          md:space-y-0
          md:grid md:grid-cols-2
          md:gap-x-8 md:gap-y-10
          sm:grid sm:grid-cols-1
          px-10
          lg:w-10/12
          lg:mx-auto
        "
      >
        <div class="relative">
          <div
            class="
              absolute
              flex
              items-center
              justify-center
              h-12
              w-12
              rounded-md
              bg-orange-500
              text-white text-4xl
            "
          >
            1
          </div>
          <dt>
            <p class="ml-16 mt-3 text-2xl leading-6 font-medium text-gray-900">
              Interview
            </p>
          </dt>
          <dd class="mt-5 ml-16 text-base text-gray-500">
            <p class="mt-10">
              We always strive for the one-on-one experience, that’s why we
              individually interview every student that goes through our course.
            </p>

            <p class="mt-4">
              To ensure our students have all of their questions answered and
              they are ready for the commitment it takes to be successful, each
              applicant will meet with an advisor to review their individualized
              needs and goals.
            </p>

            <p class="mt-4">
              This is also a great opportunity for applicants to tour the
              school, see a class in action and meet members of the community.
            </p>
          </dd>
        </div>
        <div class="relative">
          <dt>
            <div
              class="
                absolute
                flex
                items-center
                justify-center
                h-12
                w-12
                rounded-md
                bg-orange-500
                text-white text-4xl
              "
            >
              2
            </div>
            <p class="ml-16 pt-3 text-2xl leading-6 font-medium text-gray-900">
              Official Application
            </p>
          </dt>
          <dd class="mt-5 ml-16 text-base text-gray-500">
            <p class="mt-10">
              After meeting with an advisor and deciding to officially enroll,
              you will need to complete our prerequisite
              <nuxt-link
                to="/programming-101"
                class="text-orange-500 hover:text-orange-600"
                >Intro to Programming</nuxt-link
              >
              course to ensure that you are ready for and able to benefit from
              our highly effective, intense, fast-paced bootcamp.
            </p>

            <p class="mt-4">
              <span class="font-bold text-lg">Don’t worry</span>, our mission is
              to help as many people as we can get access to great careers in
              tech. If you’re not ready yet, we will advise you on how to
              prepare and offer you mentorship along the way.
            </p>
          </dd>
        </div>
      </dl>
    </div>
    <div class="relative bg-orange-100 mt-20">
      <div
        class="
          max-w-6xl
          mx-auto
          py-12
          px-4
          mt-8
          sm:px-6
          lg:py-24
          lg:px-8
          lg:flex
          lg:items-center
          lg:justify-between
        "
      >
        <h2
          class="
            text-3xl
            font-extrabold
            tracking-tight
            text-gray-900
            md:text-4xl
          "
        >
          <span class="block">Ready to enroll?</span>
          <span class="block text-orange-600">Meet with an advisor!</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="#"
              class="
                inline-flex
                items-center
                justify-center
                px-5
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-white
                bg-orange-600
                hover:bg-orange-700
              "
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
