export interface Offering extends OfferingItem {
  priceCalculationAction: string;
  description: string;
  img: string;
  categories: OfferingCatergories[];
}

export interface OfferingItem {
  name: string;
  price: number;
  id: string;
}

export interface OfferingCatergories {
  name: string;
  items: OfferingItem[];
}

export const Offerings: Offering[] = [
  {
    id: "1",
    name: "Website Development",
    img: "https://marketingwebsites.ca/wp-content/uploads/2021/07/build-website.jpg",
    price: 15000,
    priceCalculationAction: "web-development",
    description:
      "Our passion is to transform your digital vision into reality. With our custom web development service, your online presence is not just a platform – it's a powerful engine to achieve your business goals.\n\nWhy choose our web development service?\n\n- Targeted design: Every website we create is unique and tailored to reflect your brand identity and reach your audience. We excel in combining aesthetically pleasing design with user-friendliness.\n\n- Responsive interface: We understand the importance of accessibility on all devices. That's why we ensure your website works flawlessly on desktops, tablets, and smartphones, providing a seamless user experience.\n\n- Technical expertise: Our team consists of experienced developers who are at the forefront of the latest technology. Whether you need a simple website or a complex e-commerce platform, we have the knowledge and skills to deliver.\n\n- Security: We take security seriously. By implementing the latest security measures, we ensure your website is protected from potential threats and hackers.\n\n- Customer-focused support: Our customer service is unmatched. We're always here to assist you, answer questions, and resolve any issues that may arise.\n\nYour digital future starts here. Let us take your online presence to the next level. Whether you're a startup entrepreneur or an established business looking to revamp your website, we're here to help. Contact us today to embark on the journey toward an impressive and successful website.",
    categories: [
      {
        name: "Type of website",
        items: [
          {
            name: "E-Commerce Website",
            price: 5000,
            id: "1",
          },
          {
            name: "Dropshipping Website",
            price: 4500,
            id: "1",
          },
          {
            name: "Booking Page",
            price: 2500,
            id: "1",
          },
          {
            name: "Blog Page",
            price: 2000,
            id: "1",
          },
          {
            name: "Forum Page",
            price: 3000,
            id: "1",
          },
          {
            name: "Portfolio Page",
            price: 1500,
            id: "1",
          },
          {
            name: "Event Page",
            price: 3000,
            id: "1",
          },
          {
            name: "Special Request",
            price: 0,
            id: "1-special",
          },
        ],
      },
      {
        name: "Website hosting",
        items: [
          {
            name: "Virtual private server",
            price: 5000,
            id: "1",
          },
          {
            name: "Firebase hosting",
            price: 4500,
            id: "1",
          },
          {
            name: "Web hosting",
            price: 2500,
            id: "1",
          },
        ],
      },
      {
        name: "Website Infrastructure",
        items: [
          {
            name: "Self developed website",
            price: 20000,
            id: "1-dubble",
          },
          {
            name: "Hybrid developed website",
            price: 15000,
            id: "1-half",
          },
          {
            name: "Website builder",
            price: 5000,
            id: "1",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "App Development",
    img: "https://i.imgur.com/bkpoLgY.png",
    price: 40000,
    priceCalculationAction: "app-development",
    description:
      "Our passion is to turn your digital vision into reality in app development. We create customized and powerful apps that help your business stand out in the market.\n\nWhy choose our app development service?\n\n- Custom functionality: We design and develop apps that are tailored to your needs and business goals. Our goal is to create an app that engages and impresses your users.\n\n- Platform-agnostic: Our team is experienced in developing apps for various platforms, including iOS and Android. We can help you reach a broad audience.\n\n- User-friendliness: We prioritize the user experience. Our apps are easy to use and provide seamless navigation for users.\n\n- Technical expertise: We are experts in the latest app development technology and can deliver high-performance and secure apps.\n\n- Support and maintenance: Our support is available to assist you with any questions or issues that may arise with your app.\n\nIf you want to take your digital presence to the next level with an impressive app, we're here to help. Contact us today to get started with your app development.",
    categories: [
      {
        name: "Type of Mobile App",
        items: [
          {
            name: "E-Commerce App",
            price: 36000,
            id: "2",
          },
          {
            name: "Health & Fitness App",
            price: 27000,
            id: "2",
          },
          {
            name: "Educational App",
            price: 31500,
            id: "2",
          },
          {
            name: "Travel & Tourism App",
            price: 33750,
            id: "2",
          },
          {
            name: "Community App",
            price: 54000,
            id: "2",
          },
          {
            name: "Utility App",
            price: 22500,
            id: "2",
          },
          {
            name: "News & Magazine App",
            price: 36000,
            id: "2",
          },
          {
            name: "Navigation & Maps App",
            price: 45000,
            id: "2",
          },
          {
            name: "Productivity App",
            price: 27000,
            id: "2",
          },
          {
            name: "Special Request",
            price: 0,
            id: "2-special",
          },
        ],
      },
      {
        name: "App disturbution ",
        items: [
          {
            name: "App store",
            price: 10000,
            id: "2",
          },
          {
            name: "Play store",
            price: 10000,
            id: "2",
          },
          {
            name: "Hybrid distrubtion",
            price: 15000,
            id: "2",
          },
          {
            name: "Expo",
            price: 3000,
            id: "2",
          },
        ],
      },
    ],
  },
];
