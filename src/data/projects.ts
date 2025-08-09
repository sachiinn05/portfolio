import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "1",
    title: "ChatterUp",
    description:
      "ChatterUp is a simple real-time chat application that allows users to send and receive messages instantly using web sockets. Built with Node.js, Socket.io, and MongoDB, it's a clean and lightweight setup for learning and experimenting with chat-based systems.",
    icon: "/skills/socket-io.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sachiinn05/ChatterUP-web-app",
    tags: ["HTML", "CSS", "Express.js", "MongoDB", "Socket.io"],
  },
  {
    id: "2",
    title: "Job Portal Web Application",
    description: `A modern, feature-rich, and user-friendly job portal designed to connect job seekers and employers effortlessly.`,
    icon: "/skills/express.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sachiinn05/Job-Portal-WebAPPs",
    tags: ["EJS", "Javascript", "Node.js"],
  },
  {
    id: "3",
    title: "E-commerce APIs",
    description:
      "This project provides a backend API for an e-commerce application, built using Node.js and Express.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sachiinn05/Ecommerce-APIs",
    tags: ["Express.js", "Postman", "JWT", "Swagger"],
  },
  {
    id: "4",
    title: "MediRec",
    description:
      "AI-powered platform predicting diseases from symptoms, offering personalized medicine, prescriptions, and workout recommendations with secure, user-friendly Flask integration.",
    icon: "/skills/python.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sachiinn05/Medical-Symptom-Chatbot-",
    tags: ["Python", "Jupyter Notebook", "Javascript", "HTML"],
  },
];

export default projects;
