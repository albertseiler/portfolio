import { nanoid } from "nanoid";
import todolist from './images/todolist.png';
import visitgermany from './images/visitgermany.png';

export const projects = [
    {
        id: nanoid(),
        name: "visit germany",
        picture: visitgermany,
        text: "I built this website with React. It shows some beautiful places that are located in Germany, also it takes you to the location on google maps.",
        site: "https://visit-germany-albert-seiler.netlify.app/",
        git: "https://github.com/albertseiler/visit-germany-netlify",
    },
    {
        id: nanoid(),
        name: "to do list",
        picture: todolist,
        text: "This website is a to do list that is connected to the browser's local storage. It was also made with react.",
        site: "https://todolist-albert-seiler.netlify.app/",
        git: "https://github.com/albertseiler/to-do-list",
    },
]