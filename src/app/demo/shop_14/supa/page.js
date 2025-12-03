import Wrapper from "@/assets/wrappers/midterm/Shop_14";
import Link from "next/link";

export default function Home() {
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
            <Link href="/demo/shop_14/supa/hats" className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">SHOP NOW</span>
            </Link>
          </div>
          <div className="menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/jackets.png"
              alt="jackets"
            />
            <Link href="/demo/shop_14/supa/jackets" className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">SHOP NOW</span>
            </Link>
          </div>
          <div className="menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/sneakers.png"
              alt="sneakers"
            />
            <Link href="/demo/shop_14/supa/sneakers" className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">SHOP NOW</span>
            </Link>
          </div>
          <div className="large menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/womens.png"
              alt="womens"
            />
            <Link href="/demo/shop_14/supa/womens" className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </Link>
          </div>
          <div className="large menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/mens.png"
              alt="mens"
            />
            <Link href="/demo/shop_14/supa/mens" className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
