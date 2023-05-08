import "./testimonials.scss"

export default function Testimonials(){



    const data=[
        {
            id:1,
            img:"assets/test.jpg",
            des:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quaerat quam voluptate recusandae, blanditiis fugiat sequi aperiam laborum natus, beatae sit ipsa.",
            nam:"Kriti",
            pos:"SDE 2 at amazon"
        },
        {
            id:2,
            img:"assets/test.jpg",
            des:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quaerat quam voluptate recusandae, blanditiis fugiat sequi aperiam laborum natus, beatae sit ipsa.",
            nam:"Kriti",
            pos:"SDE 2 at amazon",
            feature:true
        },
        {
            id:3,
            img:"assets/test.jpg",
            des:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quaerat quam voluptate recusandae, blanditiis fugiat sequi aperiam laborum natus, beatae sit ipsa.",
            nam:"Kriti",
            pos:"SDE 2 at amazon"
        }
       
    ]

    return(
        <div className="testimonials" id="testimonials">
           <h1>Testimonials</h1>
           <div className="container">

            {data.map((d)=>(
                 <div className={d.feature?"card feature":"card"}>
                      <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img src={d.img}   className="pic" alt="" />
                        <img src="assets/youtube.png"   className="right" alt="" />

                      </div>
                      <div className="mid">
                        <p>
                            {d.des}
                        </p>

                      </div>
                      <div className="bottom">
                            
                            <h3>{d.nam}</h3>
                            <h4>{d.pos}</h4>

                        
                      </div>

                 </div>

                 ))}
                
               
           </div>
           
        </div>
    )
}