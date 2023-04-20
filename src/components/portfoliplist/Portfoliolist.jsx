import "./portfoliolist.scss";

function Portfoliolist({id, title, active, setSelected }) {
  return <li className={active ? "active" : " "} onClick={()=>setSelected(id)}>{title}</li>;
}

export default Portfoliolist; 
