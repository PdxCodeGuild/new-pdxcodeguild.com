<template>
  <form
    action="/apply/success"
    method="POST"
    class="space-y-8 divide-y divide-gray-200 px-2 md:px-8 lg:mx-auto lg:w-2/3"
    name="application"
    netlify
    netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="application" />
    <input name="bot-field" class="hidden" />
    <div>
      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label
            for="first_name"
            class="block text-sm font-medium text-gray-700"
          >
            First name
          </label>
          <div class="mt-1">
            <input
              id="first_name"
              type="text"
              name="first_name"
              autocomplete="given-name"
              class="
                shadow-sm
                focus:ring-orange-500
                focus:border-orange-500
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="last_name"
            class="block text-sm font-medium text-gray-700"
          >
            Last name
          </label>
          <div class="mt-1">
            <input
              id="last_name"
              type="text"
              name="last_name"
              autocomplete="family-name"
              class="
                shadow-sm
                focus:ring-orange-500
                focus:border-orange-500
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div class="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class="
                shadow-sm
                focus:ring-orange-500
                focus:border-orange-500
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="phone_number"
            class="block text-sm font-medium text-gray-700"
            >Phone Number</label
          >
          <div class="mt-1 relative rounded-md shadow-sm">
            <!-- <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">Country</label>
              <select
                id="country"
                name="country"
                class="
                  focus:ring-orange-500
                  focus:border-orange-500
                  h-full
                  py-0
                  pl-3
                  pr-7
                  border-transparent
                  bg-transparent
                  text-gray-500
                  sm:text-sm
                  rounded-md
                "
              >
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
            </div> -->
            <input
              id="phone_number"
              type="tel"
              name="phone_number"
              class="
                focus:ring-orange-500
                focus:border-orange-500
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="+1 (555) 987-6543"
            />
          </div>
        </div>
        <div class="pt-4 md:col-span-6">
          <div class="mt-4">
            <fieldset>
              <legend class="text-base font-medium text-gray-900">
                Are you interested in using Veteran's Benefits to attend PDX
                Code Guild?
              </legend>
              <div class="mt-4 space-y-4">
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="vet-benefits"
                      name="vet-benefits"
                      type="radio"
                      value="yes"
                      class="
                        focus:ring-orange-500
                        h-4
                        w-4
                        text-orange-600
                        border-gray-300
                      "
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="vet-benefits" class="font-medium text-gray-700"
                      >Yes</label
                    >
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="vet-benefits"
                      name="vet-benefits"
                      type="radio"
                      value="no"
                      class="
                        focus:ring-orange-500
                        h-4
                        w-4
                        text-orange-600
                        border-gray-300
                      "
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="vet-benefits" class="font-medium text-gray-700"
                      >No</label
                    >
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset class="mt-6">
              <div>
                <legend class="text-base font-medium text-gray-900">
                  If yes, check all that apply:
                </legend>
              </div>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input
                    id="vet-tec"
                    name="benefits-type"
                    type="checkbox"
                    value="vet-tec"
                    class="
                      focus:ring-orange-500
                      h-4
                      w-4
                      text-orange-600
                      border-gray-300
                      rounded
                    "
                  />
                  <label
                    for="vet-tec"
                    class="ml-3 block text-sm font-medium text-gray-700"
                  >
                    VET TEC
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="gi-bill"
                    name="benefits-type"
                    type="checkbox"
                    value="gi-bill"
                    class="
                      focus:ring-orange-500
                      h-4
                      w-4
                      text-orange-600
                      border-gray-300
                      rounded
                    "
                  />
                  <label
                    for="gi-bill"
                    class="ml-3 block text-sm font-medium text-gray-700"
                  >
                    GI Bill™
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="voc-rehab"
                    name="benefits-type"
                    type="checkbox"
                    value="voc-rehab"
                    class="
                      focus:ring-orange-500
                      h-4
                      w-4
                      text-orange-600
                      border-gray-300
                      rounded
                    "
                  />
                  <label
                    for="voc-rehab"
                    class="ml-3 block text-sm font-medium text-gray-700"
                  >
                    VOC Rehab
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="vrrap"
                    name="benefits-type"
                    type="checkbox"
                    value="vrrap"
                    class="
                      focus:ring-orange-500
                      h-4
                      w-4
                      text-orange-600
                      border-gray-300
                      rounded
                    "
                  />
                  <label
                    for="vrrap"
                    class="ml-3 block text-sm font-medium text-gray-700"
                  >
                    VRRAP
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div class="pt-4 sm:col-span-6">
          <label
            for="about"
            class="block text-base lg:text-lg font-medium text-gray-700"
          >
            How can we help you?
          </label>
          <div class="mt-2">
            <textarea
              id="about"
              name="about"
              rows="5"
              class="
                shadow-sm
                focus:ring-orange-500
                focus:border-orange-500
                block
                w-full
                sm:text-sm
                border border-gray-300
                rounded-md
              "
            ></textarea>
          </div>
        </div>
      </div>
      <div class="pt-5">
        <div class="flex justify-end">
          <button
            type="submit"
            class="
              ml-3
              inline-flex
              justify-center
              py-2
              px-4
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-orange-500
              hover:bg-orange-600
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
            "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
