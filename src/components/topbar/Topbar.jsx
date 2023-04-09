import "./topbar.scss";
import { Person,Mail } from '@mui/icons-material';


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
           <div className="left">
            <a href="#intro" className="logo">genious.</a>
             
             <div className="container">
              <Person></Person>
              <span>+916399736067</span>
             </div>
             <div className="container">
                  <Mail></Mail>
                  <span>maharmandeep2000@gmail.com</span>
             </div>
           
            </div>
        <div className="right">mandeep</div>
      </div>
    </div>
  );
}
