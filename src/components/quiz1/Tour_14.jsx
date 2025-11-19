import { FaMap } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { FaMugSaucer } from "react-icons/fa6";

import Wrapper from "../../assets/wrappers/quiz1/Tour_14";
const Tour_14 = ({ image, date, title, info, location, duration, cost }) => {
  return (
    <Wrapper>
      <article key={title} className="tour-card">
        <div className="tour-img-container">
          <img src={image} className="tour-img" alt={title} />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>{info}</p>
          <div className="tour-footer">
            <p>
              <span className="flex items-center justify-center gap-1.5">
                {location}
                {location === "lifestyle" ? <FaMugSaucer /> : <FaGlobe />}
              </span>
            </p>{" "}
            <p>From ${cost} </p>
            <p> {duration} Days</p>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};
export default Tour_14;
