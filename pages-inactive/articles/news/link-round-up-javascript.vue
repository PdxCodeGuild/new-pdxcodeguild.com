<template>
  <main>
    <article class="mx-6 sm:mx-24 lg:mx-48">
      <!-- byline -->
      <p class="text-right mt-8">by PDX Code Guild - Apr. 11, 2017</p>
      <!-- title -->
      <h1 class="font-bold text-5xl">Link Round Up: Javascript</h1>
      <!-- body -->

      <p class="my-4">
        Code Guild is community devoted to continuous education. Here is a
        round-up of articles on JavaScript topics curated by Code Guild
        instructor, Andrew Hedges. I have used these articles for interview prep
        as well as broadening my knowledge of the field and Javascript.
      </p>

      <p class="my-4">
        <a
          class="text-orange"
          href="https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95#.grbhopl2g"
          >10 Concepts Every JavaScript Developer Should Know
        </a>
      </p>

      <p class="my-4">
        <a class="text-orange" href="http://jargon.js.org/"
          >&nbsp;JavaScript Vocabulary
        </a>
      </p>

      <p class="my-4">
        <a
          class="text-orange"
          href="https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/#.r7g5uanbv"
          >Closures</a
        >: Closures are functions that refer to independent (free) variables. In
        other words, the function defined in the closure &lsquo;remembers&rsquo;
        the environment in which it was created.
      </p>

      <p class="my-4">
        <a
          class="text-orange"
          href="https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d#.qonw9sz0u!"
          >Write Great Unit Tests</a
        >
      </p>
    </article>
    <CTA
      title="Are you ready to become a developer?"
      description="We're happy to answer any questions you have about the process.  Drop us a line or sign up for Programming 101."
      color="orange"
      cta="Contact"
      href="/contact"
      cta-alt="Programming 101"
      href-alt="/programming-101"
    />
  </main>
</template>
<script>
export default {
  head: {
    title: 'PDX Code Guild | Link Round Up: Javascript',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Link Round Up: Javascript by PDX Code Guild',
      },
    ],
  },
}
</script>
