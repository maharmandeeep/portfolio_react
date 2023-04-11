import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contacts/Contacts"
import Menu from "./menu/Menu"
import "./app.scss";
import { useState } from "react"


function App() {
  const[sideMenu ,setsideMenu]=useState(false);



  return (
    <div className="app">
     <Topbar sideMenu={sideMenu} setsideMenu={setsideMenu}></Topbar>
     <Menu sideMenu={sideMenu} setsideMenu={setsideMenu}></Menu>
     <div className="section">
       <Intro></Intro>
       <Portfolio></Portfolio>
       <Works></Works>
       <Testimonials></Testimonials>
       <Contact></Contact>
     </div>
    </div>
  );
}

export default App;
