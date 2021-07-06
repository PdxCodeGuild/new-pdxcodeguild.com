<template>
  <main>
    <PageHeader :header-text="tableProps.courseDescriptionHeader" />
    <!-- <CoursesHeader
      :title="tableProps.courseDescriptionHeader"
      :center="true"
      :mt-hood-bg="true"
    /> -->
    <section
      class="xl:grid xl:grid-cols-2 justify-between pt-20 pb-12 px-4 md:px-16"
    >
      <CourseScheduleTable
        :course-days="tableProps.courseDays"
        :course-times="tableProps.courseTimes"
        :scheduled-courses="tableProps.scheduledCourses"
        :course-description-header="tableProps.courseDescriptionHeader"
        :course-description-table="tableProps.courseDescriptionTable"
      />
      <CourseDetailTuitionInfo
        :full-tuition="tuitionProps.fullTuition"
        :needs-based-low="tuitionProps.needsBasedLow"
        :needs-based-high="tuitionProps.needsBasedHigh"
      />
    </section>
    <div class="bg-orange-500 px-4 py-14 sm:px-6"></div>
    <!-- <section class="p-12"> -->
    <!-- <CourseOverviewTable :course-concepts="courseConcepts" /> -->
    <CourseOverviewNew :course-concepts="courseConcepts" />
    <!-- </section> -->
    <CTA
      title="Invest In Your Future Today"
      cta="Apply"
      href="/apply"
      cta-alt="Schedule A Tour"
      href-alt="#"
      color="orange"
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
  props: ['tableProps', 'tuitionProps', 'courseConcepts'],
}
</script>
