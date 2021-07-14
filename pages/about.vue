<template>
  <main>
    <!-- <TailwindUIHeader1
      title="About Us"
      subtitle="glowing awesome great words about us wow what a great and awesome school!"
      img-src="/images/orange/AlumniHackerspace.jpg"
      color-filter="gray"
      color-filter-weight="500"
    /> -->
    <TailwindUIHeader1
      title="About Us"
      subtitle="More than a school"
      img-src="/images/grayscale/AlumniHackerspace.jpg"
      color-filter="orange"
      color-filter-weight="500"
    />
    <Team1 :team="team" />
    <!-- <Team2 :team="team" /> -->
  </main>
</template>

<script>
const team = [
  // {
  //   name: 'Sheri Dover',
  //   role: 'Director',
  //   imageUrl: 'https://placekitten.com/768/1024',
  //   bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  // },
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
  // {
  //   name: 'June Bremmer',
  //   role: 'Career Services Specialist',
  //   imageUrl: 'https://placekitten.com/770/1024',
  //   bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  // },
  {
    name: 'Alexander de Michieli (he/him/his)',
    role: 'Instructor',
    imageUrl: '/images/team/Alex.jpg',
    bio: 'Alexander is originally from Italy. He has a past in photography and design and enjoys combining his technical and creative skills. He is currently working as an engineer for Squarespace and is a former graduate of PDX Code Guild. ',
  },
  {
    name: 'Keegan Good',
    role: 'Programming 101/102 Instructor',
    imageUrl: '/images/team/Keegan.jpg',
    bio: 'Hi, I’m Keegan! I am the Programming 101 & 102 Instructor here at PDX Code Guild. I’m here to help you get your coding career off to a good start by building a solid foundation in the basics of Python before beginning with one of our boot camps. My coding journey began in 2019 with Ruby on Rails, but I switched to Python & Javascript when I began my boot camp program with the Guild. I graduated in February, 2020 and have continued learning and building full-stack web apps ever since. I am also a musician of twenty years, multimedia artist, gardener, amateur mycologist and father of two. I love to learn and to teach and I believe that no matter what your background and interests are, you’ll be able to find a way to compliment them with code. Welcome to PDX Code Guild!',
  },
  {
    name: 'Pete Jones (he/him/his)',
    role: 'Instructor',
    imageUrl: '/images/team/Pete.jpg',
    bio: 'After visiting Oregon with family in 2019, Pete moved to Portland the next month.  His passions include music, coding, and teaching.  He works as a frontend developer for Zaelot.',
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
