<template>
  <main>
    <article class="mx-6 sm:mx-24 lg:mx-48">
      <!-- byline -->
      <p class="text-right mt-8">by PDX Code Guild - Nov. 2, 2017</p>
      <!-- title -->
      <h1 class="font-bold text-5xl">Quick Notes: Navigating the Terminal</h1>
      <!-- body -->

      <p class="my-4">
        Quick Notes are designed to be a helpful reference after a student has
        learned about a subject conceptually but who has not yet memorized the
        material.
      </p>

      <p class="my-4">
        <strong class="text-xl">cd</strong> Change Directory/Move into the
        folder
      </p>

      <p class="my-4">
        <strong class="text-xl">pwd</strong> Print Working Directory &ndash; the
        name of the current folder to the terminal
      </p>

      <p class="my-4">
        <strong class="text-xl">ls</strong> List &ndash; files and folders are
        present in the current directory
      </p>

      <p class="my-4">
        <strong class="text-xl">ls -a</strong> List&nbsp;everything including
        the hidden files and folders
      </p>

      <p class="my-4">
        <strong class="text-xl">mkdir</strong> Make Directory/Create new folder
      </p>

      <p class="my-4">
        <strong class="text-xl">rmdir</strong> Remove Directory/Folder touch
        Create File
      </p>

      <p class="my-4"><strong class="text-xl">rm</strong> Remove File</p>

      <p class="my-4"><strong class="text-xl">cp</strong> Copy</p>

      <p class="my-4"><strong class="text-xl">mv</strong> Move</p>

      <p class="my-4">
        <strong class="text-xl">atom .</strong> Open in Text Editor &ndash; Atom
      </p>

      <p class="my-4">
        <strong class="text-xl">open </strong
        ><strong class="text-xl">.</strong> Open as a file or in a web browser
        (if HTML file)
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
    title: 'PDX Code Guild | Quick Notes: Navigating the Terminal',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Quick Notes: Navigating the Terminal by PDX Code Guild',
      },
    ],
  },
}
</script>
