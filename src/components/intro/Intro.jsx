import "./intro.scss"

import{useEffect,useRef} from "react";
import { init } from 'ityped'

export default function Intro(){

    // const name=useRef();
    const work=useRef();       
    useEffect(()=>{

        // init(name.current, { showCursor: false,
        //     backDelay:  1500, 
        //  strings: ['Singh', 'Mahar',"coder" ] });

        init(work.current, { showCursor: true,
            backDelay:  1500, backSpeed:60, strings: ['Developer', 'Lerner' ,'Artist' ] });

    },[]);
    
    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgcontainer">
                    <img src="assets/man.png" alt="thi is"></img>
                </div>

            </div>

            <div className="right">

                <div className="wrapper">
                    <h3>Hello There , i am </h3>
                    <h1>Mandeep <span >Singh</span></h1>
                    <h2>Web <span ref={work}> </span></h2>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="for down" />
                </a>
                </div>


            </div>

        </div>
    );
}