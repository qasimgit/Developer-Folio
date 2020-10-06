import covid from "../assets/covid.jpg";
import crud from "../assets/crud.jpg";
import devfolio from "../assets/devfolio.JPG";
import dmc from "../assets/dmc.JPG";
import ecomm from "../assets/ecomm.jpg";
import githubjobs from "../assets/githubjobs.JPG";

const projectData = [
  {
    name: "React Developer Portfolio",
    detail:
      "Minimalist Deveoper Portfolio website purely built on Reactjs with react-animations",
    imagesrc: { devfolio },
    repolink: "https://github.com/qasimgit/Developer-Folio",
  },
  {
    name: "Corona Virus Tacker",
    detail:
      "World Wide Corona Virus Tracker build with Reactjs with some libraries MaterialUi, Count and Chartjs with countryPicker and some other stuff ",
    imagesrc: { covid },
    repolink: "https://github.com/qasimgit/Covid-19-Tracker-Reactjs",
  },
  {
    name: "React Firebase CRUD with React Router",
    detail:
      "Crud web app in which we can add edit and delete user with react router v6",
    imagesrc: { crud },
    repolink:
      "https://github.com/qasimgit/Reactjs-CRUD-Application-with-React-Router",
  },
  {
    name: "Github Jobs Clone",
    detail:
      "Using Github Jobs api, github jobs webapp clone in react with axios and react-bootstrap",
    imagesrc: { githubjobs },
    repolink: "https://github.com/qasimgit/Github-Jobs-app",
    link: "http://jobapi.surge.sh/",
  },
  {
    name: "Simple Ecommerce Product Templete React",
    detail:
      "A simple ecommercer products webapp in which product can be filtered with lowest and highest prices",
    imagesrc: { ecomm },
    repolink: "https://github.com/qasimgit/Reactjs-Ecomerce-products-template",
  },
  {
    name: "DMC South Government React Web",
    detail:
      "A government organization website which is purely built on React and Firebase for realtime database",
    imagesrc: { dmc },
    link: "https://dmcsouth.surge.sh",
  },
];

export default projectData;
