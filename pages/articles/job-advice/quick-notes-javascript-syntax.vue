<template>
  <main>
    <article class="mx-6 sm:mx-24 lg:mx-48">
      <!-- byline -->
      <p class="text-right mt-8">by PDX Code Guild - Sep. 22, 2015</p>
      <!-- title -->
      <h1 class="font-bold text-5xl">Quick Notes: Javascript Syntax</h1>
      <!-- body -->

      <p class="my-4">
        Quick Notes are designed to be a helpful reference for someone who has
        already learned about a topic conceptually but has not yet memorized the
        material.
      </p>

      <p class="my-4">
        <strong class="text-xl">Javascript Variable</strong> var name = x * y;
      </p>

      <p class="my-4">
        <strong class="text-xl">Variable Example</strong> var doughnuts =
        flavors * baked ;
      </p>

      <p class="my-4">
        <strong class="text-xl">Function</strong> function name(parameters){
        return parameters * 2; }
      </p>

      <p class="my-4">
        <strong class="text-xl">Function Example function</strong>
        bake(doughnuts){ return doughnuts * 2; }
      </p>

      <p class="my-4">
        <strong class="text-xl">Conditional Statements</strong> if (condition) {
        code to be executed if true; } else if (condition 2){ code to be
        executed if condition2 is true; } else { code to be executed if both
        conditions false; }
      </p>

      <p class="my-4">
        <strong class="text-xl">Conditional Statement Example</strong> if
        (doughnuts &lt; 20) { bake more doughnuts; }else if (doughnuts &gt;
        100){ eat more doughnuts; } else { take a nap; } For Loops for (starting
        condition; condition for loop to run; the counter){ code to be executed
        } For Loop Example for (i=0; i&lt;20 ; i+){ bake more doughnuts; }
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
    title: 'PDX Code Guild | Quick Notes: Javascript Syntax',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Quick Notes: Javascript Syntax by PDX Code Guild',
      },
    ],
  },
}
</script>
