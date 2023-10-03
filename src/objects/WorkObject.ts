export interface WorkObject {
  name: string;
  skills: string[];
  description: string;
  imgSrc?: string;
  liveLink?: string;
  githubLink?: string;
  state: State;
}

export enum State {
  LIVE,
  PRODUCTION,
  DEVELOPMENT,
  INACTIVE,
  PLANNED,
}

const workObjects: WorkObject[] = [
  {
    name: "Halkan.se",
    state: State.LIVE,
    skills: ["React.JS", "Material UI", "Node.JS", "Typescript", "Firebase"],
    description:
      "I have developed Halkan.se, a platform for booking risk education " +
      "courses. By utilizing React.js and Material UI on the " +
      "frontend, along with Node.js and TypeScript on the backend, I created a user-friendly " +
      "and professional design. By integrating Firebase for user management and database functionality," +
      " I was able to offer a secure and seamless booking experience. Halkan.se is the result of my work " +
      "in combining these technologies to create a platform that promotes traffic safety through affordable " +
      "risk education.",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-13bbf.appspot.com/o/HalkanSVG.svg?alt=media&token=4c055e3e-b3cb-47b7-a954-1876e52c127a",
    liveLink: "https://halkan.se",
  },
  {
    name: "Loyalties",
    state: State.DEVELOPMENT,
    skills: ["React Native", "Expo", "NodeJs", "Typescript", "Firebase"],
    description:
      "Loyalties is a mobile application that allows users to collect loyalty points from " +
      "different stores around the world. The application is built with React Native and Expo, " +
      "and the backend is built with Node.js and TypeScript. The application is currently in development " +
      "and will be released in the near future. " +
      "Once released, Loyalties will empower users to effortlessly earn and redeem loyalty points at their favorite stores, offering an attractive incentive for customer retention. Whether it's a local boutique, a popular chain, or an online retailer, Loyalties aims to foster stronger connections between businesses and their loyal customers.\n" +
      "\n" +
      "Stay tuned for the official launch of Loyalties, where you'll be able to enjoy the benefits of seamless loyalty point collection, exclusive rewards, and a personalized shopping experience. Get ready to unlock a world of loyalty benefits and make the most out of your shopping endeavors with Loyalties!",

    githubLink: "https://github.com/HazemE1/loyalties",
  },
  {
    name: "TIE",
    state: State.INACTIVE,
    skills: ["WIX", "VELO"],
    description:
      "During a summer project, I collaborated with Tillsammans i Engagemang (TIE), " +
      "an organization assisting young entrepreneurs, to create a fast and affordable website " +
      "using WIX. In a few weeks, we developed a user-friendly website, offering services such " +
      "as business plans and connections, to help TIE showcase their mission and engage with their " +
      "target audience. Although currently inactive, the website served as a valuable tool, enabling " +
      "TIE to expand their reach and inspire young entrepreneurs. This project demonstrated my ability " +
      "to work within budgetary constraints, meet tight deadlines, and deliver effective solutions " +
      "using platforms like WIX, while contributing to TIE's mission of empowering aspiring entrepreneurs.",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-13bbf.appspot.com/o/TIE.svg?alt=media&token=d826d740-66ad-4ffc-b282-cc82f020dafa",
  },
];

export default workObjects;
