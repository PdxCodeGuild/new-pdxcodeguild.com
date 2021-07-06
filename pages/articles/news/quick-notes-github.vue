<template>
  <main>
    <article class="mx-6 sm:mx-24 lg:mx-48">
      <!-- byline -->
      <p class="text-right mt-8">by PDX Code Guild - Jan. 8, 2016</p>
      <!-- title -->
      <h1 class="font-bold text-5xl">Quick Notes: GitHub</h1>
      <!-- body -->
      <p class="my-8">
        Quick Notes are designed to be a helpful reference for someone who has
        learned about a subject but not yet memorized the material. Text in blue
        is user dependent. Text in green changes and can be pulled from a set
        number of options. I crafted these for my setup which is a Mac OS, Atom
        text editor with fish installed. I hope you find them useful as well.
        However, if these particular instructions donÆt work for you, you may
        find the basic structure of crafting quick notes valuable even if these
        particular quick notes arenÆt right for your set up. GitHub Commit New
        In Terminal: echo ôfile nameö >> .gitignore git init On GitHub: Create a
        new repository on GitHub In Terminal: git remote add origin url git
        remote add . git commit- m ômessageö git push û u origin master GitHub
        Update git add . git commit -m ômessageö git push û u origin master
        Other git push options I use frequently Profile Site: git push -u gh
        pages master Project Site: git push -u origin gh pages
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
    title: 'PDX Code Guild | Quick Notes: GitHub',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Quick Notes: GitHub by PDX Code Guild',
      },
    ],
  },
}
</script>
