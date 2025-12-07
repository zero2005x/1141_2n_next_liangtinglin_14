"use client";
import React, { use } from "react";
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
                <Link href="/exams/" className="active">
                  Home
                </Link>
              </li>

              <li className="menu-item mega-menu">
                <Link href="#">Mega menu +</Link>
                <div className="mega-menu-wrapper slideInUp">
                  <div className="mega-menu-col">
                    <h5>Menu block 1</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link href="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 2</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link href="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 3</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link href="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 4</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link href="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="menu-item dropdown">
                <Link href="#">Demo +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/exams/booklist_14">W2-BookList_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/static_14">W3-BlogStatic_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/localjson_14">
                        W3-BlogLocalJson_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/node_14">W4-BlogNode_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/supa_14">W5-BlogSupa_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/localjson2_14">
                        W7-BlogLocalJson2_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/node">W11_ShopNode_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/demo/shop_14/supa">
                        w12_next_fullstack_14
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link href="#">Tutorial +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/exams/tutorials/t11_14">
                        T11_ErrorExamplePage_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/tutorials/t12_14">
                        T12_UseStateBasicPage_14
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/tutorials/t21_14">
                        T21_UseEffectCodeExamplePage_14
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link href="#">Quiz1 +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/exams/quiz1">Quiz1_HomePage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/quiz1/static_14">TourStatic_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/quiz1/static2_14">TourStatic2_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/quiz1/static3_14">TourStatic3_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/quiz1/node_14">TourNode_14</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link href="#">Midterm +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/exams/midterm">Midterm_HomePage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p1_14">P1_StaticPage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p2_14">P2_StaticPage_14</Link>
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
                <Link href="#">Blog</Link>
              </li>
              <li className="menu-item">
                <Link href="#">Contact</Link>
              </li>
            </ul>
            <Link
              href="#"
              id="hamburger-icon"
              className="mobile-toggler"
              aria-label="Mobile Menu"
            >
              <i className="fas fa-bars"></i>
            </Link>
          </div>

          <div id="mobile-menu" className="mobile-menu hidden slideInDown">
            <ul>
              <li className="menu-item">
                <Link href="/exams/" className="active">
                  Home
                </Link>
              </li>

              <li className="menu-item mega-menu">
                <Link href="#">Mega menu +</Link>
                <div className="mega-menu-wrapper">
                  <div className="mega-menu-col">
                    <h5>Menu block 1</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link href="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 2</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link href="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 3</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link href="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 4</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link href="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="menu-item dropdown">
                <Link href="#">Services +</Link>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="#">Service 1</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="#">Service 2</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="#">Service 3</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="#">Service 4</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link href="#">Tutorial +</Link>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="#">Tutorial 1</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="#">Tutorial 2</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="#">Tutorial 3</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link href="#">Midterm +</Link>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/exams/midterm">Midterm_HomePage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p1_14">P1_StaticPage_14</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/exams/midterm/p2_14">P2_StaticPage_14</Link>
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
                <Link href="#">Blog</Link>
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
