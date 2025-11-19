import Wrapper from "@/assets/wrappers/midterm/Shop_14";
import Link from "next/link";

const P2_StaticPage_14 = () => {
  return (
    <Wrapper>
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/hats.png"
              alt="hats"
            />
            <a href="/exams/midterm/hats_14" className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/jackets.png"
              alt="jackets"
            />
            <a href="/exams/midterm/jackets_14" className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/sneakers.png"
              alt="sneakers"
            />
            <a href="/exams/midterm/sneakers_14" className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="large menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/womens.png"
              alt="womens"
            />
            <a href="/exams/midterm/womens_14" className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="large menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/mens.png"
              alt="mens"
            />
            <a href="/exams/midterm/mens_14" className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P2_StaticPage_14;
