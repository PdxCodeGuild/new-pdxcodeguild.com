<template>
  <main>
    <article class="mx-6 sm:mx-24 lg:mx-48">
      <!-- byline -->
      <p class="text-right mt-8">by PDX Code Guild - Mar. 25, 2016</p>
      <!-- title -->
      <h1 class="font-bold text-5xl">A Day in the Life of a Developer</h1>
      <!-- body -->

      <p class="my-4">
        My name is Joe Cardella and I&rsquo;m a Software Developer at Portland
        Webworks in Portland, Maine (http://portlandwebworks.com). Here&rsquo;s
        a little insight into how we develop our projects, which include custom
        mobile and enterprise web applications for clients ranging from local
        businesses to state governments and multi-national corporations.
      </p>

      <p>&nbsp;</p>

      <p class="my-4">
        For a typical week, the project managers allocate my time to various
        projects. I usually have just one major project at a time, but when my
        actual productive time on a project is low, say due to the project
        winding down or being in some kind of transition state, I may pick up a
        secondary project. If I&rsquo;m between projects I&rsquo;ll pick up
        various maintenance tasks, or provide estimates for projects our
        business development team is trying to win. We use a Scrum-based agile
        methodology that allows for transparent and reasonable project
        management.
      </p>

      <p class="my-4">
        When I start a project, I will work with the others on the team and
        break the project down into features and tasks, divide the tasks among
        the team, and organize the tasks according to what features are most
        valuable to the client and what tasks are technically necessary to make
        the project work. We then estimate the time and effort needed to
        complete each task, and usually plan at least a few weeks into the
        future. Once that is done, we&rsquo;ll take about two-weeks worth of
        work from the task list and get started. We&rsquo;ll meet daily in the
        morning to discuss the previous day&rsquo;s progress and what is planned
        for the current day, and then we just get to it. As for my particular
        role, I have a strong front-end skill set, so I tend to take on projects
        (or aspects of a project) with significant front-end needs. For example,
        my current projects are a re-skin of an AngularJS e-commerce web app and
        a Cordova/AngularJS mobile application. The web app is pretty much
        limited to HTML/CSS development, but with the mobile application
        I&rsquo;m responsible for development of the UI, the Angular
        application, and the Java-based RESTful web services on the back end.
      </p>

      <p class="my-4">
        Our tech stack of choice is HTML/CSS/JS using Bootstrap and AngularJS
        for front end, Java-based RESTful services for backend, and some sort of
        SQL database. Secondarily, we do a lot of Drupal projects, usually very
        large site conversions or sites which need some customization or
        additional application development on top of the Drupal platform. We use
        a lot of the tools du jour as needed, or as interested (haha), including
        SASS (css preprocessing), Grunt/Gulp (automating repetitive tasks),
        Bower (JavaScript dependency management), Yeoman (project scaffolding),
        Cordova (mobile app development), and others. As a part of the team,
        I&rsquo;m expected to maintain my primary skill set while actively
        improving my skill with the elements of our tech stack where I am
        lacking experience. Currently, that means staying on top of CSS changes
        and techniques, becoming expert with AngularJS, and becoming proficient
        with Java. My personal goal is to get proficient enough with the entire
        tech stack and gain enough application experience to take on the
        architect role on a major project. The environment at Portland Webworks
        is very collaborative, open, and relatively stress-free, so
        there&rsquo;s a lot of support when I&rsquo;m working outside of my
        comfort zone.
      </p>

      <p class="my-4">
        The company keeps an eye on the number of hours people are working to
        avoid developer burnout and to catch project problems early, so that
        reasonable hours and client expectations are maintained. Our agile
        project management process goes a long way toward making all of this
        collaboration, skill development, and project work possible and
        manageable. I definitely recommend looking for companies that have
        invested in agile processes when searching for jobs. Links: Portland
        Webworks:
        <a class="text-orange" href="http://www.portlandwebworks.com/"
          >http://www.portlandwebworks.com/</a
        >
        PWW Twitter: @portlandwebwork Personal Twitter: @joebot0101
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
    title: 'PDX Code Guild | A Day in the Life of a Developer',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'A Day in the Life of a Developer by PDX Code Guild',
      },
    ],
  },
}
</script>
