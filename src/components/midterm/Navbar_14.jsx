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
                <Link href="#">Demo +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/booklist_14">W2-BookList_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/static_14">W3-BlogStatic_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/localjson_14">W3-BlogLocalJson_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/node_14">W4-BlogNode_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="#">W6-BlogSupa_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/localjson2_14">W7-BlogLocalJson2_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/node">W11-ShopNode_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/supa">W12-ShopSupa_14</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link href="#">Tutorials +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/tutorials/t11_14">
                        T11_ErrorExamplePage_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/tutorials/t12_14">
                        T12_UseStateBasicsPage_14
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
                <Link href="#">Midterm +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/exams/midterm/p1_14">P1_StaticPage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p2_14">P2_StaticPage2_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p3_14">P3_NodePage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p4_14">P4_SupaPage_14</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item">
                <Link href="#">Contact</Link>
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
                <Link href="#">Demo +</Link>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/booklist_14">W2-BookList_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/static_14">W3-BlogStatic_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/localjson_14">W3-BlogLocalJson_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/node_14">W4-BlogNode_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="#">W6-BlogSupa_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/localjson2_14">W7-BlogLocalJson2_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/node">W11-ShopNode_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/supa">W12-ShopSupa_14</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link href="#">Tutorials +</Link>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/tutorials/t11_14">
                        T11_ErrorExamplePage_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/tutorials/t12_14">
                        T12_UseStateBasicsPage_14
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
                <Link href="#">Midterm +</Link>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/exams/midterm/p1_14">P1_StaticPage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p2_14">P2_StaticPage2_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p3_14">P3_NodePage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p4_14">P4_SupaPage_14</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item">
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Navbar_14;
