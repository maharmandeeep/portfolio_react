import "./works.scss";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
                <div className="leftcontainer">
                    <div className="imagecontainer">
                        <img src="assets/mobile.png" alt="" />
                    </div>
                    <h2>title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam perferendis nobis, ad fuga eligendi laborum. Ad fuga hic facilis repellat veniam doloremque.</p>


                </div>
               
            </div>

            <div className="right">
              <img
                src="https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?size=626&ext=jpg&uid=R99809029&ga=GA1.2.1497100267.1681232132&semt=sph"
                alt="demo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


