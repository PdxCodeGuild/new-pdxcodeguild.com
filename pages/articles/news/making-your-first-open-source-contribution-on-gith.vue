<template>
  <main>
    <article class="mx-6 sm:mx-24 lg:mx-48">
      <!-- byline -->
      <p class="text-right mt-8">by PDX Code Guild - Jan. 10, 2017</p>
      <!-- title -->
      <h1 class="font-bold text-5xl">
        Making Your First Open Source Contribution on GitH
      </h1>
      <!-- body -->
      <p class="my-8">
        Miguel Grinberg gave an amazing talk at Open Source Bridge about Making
        Your First Contribution on GitHub. I have been encouraged to contribute
        to open source projects but wasnÆt sure precisely how. Here are 5 things
        that struck me about his talk + a link to the video so you can watch it
        start to finish. Look for a project to contribute to that has between
        100 and 1000 starts. A project with more than 100 stars is one that
        other people contribute to. The creator therefore has experience working
        with contributors. From MiguelÆs perspective, less than 1000 stars
        indicates that the project is still manageable for the creator. Imposter
        syndrome holds people back from contributing to open source. The desire
        to contribute to open source is sufficient proof that you are good
        enough. Fixing typos in the ReadMe is an appropriate and acceptable
        contribution to an open source project. If you find a project you want
        to contribute to, feel free to lurk for a bit. Lurking shows you how
        people contribute, how decisions are made, and how they progress. Be a
        good guest. In the same way that you follow the customs of the house in
        which you are a guest, follow the customs of the project to which you
        are contributing. By accepting the code, the maintainers of the project
        are agreeing to maintain it forevermore. It needs to be designed in a
        way that is comfortable for them to maintain. Watch this video from
        Miguel for step by step instructions about how to make the pull request,
        make changes, and submit it for approval.
        https://www.youtube.com/watch?v=-e5xeKt0ztU
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
    title:
      'PDX Code Guild | Making Your First Open Source Contribution on GitH',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Making Your First Open Source Contribution on GitH by PDX Code Guild',
      },
    ],
  },
}
</script>
