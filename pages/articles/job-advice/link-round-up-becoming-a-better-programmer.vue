<template>
  <main>
    <article class="mx-6 sm:mx-24 lg:mx-48">
      <!-- byline -->
      <p class="text-right mt-8">by PDX Code Guild - Oct. 2, 2017</p>
      <!-- title -->
      <h1 class="font-bold text-5xl">
        Link Round-Up Becoming a Better Programmer
      </h1>
      <!-- body -->

      <p class="my-4">
        Code Guild is a community devoted to continuous education.
      </p>

      <p class="my-4">
        Here is a round-up of articles on CSS topics curated by Code Guild
        instructor, Andrew Hedges. These articles are particularly useful for
        understanding how developers think and navigate the professional
        landscape.
      </p>

      <p class="my-4">
        <a
          class="text-orange"
          href="https://www.thoughtworks.com/insights/blog/effective-navigation-in-pair-programming"
          >Effectively Navigating Pair Programming
        </a>
      </p>

      <p class="my-4">
        <a
          class="text-orange"
          href="https://skillcrush.com/blog/the-developer-mindset/"
          >The Developer Mindset
        </a>
      </p>

      <p class="my-4">
        <a
          class="text-orange"
          href="https://www.quora.com/How-can-I-be-a-faster-programmer"
          >Becoming a Faster Programmer
        </a>
      </p>

      <p class="my-4">
        <a
          class="text-orange"
          href="https://medium.com/javascript-scene/which-tech-should-you-learn-now-5705748c1b14#.1z2nxgbzt"
          >What Tech to Explore Next</a
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
    title: 'PDX Code Guild | Link Round-Up Becoming a Better Programmer',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Link Round-Up Becoming a Better Programmer by PDX Code Guild',
      },
    ],
  },
}
</script>
