import { useState } from "react";
import "./contacts.scss";

function Contact() {

    const [Trigger,setTrigger]=useState(false);

  const handleClick =()=>{
   setTrigger(true);
  }
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="left">
          <img src="assets/shake.svg" alt="demo" />
        </div>
        <div className="right">
          <div className="outer">
            <form onSubmit={handleClick}>
              <input type="email" className="firstin" placeholder="Email" />
              <textarea placeholder="Messgae" className="secondin"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
          {Trigger && <span>We will replay soon :)</span>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
