import { useState, useEffect } from "react";
// import Wrapper from "../../assets/wrappers/quiz1/Tour_14";
import Tour_14 from "./Tour_14";
const ToursFeatured_14 = () => {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/tour_14/featured"
      );
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className="quiz1">
      <section className="section-title" id="tours">
        <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
          <h4>Tours From Node -- Liangtinglin, 9134100149</h4>
        </div>
      </section>

      <section className="section-center featured-center">
        <div className="section-center featured-center">
          {tours.map((tour) => {
            return <Tour_14 key={tour.id} {...tour} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default ToursFeatured_14;
