<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <TailwindUIHeader1
      title="Veterans"
      img-src="images/orange/Flag.jpg"
      img-alt="Two students discuss code with an American flag in the background."
      color-filter="orange"
      color-filter-weight="200"
    />
    <section class="relative bg-white py-16 sm:py-24">
      <div
        class="
          lg:mx-auto
          lg:max-w-7xl
          lg:px-8
          lg:grid lg:grid-cols-2
          lg:gap-24
          lg:items-start
        "
      >
        <div class="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            class="
              hidden
              sm:block
              lg:absolute
              lg:inset-y-0
              lg:right-0
              lg:w-screen
            "
          >
            <div
              class="
                absolute
                inset-y-0
                right-1/2
                w-full
                bg-gray-50
                rounded-r-3xl
                lg:right-72
              "
            />
            <svg
              class="
                absolute
                top-8
                left-1/2
                -ml-3
                lg:-right-8
                lg:left-auto
                lg:top-12
              "
              width="404"
              height="392"
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="392"
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div
            class="
              relative
              mx-auto
              max-w-md
              px-4
              sm:max-w-3xl
              sm:px-6
              lg:px-0
              lg:max-w-none
              lg:py-20
            "
          >
            <!-- Testimonial card-->
            <div
              class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden"
            >
              <img
                class="absolute inset-0 h-full w-full object-cover"
                src="/images/team/Austen.jpeg"
                alt="Veteran and PDX Code Guild graduate Austen Cote climbs the side of a cliff."
              />
              <div class="absolute inset-0 bg-orange-500 mix-blend-multiply" />
              <div
                class="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-orange-600
                  via-orange-600
                  opacity-90
                "
              />
              <div class="relative px-8">
                <blockquote class="mt-8">
                  <div
                    class="relative text-lg font-medium text-white md:flex-grow"
                  >
                    <svg
                      class="
                        absolute
                        top-0
                        left-0
                        transform
                        -translate-x-3 -translate-y-2
                        h-8
                        w-8
                        text-orange-400
                      "
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                      />
                    </svg>
                    <p class="relative">
                      PDX Code Guild is a magical place! Life after the military
                      can be hard, but PDX Code Guild gives you a top level
                      education built by amazing staff and a place to connect
                      with current students and alumni to help you excel into a
                      successful tech career.
                    </p>
                  </div>

                  <footer class="mt-4">
                    <p class="text-base font-semibold text-orange-200">
                      Austen Cote, Data Engineer at TISTA Science and Technology
                      &amp; PDX Code Guild Graduate
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div
          class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0"
        >
          <!-- Content area -->
          <div class="pt-12 sm:pt-16 lg:pt-20">
            <h2
              class="
                text-3xl text-gray-900
                font-extrabold
                tracking-tight
                sm:text-4xl
              "
            >
              Attend PDX Code Guild with your veteran's benefits
            </h2>
            <div class="mt-6 text-gray-500 space-y-6">
              <p class="text-lg">
                Having worked with numerous successful veterans in the past, PDX
                Code Guild is thrilled that students can use their GI Bill
                &#174; to attend bootcamps at PDX Code Guild!
              </p>
              <p class="text-sm leading-7">
                GI Bill&#174; is a registered trademark of the U.S. Department
                of Veterans Affairs (VA). More information about education
                benefits offered by VA is available at the official U.S.
                government web site at
                <a href="https://www.benefits.va.gov/gibill" class="text-orange"
                  >https://www.benefits.va.gov/gibill.</a
                >
              </p>
              <!-- <p class="text-base leading-7">
                Rhoncus nisl, libero egestas diam fermentum dui. At quis
                tincidunt vel ultricies. Vulputate aliquet velit faucibus
                semper. Pellentesque in venenatis vestibulum consectetur nibh
                id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
                fermentum lacus in. Viverra.
              </p> -->
            </div>
          </div>

          <!-- Stats section -->
          <div class="mt-10">
            <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="border-t-2 border-gray-100 pt-6"
              >
                <dt class="text-base font-medium text-gray-500">
                  {{ stat.label }}
                </dt>
                <dd
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ stat.value }}
                </dd>
              </div>
            </dl>
            <div class="mt-10">
              <nuxt-link
                to="/apply"
                class="text-base font-medium text-orange-600"
              >
                Get started today
                <span aria-hidden="true">&rarr;</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
const stats = [
  { label: '', value: 'GI Bill™' },
  { label: '', value: 'VetTec' },
  { label: '', value: 'VRRAP' },
  { label: '', value: 'VOC Rehab' },
  // { label: 'Founded', value: '2021' },
  // { label: 'Employees', value: '5' },
  // { label: 'Beta Users', value: '521' },
  // { label: 'Raised', value: '$25M' },
]

export default {
  data() {
    return {
      stats,
    }
  },
}
</script>
