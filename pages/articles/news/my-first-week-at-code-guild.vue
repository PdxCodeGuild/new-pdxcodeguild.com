<template>
  <main>
    <article class="mx-6 sm:mx-24 lg:mx-48">
      <!-- byline -->
      <p class="text-right mt-8">by PDX Code Guild - Apr. 3, 2015</p>
      <!-- title -->
      <h1 class="font-bold text-5xl">My First Week at Code Guild</h1>
      <!-- body -->

      <p class="my-4">
        Bootcamp is fast and intensive and we push our students do more than
        just code. Read how student Jordan Hewus describes coding, meet-ups, and
        the exhilarating end to frustration&hellip;. Since arriving at Code
        Guild, I&rsquo;ve found myself finding enjoyment in strange unknown
        places. Walking into programming from day 1 has proven quite the
        experience for myself and my fellow classmates. From learning Python
        syntax to creating our own web apps, it has been a great change of pace
        from a the traditional collegiate setting. My first awesome moment was
        finishing an address book program from scratch. I first began by listing
        features I wanted to implement then used what seemed like limited
        knowledge and skills received in my short time here and ended up
        actually writing usable code. It was a great feeling to run my
        application and know that everything worked without error! The best part
        is, I now use this project app to store my family and friend&rsquo;s
        contact info.
      </p>

      <p class="my-4">
        I have also discovered Portland&rsquo;s many Tech meet-ups. In my short
        time since relocating to Portland, I have attended various meet ups from
        &ldquo;Learning Vim Text Editor&rdquo; to &ldquo;Perl Mongers&rdquo;.
        Although I don&rsquo;t understand everything talked about, I feel
        it&rsquo;s important to socialize and network with others in the tech
        community. Not to mention I learned some awesome commands for VIM that I
        would have had no idea existed! Now don&rsquo;t get confused as I might
        be making this all sound like a walk in the park. This has not been easy
        for me having started from the beginning with no prior programming
        knowledge. Programming can be very frustrating, which I&rsquo;ve found
        by staring at my code for hours trying to figure out what went wrong,
        only to find my error and have it be something as simple as a small
        typo! But after all that frustration, finally seeing the light at the
        end of the tunnel is such a great feeling. I believe these frustrations
        only make me want to learn more!
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
    title: 'PDX Code Guild | My First Week at Code Guild',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'My First Week at Code Guild by PDX Code Guild',
      },
    ],
  },
}
</script>
