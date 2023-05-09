<template>
  <main>
    <article class="mx-6 sm:mx-24 lg:mx-48">
      <!-- byline -->
      <p class="text-right mt-8">by PDX Code Guild - Jan. 17, 2017</p>
      <!-- title -->
      <h1 class="font-bold text-5xl">
        Making a Portfolio Site for your Job Search
      </h1>
      <!-- body -->
      <p class="my-8">
        There is no perfect guide to making a great portfolio site because the
        best portfolios are ones that reflect the personality of the maker. With
        that in mind, here are some tips for creating a portfolio. These will
        help you stand out to potential employers and colleagues. Keep It Simple
        One of the most common mistakes in a portfolio is too much! Too much
        content, too much functionality, and too much styling! A portfolio is a
        collection of every piece of work that you have done. A portfolio
        website should be a highlight reel of your best work. Once you put more
        than 20 or so items, no single item stands out as important. The key is
        not to put anything and everything you have done on your site. Make sure
        what you are putting on your portfolio is relevant to the position you
        are seeking. For example if you are looking for a job as a web
        developer, donÆt put an example of an excel spreadsheet that you made.
        It will just drown out your relevant work! Websites are visual, make it
        as easy as possible for people to see your content. While it is
        difficult to choose between fonts and colors. You should not over do it
        here. At most, 4 colors to your æthemeÆ of your site, and no more than 3
        font styles. DonÆt add too much functionality. If you are applying for a
        front-end style job, it will be tempting to show off everything that you
        can do. Yet, it is important that you show you can build a good user
        experience as well. Focus on that first. If you want to show a
        particular skill with a animation or programming concept. Make that a
        portfolio item itself. It should not take away from the usability of
        your website. Be Original (Or Not) When picking a theme to your website.
        It can be difficult to start from scratch. Especially if you are a
        back-end server engineer. So if you are not that great at design, itÆs
        okay to emulate other styles that influence you. Whether they are
        companies, art styles, etc. Remember though, itÆs okay to emulate, but
        definitely do not copy. Separation of Concerns This may seem basic, but
        it is easy to forget. When you are building a website you always have
        three tools that each handle a specific part: HTML û Content CSS û Style
        Javascript û Function It is important that you keep everything separate.
        Over time you will want to redesign your site, add more content, and
        change the way it feels. This will be much easier to do if you have a
        clear separation of concerns. Updating your content should not affect
        the style of your site. Update Your Site Often One of the best things
        you can do is to continue to add content to your site while on your job
        search. Often you will be in an interview and asked about a certain
        concept or skill. If you know how to do this, but donÆt have it on your
        portfolio, that is a good cue to add it. Adapting your portfolio
        throughout the job search is a good way to stay practiced in your
        skills. You will have useful feedback from interviews, even if you donÆt
        get the job. Using that feedback to fine tune your site, is a great way
        to update your site in a meaningful way. Use Existing Tools Many
        programmers, myself included, are guilty of this. We often try to
        reinvent the wheel. But, potential employers will be much more impressed
        if you build something novel and unique. DonÆt rewrite tools such as
        blog software unless you have a good reason to. Yes some of the tools
        out there might not be ideal. But adapting them for your use shows a
        higher level of skill and understanding. In any programming job you will
        be using someone elseÆs code base, this is great practice to learn how
        to extend software for your specific needs. That is of course, only if
        something wonÆt work right out of the box. Make Your Site Data-Driven As
        mentioned earlier, HTML handles content. But, it can be beneficial to
        make the distinction between markup (html) and content (data). With a
        data driven site, you have html that generated for you from some sort of
        database. Using a database will allow you to update your site without
        even touching the HTML. For portfolio sites, using a tool like
        CloudStitch will save you a ton of time while editing content and
        updating your site. Rather than editing an html file and re-uploading it
        to your site, you can simply edit columns in a Google Sheets
        spreadsheet. While it might not seem like a big hassle to make an html
        edit, if you do it enough it will quickly become tedious. Keep Positive
        It is stressful looking for work. The worst thing you can do is allow
        this stress to reflect in your portfolio. It is easy to become
        frustrated when applying to jobs, but do take the time to step away from
        it all and maintain a positive attitude. If you look at your
        unemployment as an opportunity to learn new skills, it reflects well in
        your portfolio. Employers are impressed with initiative and a can-do
        attitude. What do you have to lose? The worst thing that could happen is
        you learn some new skills!
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
    title: 'PDX Code Guild | Making a Portfolio Site for your Job Search',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Making a Portfolio Site for your Job Search by PDX Code Guild',
      },
    ],
  },
}
</script>
