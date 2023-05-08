
import "./topbar.scss";
import { Person,Mail } from '@mui/icons-material';


export default function Topbar({sideMenu,setsideMenu}) {

  

  return (
    <div className={"topbar " + (sideMenu && "active")}>
      <div className="wrapper">
           <div className="left">
            <a href="#intro" className="logo">genius.</a>
             
             <div className="container">
              <Person className="icon"></Person>
              <span>+916399736067</span>
             </div>

             <div className="container">
                  <Mail className="icon"></Mail>
                  <span>maharmandeep2000@gmail.com</span>
             </div>
           
            </div>
        <div className="right">

          <div className="hamburger" onClick={()=>setsideMenu(!sideMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span> 
          </div>
          
          
          </div>
      </div>
    </div>
  );
}
