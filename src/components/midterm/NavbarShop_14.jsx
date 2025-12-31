"use client";

import Wrapper from "@/assets/wrappers/midterm/Shop_14";
import Link from "next/link";
import { useState } from "react";

const NavbarShop_14 = () => {
  const [showCart, setShowCart] = useState(false);

  function cartToggle() {
    setShowCart(!showCart);
  }

  return (
    <Wrapper>
      <div className="header">
        <Link href="/exams/midterm" className="logo-container">
          <img src="/images/midterm/assets/crown.svg" />
        </Link>
        <div className="options">
          <Link href="/" className="option">
            TKUDemo
          </Link>
          <Link href="/exams/midterm" className="option">
            Shop
          </Link>
          <Link href="/exams/midterm" className="option">
            Contact
          </Link>
          <Link href="/exams/midterm" className="option">
            Sign In
          </Link>
          <div className="cart-icon" onClick={cartToggle}>
            <img
              className="shopping-icon"
              src="/images/midterm/assets/shopping-bag.svg"
              alt=""
            />
          </div>
          <div className={`cart-dropdown ${showCart ? "show" : ""}`}>
            <div className="cart-items">
              <div className="cart-item">
                <img src="/images/midterm/hats/brown-cowboy.png" alt="item" />
                <div className="item-details">
                  <span className="name">Brown Cowboy</span>
                  <span className="price">4 * $35</span>
                </div>
              </div>
              <div className="cart-item">
                <img
                  src="/images/midterm/jackets/blue-jean-jacket.png"
                  alt="item"
                />
                <div className="item-details">
                  <span className="name">Blue Jean Jacket</span>
                  <span className="price">1 * $90</span>
                </div>
              </div>
            </div>
            <button className="custom-button">GO TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default NavbarShop_14;
