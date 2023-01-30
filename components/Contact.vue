<template>
  <div class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
    </div>
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2">
      <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 lg:py-24 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <h2
            class="
              text-2xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-3xl
            "
          >
            How can we assist you?
          </h2>
          <p class="mt-3 text-lg leading-6 text-gray-500">
            An Advisor is standing by to answer any questions you may have. We
            are just a phone call or email away.
          </p>
          <!-- <p class="mt-3 text-lg leading-6 text-gray-500">
            An Advisor/School Certifying Official is standing by to answer any
            questions you may have. We are just a phone call or email away.
          </p> -->
          <dl class="mt-8 text-base text-gray-500">
            <div>
              <dt class="sr-only">Postal address</dt>
              <dd>
                <p>407 NE 12th Avenue</p>
                <p>Portland, OR 97232</p>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">Phone number</dt>
              <dd class="flex">
                <!-- Heroicon name: outline/phone -->
                <svg
                  class="flex-shrink-0 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span class="ml-3">
                  <a href="tel:+15034448836"> +1 (503) 444-8836 </a>
                </span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <!-- Heroicon name: outline/mail -->
                <svg
                  class="flex-shrink-0 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span class="ml-3">
                  <a href="mailto:admissions@pdxcodeguild.com">
                    admissions@pdxcodeguild.com
                  </a>
                </span>
              </dd>
            </div>
          </dl>
          <!-- <p class="mt-6 text-base text-gray-500">
            Looking for careers?
            <a href="#" class="font-medium text-gray-700 underline"
              >View all job openings</a
            >.
          </p> -->
        </div>
      </div>
      <div class="bg-white">
        <Map />
      </div>
    </div>
  </div>
</template>
