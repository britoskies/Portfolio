import hms from "../assets/img/hms.png";
import weatherapp from "../assets/img/weatherapp.png";
import newsapp from "../assets/img/newsapp.png"
import todolist from "../assets/img/todolist2.png"
import imc from "../assets/img/imc.png"
import loginapi from "../assets/img/api.jpg";


const projects: any = [
  {
    id: 1,
    name: "Hospital Management System",
    description:
      "Full-stack app for hospitals to have a digital platform where they can manage & store and read all data related to their hospital center.",
    type: "Fullstack Web App",
    link: "https://hospital-manager-tds.vercel.app",
    image: hms,
    appreciation: 5,
    techs: {
      Frontend: ["React", "Material UI"],
      Backend: ["Firebase"],
    },
  },
  {
    id: 2,
    name: "Weather App",
    description:
      "Minimalist, fast and simple frontend application displaying the weather forecast by country.",
    type: "Frontend Web App",
    link: "https://britoskies.github.io/WeatherApp",
    image: weatherapp,
    appreciation: 4,
    techs: {
      Frontend: ["React", "CSS", "Tailwind"],
      Backend: [],
    },
  },
  {
    id: 3,
    name: "News App",
    description:
      "Minimalist, fast and simple frontend application displaying the latest news of 6 different countries.",
    type: "Frontend Web App",
    link: "https://github.com/britoskies/NewsApp",
    image: newsapp,
    appreciation: 3,
    techs: {
      Frontend: ["Angular", "", "Boostrap"],
      Backend: [],
    },
  },
  {
    id: 4,
    name: "ToDoList",
    description:
      "Web app to manage a list of individual tasks effectively and help people get their things done",
    type: "Frontend Web App",
    link: "https://britoskies.github.io/ToDoList",
    image: todolist,
    appreciation: 4,
    techs: {
      Frontend: ["JavaScript", "CSS", "JQuery", "HTML"],
      Backend: [],
    },
  },
  {
    id: 5,
    name: "Mass Index Calculator",
    description:
      "Body mass index calculator, including pound to kg & foot to meter converter",
    type: "Frontend Web App",
    link: "https://britoskies.github.io/IMC",
    image: imc,
    appreciation: 2,
    techs: {
      Frontend: ["JavaScript", "CSS", "HTML"],
      Backend: [],
    },
  },
  {
    id: 6,
    name: "Login API",
    description:
      "Login API developed with MVC architecture and Typescript to try user authentication with JWT",
    type: "Backend Web App",
    link: "https://github.com/britoskies/Jwt-LoginApi",
    image: loginapi,
    appreciation: 3,
    techs: {
      Frontend: [],
      Backend: ["TypeScript", "NodeJS", "ExpressJS"],
    },
  },
];


export default projects;