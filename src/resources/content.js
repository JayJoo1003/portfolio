import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Jayden",
  lastName: "Joo",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Curious Freshman",
  avatar: "/images/mickeymouse.jpg",
  email: "jaydenhyungchanjoo@gmail.com",
  location: "Asia/Seoul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Korean", "Japanese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/JayJoo1003",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Passions of Jayden Joo</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Portfolio Website Development</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Innovative problem solver and strategic thinker
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a freshman at YISS with interests both inside and outside school. While I have some background in sports, such as being part of the school’s cross country team and playing golf for several years, I am especially drawn to academics. I enjoy exploring subjects like coding, where I can solve problems and create projects, and biology, where I learn more about how life and the human body work.
      </>
    ),
  },
  achievements: {
    display: true, // set to false to hide this section
    title: "Achievements",
    achievements: [
      {
        title: "2023 Asian Intercontinental Make X Tournament starter skill test winner",
        description: <>I have participated in the 2023 Make X game in Thailand and have gotten first place in the skill test</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/Achievements/IMG_7113.jpeg",
            alt: "2023 Asian Intercontinental Make X Tournament",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "YISS Vex Robotics 8th Grade course",
        description: <>I have been a part of the YISS Robotics course for a semester</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "2024 JJGA 2nd place",
        description: <>I have gotten second place at the Royal Meadow Golf Club in Japan</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "SCPGA Junior Tour",
        description: <>I have participated in the 2025 SCPGA Junior Tour in Chino, California</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "International Math Modeling Competition",
        description: <>I have participated in the 2025 IMMC competition with my peers</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "2024 MS Cross Country KAIAC race",
        description: <>I have ran in the 2024 CC KAIAC race at Chadwick International</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/Achievements/KAIACxccomp.png",
            alt: "2024 Chadiwck International KAIAC Cross Country Race",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "2025 HS Cross Country KAIAC race (1)",
        description: <>I have ran in the 2025 HS race in SFS and have scored 3rd place in the YISS team for the boys open race division</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/Achievements/image.png",
            alt: "2025 Seoul Foreign School Cross Country Race",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Seoul Foreign School Middle School Mathematics Competition",
        description: <>I have partnered up with 3 other Middle School students to participate in a mathematics competition at SFS and scored 4th place</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/Achievements/sfsmathcomp.webp",
            alt: "2nd Annual Seoul Foreign School Middle School Mathematics Competition",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  work: {
    display: true, // set to false to hide this section
    title: "Activities & Experiences",
    experiences: [
      {
        company: "Portfolio Website Development",
        timeframe: "Aug 2025 - Sep 2025",
        role: "Frontend Developer",
        achievements: [
          <>
            Built my first personal portfolio website using Next.js template,
            customizing the design to reflect my personal style and brand
            identity
          </>,
          <>
            Successfully deployed the website to Vercel with seamless CI/CD
            integration, experiencing the satisfaction of seeing my work go live
          </>,
          <>
            Gained valuable insights into modern web development workflow, from
            initial setup to production deployment
          </>,
          <>
            Developed an eye for UI/UX details while personalizing components
            and layout to create a cohesive visual experience
          </>,
          <>
            Understood the significance of SEO optimization and performance
            considerations in real-world web development projects
          </>,
        ],
        images: []
      },
      {
        company: "Helping Kids Everyday",
        timeframe: "2025",
        role: "Club Member",
        achievements: [
          <>
            HKE is a club focused on helping out with schoolwide fair and events
          </>,
          <>
          Direct contact with orphanages and serve kids
          </>,
          <>
          Largest service club in YISS
          </>,
        ],
        images: [],
      },
      {
        company: "Blue and Red Ink",
        timeframe: "2025",
        role: "Photographer",
        achievements: [
          <>
            Brink is a school wide newspaper club, publishing informant articles every month. I have participated as a photographer.
          </>,
          <>
          In charge of all processes of journalism including interviewing and photo-taking
          </>,
          
        ],
        images: [],
      },
      {
        company: "Eco-today",
        timeframe: "2025",
        role: "Club Member",
        achievements: [
          <>
          Eco-today is a school club focused on spreading awareness for environmental issues by creating posters, and trash-picking
          </>,
          <>
          Fundraise and donate to organizations
          </>,
          <>
          Compete in environment-related competitions
          </>,
          
        ],
        images: [],
      },
      {
        company: "Advanced Math Circle",
        timeframe: "2025",
        role: "Club Member",
        achievements: [
          <>
            Advanced Math Circle is a club that consistently participates in math competitions, and teaches math to younger students
          </>,
          
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Yongsan International School of Seoul",
        description: <>Middle and High School</>,
      },
      {
        name: "Seoul Foreign School",
        description: <>Elementary and Middle School</>,
      },
      {
        name: "Soongeui Elementary School",
        description: <>Elementary School</>,
      },
      {
        name: "Dulwich College Seoul",
        description: <>Toddler and Reception</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Sports",
        description: <>I have been active in sports for many years, starting with golf, which I have played for seven years and continue to enjoy as a member of the YISS golf club. Alongside golf, I also play badminton as a hobby. Since middle school, I have been a part of my school’s cross country team, and I am continuing with it as a freshman, building endurance and teamwork. Altogether, these sports have shaped my athletic experience by giving me both individual and team challenges.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Python",
        description: <>I have learnt the Python skill for more than 4 years</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/python-logo.png",
            alt: "Project image",
            width: 9,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Activities & Experiences",
  title: `Activities & Experiences – ${person.name}`,
  description: `Design and dev projects of ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
