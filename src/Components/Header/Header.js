import React, { useState, useEffect } from "react";
import "./Header.css";
import logoImg from "./../../image/logo.webp";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import HamburgerMenu from "./HamburgerMenu";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkBackground, setDarkBackground] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      setDarkBackground(true);
    } else {
      setDarkBackground(false);
    }
  }, [isSidebarOpen]);

  return (
    <>
      <div className={isDarkBackground ? "dark-background" : ""}></div>
      <div className="header-container">
        <div className="hamburger">
          <RxHamburgerMenu
            size={30}
            isOpen={isSidebarOpen}
            onClick={toggleSidebar}
          />
          <HamburgerMenu
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
          ></HamburgerMenu>
        </div>
        <div className="header-right-side">
          <div className="logo">
            <Link to='/'>
              <img src={logoImg} alt="logo" />
            </Link>
          </div>
          <div className="menu-container">
            <ul>
              <li>
                <NavLink
                  to="/frontend"
                  style={{ color: "#3f3f46", textDecoration: "none" }}
                >
                  فرانت اند
                  <IoIosArrowDown />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/security"
                  style={{ color: "#3f3f46", textDecoration: "none" }}
                >
                  امنیت
                  <IoIosArrowDown />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/python"
                  style={{ color: "#3f3f46", textDecoration: "none" }}
                >
                  پایتون
                  <IoIosArrowDown />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/php"
                  style={{ color: "#3f3f46", textDecoration: "none" }}
                >
                  پی اچ پی
                  <IoIosArrowDown />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/levelup"
                  style={{ color: "#3f3f46", textDecoration: "none" }}
                >
                  ارتقای مهارت ها
                  <IoIosArrowDown />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/documents"
                  style={{ color: "#3f3f46", textDecoration: "none" }}
                >
                  مقالات
                  <IoIosArrowDown />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-left-side">
          <div className="search-box">
            <input type="text" placeholder="جستجو" />
            <CiSearch size={25} />
          </div>
          <div className="night-mode">
            <IoMoonOutline size={25} />
          </div>
          <div className="user-panel">
            <CiUser size={25} />
          </div>
        </div>
      </div>
    </>
  );
}

