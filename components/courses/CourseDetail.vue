<template>
  <main>
    <HeaderSimpleCentered
      :title="headerProps.title"
      :subtitle="headerProps.subtitle"
      :description="headerProps.description"
    />
    <section class="xl:grid xl:grid-cols-2 justify-between px-4 md:px-16">
      <CourseScheduleTable
        :course-days="tableProps.courseDays"
        :course-times="tableProps.courseTimes"
        :scheduled-courses="tableProps.scheduledCourses"
        :table-heading="tableProps.tableHeading"
        :course-type="tableProps.courseType"
      />
      <CourseDetailTuitionInfo
        :full-tuition="tuitionProps.fullTuition"
        :needs-based-low="tuitionProps.needsBasedLow"
        :needs-based-high="tuitionProps.needsBasedHigh"
      />
    </section>
    <CourseOverviewNew :course-concepts="courseConcepts" />
    <CTALight
      line1="Ready to level up?"
      line2="Invest in your future today"
      href="/apply"
      button-text="Get started"
    />
  </main>
</template>
<script>
import CourseOverviewNew from './CourseOverviewNew.vue'
// import CoursesHeader from '~/components/courses/CoursesHeader.vue'
import CourseScheduleTable from '~/components/courses/CourseScheduleTable.vue'
import CourseDetailTuitionInfo from '~/components/courses/CourseDetailTuitionInfo.vue'
// import CourseOverviewTable from '~/components/courses/CourseOverviewTable.vue'
export default {
  components: {
    // CoursesHeader,
    CourseScheduleTable,
    CourseDetailTuitionInfo,
    // CourseOverviewTable,
    CourseOverviewNew,
  },
  props: ['headerProps', 'tableProps', 'tuitionProps', 'courseConcepts'],
}
</script>
