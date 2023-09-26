import portfolioImg01 from "../images/ecom2.png";
import portfolioImg02 from "../images/ott2.png";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/simon.png";
import portfolioImg05 from "../images/textsummarytool.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "e-commerce website for shopping",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://github.com/viz-zie/EcommerceWebsiteZenith",
   
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Simon game",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://github.com/viz-zie/SimonGame",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "Multimedia Sharing Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.figma.com/file/vuILf0GGLBB9fW5XmG8UfZ/ott_design_vizzie?type=design&mode=design&t=JHnaazeVjW0CghgJ-1",
  },

  /*
  {
    id: "04",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Text summarisation tool using machine learning",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://github.com/viz-zie/TextSummarisationUsingMachineLearning",
  },

  
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Ux",
    title: "Online Therapy Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Web Design",
    title: "Appointment Booking Website",
    description:
      `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim,
        temporibus dignissimos atque repellendus amet a velit. Dolorem quidem 
        animi doloribus saepe!`,
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "08",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Finance Technology Website",
    description:
      `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, 
      temporibus dignissimos atque repellendus amet a velit. Dolorem 
      quidem animi doloribus saepe!`,
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "09",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "Video Conference Website",
    description:
      `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque 
      repellendus amet a velit. Dolorem quidem animi doloribus saepe!`,
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "10",
    imgUrl: portfolioImg03,
    category: "Ux",
    title: "File Sharing Website",
    description:
      `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim,
       temporibus dignissimos atque repellendus amet a velit. Dolorem 
       quidem animi doloribus saepe!`,
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "11",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Landing Page",
    description:
      `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, 
      temporibus dignissimos atque repellendus amet a velit. Dolorem quidem 
      animi doloribus saepe!`,
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "12",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "13",
    imgUrl: portfolioImg06,
    category: "Web Design",
    title: "Online Therapy Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "14",
    imgUrl: portfolioImg07,
    category: "ux",
    title: "Appointment Booking Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },

  */
];

export default portfolios;
