export interface Group {
  skills: Skill[];
  freeText: string;
  color: string;
  title: string;
  icon: string;
}
export interface Skill {
  skill: string;
  percentage: number;
}

export const skills: Group[] = [
  {
    skills: [
      {
        skill: "HTML",
        percentage: 100,
      },
      {
        skill: "CSS",
        percentage: 100,
      },
      {
        skill: "JavaScript",
        percentage: 100,
      },
      {
        skill: "Tailwind CSS",
        percentage: 100,
      },
      {
        skill: "React JS",
        percentage: 100,
      },
    ],
    freeText:
      "Web Development involves creating and styling web pages using HTML, CSS, and adding interactivity with JavaScript.",
    color: "red",
    title: "Web Development",
    icon: "/media/skill-icons/web-dev-icon.png",
  },
  {
    skills: [
      {
        skill: "Node.js",
        percentage: 90,
      },
      {
        skill: "Next JS",
        percentage: 90,
      },
      {
        skill: "Create React App",
        percentage: 90,
      },
      {
        skill: "React Native",
        percentage: 90,
      },
      {
        skill: "Expo CLI",
        percentage: 90,
      },
      {
        skill: "Python",
        percentage: 80,
      },
      {
        skill: "Java",
        percentage: 75,
      },
      {
        skill: "C#",
        percentage: 75,
      },
    ],
    freeText:
      "Backend Development focuses on server-side programming using Node.js, Python, C# and Java to handle data and business logic.",
    color: "blue",
    title: "Backend Development",
    icon: "/media/skill-icons/backend-dev.png",
  },
  {
    skills: [
      {
        skill: "Firestore",
        percentage: 100,
      },
      {
        skill: "Firebase Realtime Database",
        percentage: 85,
      },
      {
        skill: "Firebase Storage",
        percentage: 85,
      },
      {
        skill: "MySQL",
        percentage: 85,
      },

      {
        skill: "SQLite",
        percentage: 80,
      },
    ],
    freeText:
      "Databases involve working with relational databases like MySQL and SQLite to store and manage structured data.",
    color: "green",
    title: "Databases",
    icon: "/media/skill-icons/database-png.png",
  },
  {
    skills: [
      {
        skill: "Firebase",
        percentage: 80,
      },
      {
        skill: "Amazon Web Services",
        percentage: 70,
      },
    ],
    freeText:
      "Cloud Technologies include services like Firebase and AWS for deploying and scaling applications in the cloud.",
    color: "purple",
    title: "Cloud Technologies",
    icon: "/media/skill-icons/cloud-tech.png",
  },
  {
    skills: [
      {
        skill: "OpenAI GPT",
        percentage: 75,
      },
    ],
    freeText:
      "AI involves using technologies like OpenAI's GPT to build applications that can understand and generate human-like text.",
    color: "orange",
    title: "AI",
    icon: "/media/skill-icons/ai-icon.png",
  },
  {
    skills: [
      {
        skill: "SEO",
        percentage: 90,
      },
      {
        skill: "Google Analytics",
        percentage: 85,
      },
    ],
    freeText:
      "Analytics includes SEO (Search Engine Optimization) techniques and the use of Google Analytics to analyze website performance.",
    color: "pink",
    title: "Analytics",
    icon: "/media/skill-icons/analytics.png",
  },
  {
    skills: [
      {
        skill: "WIX",
        percentage: 85,
      },
      {
        skill: "WordPress",
        percentage: 90,
      },
      {
        skill: "Squarespace",
        percentage: 80,
      },
      {
        skill: "Shopify",
        percentage: 85,
      },
    ],
    freeText:
      "Website builders and e-commerce platforms like WIX, WordPress, Squarespace, and Shopify enable the creation of websites and online stores with varying levels of customization and functionality.",
    color: "cyan", // You can choose a different color
    title: "Website Builders",
    icon: "/media/skill-icons/website-builders.png",
  },
];
