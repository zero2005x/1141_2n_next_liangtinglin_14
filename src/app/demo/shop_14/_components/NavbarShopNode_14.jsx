"use client";
import React, { useState } from "react";
import Wrapper from "../_wrapper/Shop_14";
import Link from "next/link";

const NavbarShopNode_14 = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartToggle = () => setIsCartOpen(!isCartOpen);

  return (
    <Wrapper>
      <div className="header">
        <Link href="/" className="logo-container">
          <img src="/images/midterm/assets/crown.svg" />
        </Link>
        <div className="options">
          <Link href="/" className="option">
            TKUDemo
          </Link>
          <Link href="./overview.html" className="option">
            Shop
          </Link>
          <Link href="/shop" className="option">
            Contact
          </Link>
          <Link href="/signin" className="option">
            Sign In
          </Link>
          <div className="cart-icon" onClick={cartToggle}>
            <img
              className="shopping-icon"
              src="/images/midterm/assets/shopping-bag.svg"
              alt=""
            />
          </div>
          {isCartOpen && (
            <div className="cart-dropdown">
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
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default NavbarShopNode_14;
