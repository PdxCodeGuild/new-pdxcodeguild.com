<template>
  <main>
    <TailwindUIHeader1
      title="About Us"
      subtitle="More than a school"
      img-src="/images/orange/Frog.jpg"
      img-alt="A stuffed animal frog sits on a a shelf among books, a flowerpot, a model airplane, and a sign reading 'YOUR FUTURE STARTS TODAY'"
      color-filter="orange"
      color-filter-weight="300"
    />
    <Team :team="team" />
  </main>
</template>

<script>
const team = [
  {
    name: 'Sheri Dover',
    role: 'Director',
    imageUrl: '/images/team/Sheri.jpg',
    bio: "Coming from a background in plant pathology, Sheri became involved in Portland's budding tech startup community.  Recognizing the need for individual, economic empowerment in tech, she assisted with the founding of PDX Code Guild in 2013.  Sheri views the school as a social cause, not an investment.  She can be found walking trails with her dog, Violet.",

    // plant pathology in grad school in corvalis
    // community service energized her more
    // degree in biology
    // massage shortage of tech talent in portland
    // PDX Code Guild
    // social cause, not an investment
    // longtime activist for small businesses and community economic development
    // passion for individual economic empowerment
    // led to involvement in tech startup community in Portland

    // nothing for artists in corvalis
    // incubator for nano-businesses
    // hp left corvalis :(
    // economic developer asked for help
    // to get jobs for laid-off hp people
    // tech start-ups in corvalis in 2009
  },
  // {
  //   name: 'Matthew Cooper',
  //   role: 'Lead Instructor',
  //   imageUrl: 'https://placekitten.com/769/1024',
  //   bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  // },
  {
    name: 'Merritt Lawrenson',
    role: 'Lead Instructor',
    imageUrl: '/images/team/Merritt.jpg',
    bio: "Merritt is a web developer and educator who teaches computer science and programming to students from kindergarten to adult. His favorite development projects use data visualizations and maps to tell stories. When he's not behind the computer, you can find Merritt exploring the city, leading architectural history tours, or watching a movie.",
  },
  {
    name: 'Alexander de Michieli (he/him/his)',
    role: 'Instructor',
    imageUrl: '/images/team/Alex.jpg',
    bio: 'Alexander is originally from Italy. He has a past in photography and design and enjoys combining his technical and creative skills. He is currently working as an engineer for Squarespace and is a former graduate of PDX Code Guild. ',
  },
  {
    name: 'Pete Jones (he/him/his)',
    role: 'Instructor',
    imageUrl: '/images/team/Pete.jpg',
    bio: 'After visiting Oregon with family in 2019, Pete moved to Portland the next month.  His passions include music, coding, and teaching.  He works as a frontend developer for Zaelot.',
  },
  {
    name: 'Keegan Good',
    role: 'Instructor/Career Services Advisor',
    imageUrl: '/images/team/Keegan.jpg',
    bio: 'Keegan is a Code Guild graduate and web developer working in Python and Javascript. He loves to learn and to teach and believes that no matter what your background and interests are, you’ll be able to find a way to compliment them with code. As Career Services Advisor for the Guild, Keegan provides resources and interview practice for students and alumni. He also works to create professional relationships in the community to increase access to potential job opportunities for PDX Code Guild members.',
  },
  {
    name: 'Matt Chimenti',
    role: 'Programming 101/102 Instructor',
    imageUrl: '/images/team/Matt.jpg',
    bio: 'Matt is a former PDX Code Guild student. He received an undergraduate degree in literature and worked in finance for many years. Needing a change, he decided one day to research programming bootcamps. He made contact with the staff and, since then, never looked back. He couldn’t be happier with the decision to change his career trajectory and end up in coding and loves sharings his experiences and passion with the new programmers of 101 and 102.',
  },
]

export default {
  data() {
    return {
      team,
    }
  },
}
</script>
