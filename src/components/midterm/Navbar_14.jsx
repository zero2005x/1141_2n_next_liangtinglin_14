"use client";
import React from "react";
import Wrapper from "../../assets/wrappers/Navbar_14";
import Link from "next/link";

const Navbar_14 = () => {
  return (
    <Wrapper>
      <header className="header">
        <div
          className="header-row container"
          role="navigation"
          aria-label="Main"
        >
          <div className="header-left">
            <div className="logo">
              <h1>TkuDemo</h1>
            </div>
          </div>
          <div className="header-right">
            <ul className="main-menu">
              <li className="menu-item">
                <Link href="/" className="active">
                  Home
                </Link>
              </li>
              <li className="menu-item dropdown">
                <Link href="/demo/blog_14/localjson_14">Demo +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/demo/grocery_14">Grocery_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/blog_14/localjson_14">
                        BlogLocalJson_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/blog_14/localjson2_context_14">
                        BlogLocalJson2_Context_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/node">ShopNode_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/supa">ShopSupa_14</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link href="/tutorials/t11_14">Tutorial +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/tutorials/t11_14">
                        T11_ErrorExamplePage_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/tutorials/t12_14">
                        T12_UseStateBasicPage_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/tutorials/t21_14">
                        T21_UseEffectCodeExamplePage_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/tutorials/context/1_propdrilling_14">
                        W13_PropDrilling_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/tutorials/context/2_context_people_14">
                        W13_ContextPeople_14
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link href="/exams/midterm">Midterm +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/exams/midterm">Midterm_HomePage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/hats_14">Hats_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/jackets_14">Jackets_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/mens_14">Mens_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/sneakers_14">Sneakers_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/womens_14">Womens_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p1_14">P1_StaticPage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p2_14">P2_StaticPage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/node">P3_NodePage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/supa">P4_SupaPage_14</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <button
              type="button"
              id="hamburger-icon"
              className="mobile-toggler"
              aria-label="Mobile Menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div id="mobile-menu" className="mobile-menu hidden slideInDown">
            <ul>
              <li className="menu-item">
                <Link href="/" className="active">
                  Home
                </Link>
              </li>
              <li className="menu-item dropdown">
                <Link href="/demo/blog_14/localjson_14">Demo +</Link>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/demo/grocery_14">Grocery_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/blog_14/localjson_14">
                        BlogLocalJson_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/blog_14/localjson2_context_14">
                        BlogLocalJson2_Context_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/node">ShopNode_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/supa">ShopSupa_14</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link href="/tutorials/t11_14">Tutorial +</Link>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/tutorials/t11_14">
                        T11_ErrorExamplePage_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/tutorials/t12_14">
                        T12_UseStateBasicPage_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/tutorials/t21_14">
                        T21_UseEffectCodeExamplePage_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/tutorials/context/1_propdrilling_14">
                        W13_PropDrilling_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/tutorials/context/2_context_people_14">
                        W13_ContextPeople_14
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link href="/exams/midterm">Midterm +</Link>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/exams/midterm">Midterm_HomePage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/hats_14">Hats_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/jackets_14">Jackets_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/mens_14">Mens_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/sneakers_14">Sneakers_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/womens_14">Womens_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p1_14">P1_StaticPage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p2_14">P2_StaticPage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/node">P3_NodePage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/supa">P4_SupaPage_14</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Navbar_14;
