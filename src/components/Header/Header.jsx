import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import { FaHome, FaBlogger } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

const Header = () => {
  return (
    <header className="bg-pink-500 mt-3 font-extrabold text-xl sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
            </div>
            <a className="btn btn-ghost text-xl font-extrabold text-white">
              WAHAB <span className="text-purple-700">RUBEL</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex p-8">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-white font-extrabold" : "text-gray-300"
                  }
                >
                 <FaHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : "text-gray-300"
                  }
                >
                  <FcAbout /> About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : "text-gray-300"
                  }
                >
                 <FaBlogger /> Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skill"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : "text-gray-300"
                  }
                >
                  Skill
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : "text-gray-300"
                  }
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : "text-gray-300"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : "text-gray-300"
                  }
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
          <FaWhatsapp />
            <Link className="btn">Button</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
