<template>
  <main>
    <article class="mx-6 sm:mx-24 lg:mx-48">
      <!-- byline -->
      <p class="text-right mt-8">by PDX Code Guild - Mar. 9, 2016</p>
      <!-- title -->
      <h1 class="font-bold text-5xl">Quick Notes: Python Syntax</h1>
      <!-- body -->
      <p class="my-8">
        Quick Notes are designed to be a helpful reference after a student has
        learned about a subject conceptually but who has not yet memorized the
        material. Text in blue is user dependent. Text in green changes and can
        be pulled from a set number of options. Python Variable name = x + y
        cookies = magic + sugar Function def name(parameters): return parameters
        * 2 def bake(magic, sugar): return magic * sugar Conditional Statements
        if condition 1: code to be executed if true elif condition 2: code to be
        executed if condition2 is true else: code to be executed if both
        conditions false if cookies &lt; 20: bake more cookies elif cookies >
        200: feed cookies to Cookie Monster else: keep Cookie Monster away from
        the cookies! For Loops for item in sequence: code to be executed for
        cookie in cookie_list: eat cookie
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
    title: 'PDX Code Guild | Quick Notes: Python Syntax',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Quick Notes: Python Syntax by PDX Code Guild',
      },
    ],
  },
}
</script>
