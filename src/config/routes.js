import About from "../pages/about/Index";
import LandingPage from "../pages/Home/Index";

const routes = [
  {
    path: "/",
    component: <LandingPage />,
    lable: "Home",
  },
  {
    path: "/about",
    component: <About />,
    lable: "Signup",
  },
];

export default routes;
