<template>
  <div
    v-if="visible"
    class="
      absolute
      top-0
      inset-x-0
      p-2
      transition
      transform
      origin-top-right
      md:hidden
      z-20
    "
  >
    <div
      class="
        rounded-lg
        shadow-lg
        ring-1 ring-black ring-opacity-5
        bg-white
        divide-y-2 divide-gray-50
      "
    >
      <div class="pt-5 pb-6 px-5">
        <div class="flex items-center justify-between">
          <div
            class="
              flex
              justify-start
              lg:w-0
              lg:flex-1
              h-12
              w-auto
              content-center
            "
          >
            <Logo />
            <nuxt-link
              class="
                pl-4
                h-7
                my-auto
                font-medium
                text-xl text-gray-800
                hover:text-gray-900
                w-64
              "
              to="/"
              ><h1>PDX Code Guild</h1></nuxt-link
            >
          </div>
          <div class="-mr-2">
            <button
              type="button"
              class="
                bg-white
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-500
                hover:bg-gray-100
                focus:outline-none
                focus:ring-2 focus:ring-inset focus:ring-orange-500
              "
              @click="$props.toggle"
            >
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-12">
          <nav class="grid grid-cols-1 gap-7">
            <!-- <nuxt-link
              to="/courses"
              class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
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
              <div class="ml-4 text-base font-medium text-gray-900">
                Courses
              </div>
            </nuxt-link>

            <nuxt-link
              to="/prospective"
              class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
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
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">
                Prospective Students
              </div>
            </nuxt-link>

            <nuxt-link
              to="/capstones"
              class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
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
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">
                Capstone Projects
              </div>
            </nuxt-link>

            <nuxt-link
              to="/financial-aid"
              class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
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
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">
                Financial Aid
              </div>
            </nuxt-link> -->
            <nuxt-link
              to="/programming-101"
              class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-md
                  bg-orange-500
                  text-white
                  sm:h-12
                  sm:w-12
                "
              >
                <!-- Heroicon name: outline/view-grid -->
                <p>//</p>
              </div>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  Intro to Programming
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  Jump-start your tech career.
                </p>
              </div>
            </nuxt-link>
            <nuxt-link
              to="/courses/day"
              class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-md
                  bg-orange-500
                  text-white
                  sm:h-12
                  sm:w-12
                "
              >
                <!-- Heroicon name: outline/chart-bar -->
                <svg
                  class="h-6 w-6"
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  Full Stack Bootcamp: Day
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  Day classes and everything you need to become a developer.
                </p>
              </div>
            </nuxt-link>

            <nuxt-link
              to="/courses/evening"
              class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-md
                  bg-orange-500
                  text-white
                  sm:h-12
                  sm:w-12
                "
              >
                <!-- Heroicon name: outline/cursor-click -->
                <svg
                  class="h-6 w-6"
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
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  Full Stack Bootcamp: Evening
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  Evening classes and everything you need to become a developer.
                </p>
              </div>
            </nuxt-link>

            <nuxt-link
              to="/courses/advanced-js"
              class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-md
                  bg-orange-500
                  text-white
                  sm:h-12
                  sm:w-12
                "
              >
                <svg
                  width="398px"
                  height="560px"
                  viewBox="0 0 398 560"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="h-6 w-6"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g id="Group" fill-rule="nonzero">
                      <path
                        id="path118"
                        d="M1.33372,109.33203 L1.39622,114.33203 C1.43066,117.08203 9.39784,208.13269 19.10129,316.66602 L36.74387,514 L116.03879,536.20117 C159.6509,548.41179 196.23372,558.46382 197.33372,558.541465 C198.43372,558.61812 235.49963,548.6671 279.70286,536.42773 C350.5733,516.80453 360.14072,513.84898 360.64817,511.41992 C361.35517,508.03574 396.06072,116.52087 396.025147,112.33203 L395.99972,109.33203 L198.66575,109.33203 L1.33372,109.33203 Z"
                        fill="#F37024"
                      ></path>
                      <path
                        id="path88"
                        d="M116.66667,537.52932 L36.66667,515.16769 L35.62122,509.25052 C34.69191,503.99074 0,116.51622 0,111.3966 C0,109.54369 20.25565,109.33333 198.66667,109.33333 C386.98998,109.33333 397.33254,109.4548 397.318015,111.66666 C397.2552,121.22001 361.34636,513.82524 360.46391,514.60668 C359.3488,515.59414 204.50738,558.7322 199.33334,559.500348 C197.86667,559.71361 160.66667,549.82822 116.66667,537.52932 Z M249.11103,458.5163 C275.99996,451.10028 298.38802,444.65028 298.86224,444.18297 C299.33647,443.71566 302.48295,411.83333 305.8544,373.33333 C309.22586,334.83333 312.32462,300.78333 312.74052,297.66666 L313.49674,292 L255.41503,292 L197.33334,292 L197.33334,316.66666 L197.33334,341.33333 L228.69207,341.33333 L260.0508,341.33333 L259.427,344.33333 C259.08391,345.98333 257.75027,360.16268 256.46336,375.843 C255.09975,392.4579 253.48308,404.9931 252.5885,405.88769 C251.74423,406.73196 238.96644,410.6444 224.1934,414.582 L197.33334,421.74129 L197.33334,446.87064 C197.33334,464.02249 197.79186,472 198.7777,472 C199.5721,472 222.2221,465.93233 249.11103,458.5163 L249.11103,458.5163 Z M312.73228,261 C311.85092,254.46662 304,166.83717 304,163.53304 C304,161.52612 299.38434,161.33333 251.33334,161.33333 L198.66667,161.33333 L198.66667,187.12705 L198.66667,212.92078 L222.33334,213.83296 C235.35,214.33465 249.04882,215.09818 252.77514,215.5297 L259.55026,216.31429 L261.195,236.49048 C262.0996,247.58738 263.17748,258.91666 263.59028,261.66666 L264.34083,266.66666 L288.91878,266.66666 L313.49674,266.66666 L312.73228,261 Z"
                        fill="#F37024"
                      ></path>
                      <path
                        id="path80"
                        d="M36.74387,514 L19.10122,316.66666 C9.39776,208.13333 1.43039,117.08333 1.39595,114.33333 L1.33335,109.33333 L198.66667,109.33333 L396,109.33333 L396.025655,112.33333 C396.0612,116.52217 361.35488,508.03712 360.64788,511.4213 C360.14043,513.85036 350.57334,516.80613 279.7029,536.42933 C235.49967,548.6687 198.43339,558.61961 197.33339,558.543366 C196.23339,558.46528 159.65076,548.41172 116.03866,536.2011 L36.74387,514 Z M249.17124,459.45917 C276.58208,451.83841 299.39814,444.97384 299.87358,444.20457 C300.349,443.4353 303.62359,409.92457 307.15042,369.73628 C310.67724,329.548 313.85163,295.61666 314.2046,294.33333 C314.81095,292.12877 310.14694,292 229.69083,292 L144.5353,292 L148.16095,253.66666 C150.15506,232.58333 151.83462,215.27874 151.8933,215.21202 C151.952,215.14532 164.45,214.74665 179.66667,214.32612 C204.61766,213.63654 256.07144,215.627 257.7928,217.34836 C258.43588,217.99144 262.66667,259.49873 262.66667,265.16481 C262.66667,267.95862 263.04366,268 288.50288,268 L314.33911,268 L313.73027,262.33333 C313.3954,259.21666 311.20686,235.06666 308.86682,208.66666 L304.6122,160.66666 L204.97278,160.32484 C125.70407,160.0529 105.3311,160.32549 105.3224,161.65817 C105.3154,162.57952 104.73539,168.43333 104.03131,174.66666 C102.32756,189.75021 89.333343,335.48917 89.333343,339.51425 L89.333343,342.66666 L174.1172,342.66666 L258.90107,342.66666 L258.14526,347.66666 C257.72956,350.41666 256.41162,364.36666 255.2165,378.66666 C254.02138,392.96666 252.65876,405.03606 252.18844,405.48757 C250.94626,406.68006 201.06908,420.00464 197.95886,419.97488 C196.51482,419.96108 183.63334,416.74709 169.333343,412.83272 L143.333343,405.71569 L142.37991,394.5245 C141.85552,388.36936 141.05776,379.58333 140.60711,375 L139.78775,366.66666 L114.56055,366.66666 L89.333343,366.66666 L89.389243,371.66666 C89.493643,381.01728 95.557073,444.00144 96.437583,444.88194 C97.455913,445.90029 194.34982,473.13705 197.3334,473.243836 C198.4334,473.28295 221.76046,467.07993 249.17131,459.45917 L249.17124,459.45917 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        id="path78"
                        d="M36.74387,514 L19.10122,316.66666 C9.39776,208.13333 1.43039,117.08333 1.39595,114.33333 L1.33335,109.33333 L198.66667,109.33333 L396,109.33333 L396.025655,112.33333 C396.0612,116.52217 361.35488,508.03712 360.64788,511.4213 C360.14043,513.85036 350.57334,516.80613 279.7029,536.42933 C235.49967,548.6687 198.43339,558.61961 197.33339,558.543366 C196.23339,558.46528 159.65076,548.41172 116.03866,536.2011 L36.74387,514 Z M263.91299,506.50029 C298.79418,496.87545 327.98854,488.32545 328.78935,487.50029 C330.0356,486.21612 360.16146,156.04608 360.040605,145 L360.00004,141.33333 L279.33338,141.33333 L198.66671,141.33333 L198.66671,150.66666 L198.66671,160 L152,160 C115.56139,160 105.33094,160.36529 105.3224,161.66666 C105.3154,162.58333 104.73539,168.43333 104.03131,174.66666 C102.32756,189.75021 89.333343,335.48917 89.333343,339.51425 L89.333343,342.66666 L144,342.66666 L198.66667,342.66666 L198.66667,381.33333 C198.66667,411.39117 198.2956,419.99441 197,419.97488 C196.08334,419.96098 183.63334,416.74709 169.333343,412.83272 L143.333343,405.71569 L142.37991,394.5245 C141.85552,388.36936 141.05776,379.58333 140.60711,375 L139.78775,366.66666 L114.56055,366.66666 L89.333343,366.66666 L89.389243,371.66666 C89.548963,385.96814 95.735743,444.34592 97.186703,445.24266 C98.068603,445.7877 121.26239,452.45216 148.72844,460.05254 L198.66667,473.87142 L198.66667,498.9357 C198.66667,512.72106 199.07751,524 199.57966,524 C200.08179,524 229.03179,516.12513 263.91299,506.50029 Z M148.02046,254.02497 C149.9373,233.1387 151.76686,215.81356 152.08615,215.52465 C152.40543,215.23576 163.01667,214.71302 175.66667,214.36304 L198.66667,213.72669 L198.66667,252.86334 L198.66667,292 L171.60098,292 L144.5353,292 L148.02046,254.02497 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        id="path76"
                        d="M126.66667,62 L126.66667,49.33333 L144.66667,49.33333 L162.66667,49.33333 L162.66667,24.666666 L162.66667,0 L175.33334,0 L188,0 L188,37.333333 L188,74.66666 L157.33334,74.66666 L126.66667,74.66666 L126.66667,62 Z M200,64.66667 L200,54.66667 L216.66667,54.66667 C225.83334,54.66667 233.33334,54.32781 233.33334,53.91365 C233.33334,53.49949 225.83334,45.032193 216.66667,35.097432 L200,17.034229 L200,8.517114 L200,0 L234.66667,0 L269.33334,0 L269.33334,9.958961 L269.33334,19.917922 L253.05884,20.292294 L236.78435,20.666666 L253.72551,38.910945 L270.66667,57.15522 L270.66667,65.91094 L270.66667,74.66666 L235.33334,74.66666 L200,74.66666 L200,64.66667 Z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  Advanced Javascript
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  Node and React deeper dive.
                </p>
              </div>
            </nuxt-link>
            <nuxt-link
              to="/contact"
              class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-md
                  bg-orange-500
                  text-white
                "
              >
                <!-- Heroicon name: outline/phone -->
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">
                Contact
              </div>
            </nuxt-link>

            <a
              href="https://meetup.com/portland-programmer-network"
              class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
            >
              <div
                class="
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-md
                  bg-orange-500
                  text-white
                "
              >
                <!-- Heroicon name: outline/globe -->
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="ml-4 text-base font-medium text-gray-900">Events</div>
            </a>
          </nav>
        </div>
      </div>
      <!-- <div class="py-6 px-5">
        <div>
          <nuxt-link
            to="/apply"
            class="
              w-full
              flex
              items-center
              justify-center
              px-4
              py-2
              border border-transparent
              rounded-md
              shadow-sm
              text-base
              font-medium
              text-white
              bg-orange-500
              hover:bg-orange-600
            "
          >
            Get Started
          </nuxt-link>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ['visible', 'toggle'],
}
</script>
