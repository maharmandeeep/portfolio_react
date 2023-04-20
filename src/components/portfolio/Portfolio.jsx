import { useState, useEffect } from "react";
import "./portfolio.scss";
import Portfoliolist from "../portfoliplist/Portfoliolist";
import { Feature ,Web,Mobile,Content,Design} from "./obj";

export default function Portfolio() {
  const [selected, setSelected] = useState("Feature");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "Feature",

      title: "Feature",
    },
    {
      id: "Web",
      title: "Webapp",
    },
    {
      id: "Mobile",
      title: "Mobileapp",
    },

    {
      id: "Design",
      title: "Design",
    },
    {
      id: "Content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "Feature":
        setData(Feature );
        break;
      case "Web":
        setData(Web);
        break;
      case "Mobile":
        setData(Mobile);
        break;
      case "Design":
        setData(Design);
        break;
      case "Content":
        setData(Content);
        break;

      default:
        setData(Feature);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <Portfoliolist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="demo" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
