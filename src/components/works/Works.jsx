import { useState } from "react";
import "./works.scss";
import { Transform } from "@mui/icons-material";

export default function Works() {
   
  const [Element,setElement]=useState(0);



  const data = [ 
    { id: 1, 
      icon:"assets/mobile.png",
      title: "web Design", 
      des: 
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam perferendis nobis, ad fuga eligendi laborum. Ad fuga hic facilis repellat veniam doloremque.", 

      img: "https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?size=626&ext=jpg&uid=R99809029&ga=GA1.2.1497100267.1681232132&semt=sph" } 
      ,
    { id: 2,
      icon:"assets/globe.png",
      title: "Mobile Application", 
      des: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam perferendis nobis, ad fuga eligendi laborum. Ad fuga hic facilis repellat veniam doloremque.", 

      img: "https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?size=626&ext=jpg&uid=R99809029&ga=GA1.2.1497100267.1681232132&semt=sph" } 
      ,
    { id: 3, 
      icon:"assets/writing.png",
      title: "Branding", 
      des: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam perferendis nobis, ad fuga eligendi laborum. Ad fuga hic facilis repellat veniam doloremque.", 

      img: "https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?size=626&ext=jpg&uid=R99809029&ga=GA1.2.1497100267.1681232132&semt=sph" } 
      
    
    
    
    ];


    const  handleClick=(key)=>{
      key==="left"?setElement(Element>0?(Element-1):2):
      setElement(Element<(data.length-1)?(Element+1):0);
    };
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${Element*100}vw)`}}>
        {data.map((d)=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imagecontainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.des}
                  
                </p>
              </div>
            </div>

            <div className="right">
              <img
                src={d.img}
                alt="demo"
              />
            </div>
          </div>
        </div>

        ))}

        
         
        
      </div>

      <img src="assets/arrow.png" className="arrow left" 
      
      onClick={()=>handleClick("left")} alt="demo " />
        

       
        <img src="assets/arrow.png " className="arrow right" 
        onClick={()=>handleClick()} alt="demo" />
    </div>
  );
}
 