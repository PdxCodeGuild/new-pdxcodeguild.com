<template>
  <section id="what-is-the-path" class="xl:min-h-screen scroll-snap-child">
    <div class="py-20 text-center bg-orange-500">
      <h2 class="text-base text-gray-100 font-semibold tracking-wide uppercase">
        The adventure starts here.
      </h2>
      <p
        class="
          mt-2
          text-3xl
          leading-8
          font-extrabold
          tracking-tight
          text-white
          sm:text-4xl
        "
      >
        What is the path?
      </p>
    </div>

    <h2 class="mt-20 text-5xl text-center lg:text-left pl-16 mx-auto">
      New Students
    </h2>
    <div
      class="
        relative
        bg-white
        mt-20
        w-10/12
        mx-auto
        lg:w-full
        border-grey-500 border-dotted
        lg:border-t-4
      "
    >
      <dl
        class="
          space-y-10
          md:space-y-0
          md:grid
          lg:grid-cols-3
          md:gap-x-8 md:gap-y-10
          md:grid-cols-1
          lg:px-10
          px-0
          w-full
          lg:w-10/12
          mx-auto
        "
      >
        <div
          class="
            relative
            border-grey-500 border-l-4 border-dotted
            lg:border-l-0
          "
        >
          <dt>
            <div
              class="
                my-6
                text-2xl
                leading-6
                font-medium
                text-gray-900
                flex
                justify-center
                align-center
              "
            >
              <div
                class="
                  absolute
                  lg:-top-6
                  lg:left-6
                  -left-6
                  -top-8
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
              <CircleWithInnerText
                diameter-lg="52"
                diameter-sm="52"
                bg-color="orange-500"
                text-color="white"
                inner-html="Programming 101"
              />
            </div>
          </dt>
          <dd class="mt-10 mx-8 pb-16 text-base text-gray-500">
            <p class="lg:mt-10">
              Our fast-paced
              <nuxt-link
                to="/programming-101"
                class="text-orange-500 hover:text-orange-600 text-lg"
                >Programming 101
              </nuxt-link>
              course is a great warm-up for our bootcamp programs. This
              thirty-hour course covers all the Python fundamentals needed to
              being the Full-Stack Python Bootcamp.
              <!-- Even advanced students find value in starting with the fun and
              fast-paced intro course, although they do have the option of
              testing out of it and going straight into bootcamp. It’s a great
              warm-up for the intense bootcamps. -->
            </p>
            <p class="mt-4">
              <span class="font-bold text-lg"
                >This course starts from square one</span
              >, so even students with zero coding experience will feel prepared
              and motivated for the bootcamps.
            </p>
          </dd>
        </div>
        <div
          class="
            relative
            border-grey-500 border-l-4 border-dotted
            lg:border-l-0
          "
        >
          <dt>
            <div
              class="
                absolute
                lg:-top-6
                lg:left-6
                -left-6
                -top-8
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
            <p
              class="
                my-6
                text-2xl
                leading-6
                font-medium
                text-gray-900
                flex
                justify-center
                align-center
              "
            >
              <CircleWithInnerText
                diameter-lg="52"
                diameter-sm="52"
                bg-color="orange-500"
                text-color="white"
                inner-html="Full-Stack Web Developer Bootcamp"
              />
            </p>
          </dt>
          <dd class="mt-10 mx-8 pb-16 text-base text-gray-500">
            <p class="lg:mt-10">
              The Full-Stack Developer Bootcamp is the primary bootcamp at PDX
              Code Guild.

              <!-- With a proven track record of getting
              graduates great jobs and a world-class curriculum delivered by
              passionate industry-experienced instructors to small groups of
              students, the Python-Based Full-Stack Developer Bootcamp is the
              primary bootcamp at PDX Code Guild. -->
            </p>
            <p class="mt-4">
              Its
              <span class="font-bold text-lg">world-class curriculum</span>
              delivered by our industry-experienced instructors has a
              <span class="font-bold text-lg"
                >proven track record of getting graduates great jobs</span
              >
              in tech. Our excellent student-to-teacher ratio will ensure that
              students always have access to the resources they need to succeed.
            </p>
          </dd>
        </div>
        <div
          class="
            relative
            border-grey-500 border-l-4 border-dotted
            lg:border-l-0
          "
        >
          <dt>
            <div
              class="
                absolute
                lg:-top-6
                lg:left-6
                -left-6
                -top-8
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
              3
            </div>
            <p
              class="
                my-6
                text-2xl
                leading-6
                font-medium
                text-gray-900
                flex
                justify-center
                align-center
              "
            >
              <CircleWithInnerText
                diameter-lg="52"
                diameter-sm="52"
                bg-color="orange-500"
                text-color="white"
                inner-html="Find Your Dream Tech Job!"
              />
            </p>
          </dt>
          <dd class="mt-10 mx-8 text-base text-gray-500">
            <p class="lg:mt-10">
              Our
              <span class="font-bold text-lg">
                Career Services Specialists
              </span>
              are commited to supporting grads with
              <span class="font-bold text-lg"
                >technical and informational interview</span
              >
              prep to land that dream job.
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
