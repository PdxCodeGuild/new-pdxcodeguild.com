<template>
  <div>
    <PageHeader
      header-text="Authentic, Local &amp; Committed"
      post-header-text="Our passion is serving our community by making tech jobs accessible to as many people as possible."
    />

    <div class="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="
            text-base text-orange-500
            font-semibold
            tracking-wide
            uppercase
          "
        >
          Get started today
        </h2>
        <p
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          Flexible Funding
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          We offer a variety of payment options to simplify your life.
        </p>
      </div>

      <!-- <ul class="divide-y divide-gray-200 w-2/12 sm:w-full">
      <li class="py-4">
        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
          Income-Based Discount
        </p>
        <p class="mt-2 ml-16 text-base text-gray-500">
          Students whose yearly household income is approximately 300% or less
          of the 2019 federal poverty level will qualify for reduced tuition.
        </p>
      </li>

    </ul> -->

      <div class="mt-16">
        <dl
          class="
            max-w-5xl
            mx-auto
            space-y-10
            md:space-y-0
            md:grid md:grid-cols-2
            md:gap-x-10 md:gap-y-10
          "
        >
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
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Income-Based Discount
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Students whose yearly household income is approximately 300% or
              less of the 2019 federal poverty level will qualify for reduced
              tuition.
            </dd>
            <dd class="mt-2 ml-16 text-sm text-gray-500">
              <!-- Sometimes a partial discount will be applied to applicants who
              exceed the income guideline if they have circumstances that create
              need. If you do qualify, tuition drops significantly. See class
              page to see the range of discounts that apply to each class. -->
              <p class="mt-3">To Apply</p>
              <p class="mt-2 text-xs">
                Send an essay describing your financial need its contributing
                factors and how you'll use the education to
                <a
                  href="mailto:sheri@pdxcodeguild.com"
                  class="text-xs text-orange-500 hover:text-orange-600"
                  >sheri@pdxcodeguild.com</a
                >.
              </p>
            </dd>
          </div>

          <div class="relative mt-10">
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
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Cash-pay discount
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              If a student pays $1,000 or more out-of-pocket on or before the
              first day of class, they qualify for a $500 discount.

              <!-- On occasion, a student will have a portion of their tuition that
            they pay out of pocket. If your out-of-pocket payment of $1,000 or
            more and you're able to pay it on or before the first day of class
            you qualify for an additional $500 discount. -->
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
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Military
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Students who qualify for Veterans' benefits may use them at PDX
              Code Guild.
            </dd>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              <nuxt-link
                to="/veterans"
                class="text-xs text-orange-500 hover:text-orange-600"
              >
                Learn More
              </nuxt-link>
            </dd>
          </div>
          <div class="relative mt-10">
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
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Grants
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Many of our students qualify for one of the numerous third-party
              grants that are available to help pay for tuition.
              <p class="mt-2">
                <a
                  href="http://www.worksourceoregon.org/"
                  class="text-xs text-orange-500 hover:text-orange-600"
                  >Worksource Oregon</a
                >
              </p>
              <p class="mt-.5">
                <a
                  href="https://www.dol.gov/general/topic/training/tradeact"
                  class="text-xs text-orange-500 hover:text-orange-600"
                  >Trade Act</a
                >
              </p>
              <p class="mt-.5">
                <a
                  href="https://www.dol.gov/general/topic/workcomp"
                  class="text-xs text-orange-500 hover:text-orange-600"
                  >Workman's Compensation</a
                >
              </p>
              <!-- There are numerous 3rd party grants available, and most of our
            students qualify for a grant to help pay tuition. A few of those
            grants come from • WorkSource • Trade Act • Workman's compensation •
            And more. Make an appointment with an advisor to learn more. -->
            </dd>
          </div>
          <div class="relative mt-10">
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
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Payment Plan
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Pay 25% of full tuition before class starts and then the remainder
              of your tuition paid before the 26th day of the bootcamp.
            </dd>

            <dd class="mt-2 ml-16 text-xs text-gray-500">
              Due to VA requirements, payments must be received on time. Because
              of this, any eligible discounts are awarded when the second
              payment is made.
            </dd>
          </div>
          <div class="relative mt-10">
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
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Lay-Away
              </p>
            </dt>

            <dd class="mt-2 ml-16 text-base text-gray-500">
              Students can make payments in any amount and at any frequency
              until the full tuition amount is paid in full.
            </dd>

            <dd class="mt-2 ml-16 text-xs text-gray-500">
              Tuition must be paid in full before the bootcamp start date. If
              the student ends up not enrolling or attending, the tuition will
              be refunded.
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="bg-orange-100">
      <div
        class="
          max-w-7xl
          mx-auto
          py-12
          px-4
          mt-20
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
          <span class="block">Questions about tuition?</span>
          <span class="block text-orange-500">Meet with an advisor!</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="/contact"
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
                bg-orange-500
                hover:bg-orange-600
              "
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: 'PDX Code Guild | Financial Aid',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          "Income-Based Discounts, Veteran's Benefits, Grants & Payment Plans GI Bill Coding Bootcamps",
      },
    ],
  },
}
</script>
