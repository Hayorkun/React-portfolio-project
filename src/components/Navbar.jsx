import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import "../css/custom-css.css"

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "oklch(75% 0.183 55.934)" : "#ffff",
    textDecoration: isActive ? "underline" : "none",
  });

  return (
    <>
      <nav className="border-b border-orange-300/50 h-16 flex justify-center items-center p-5 md:p-10 sticky top-0 z-10 bg-black">
        <div className="my-max-width w-full flex justify-between">
          <div>
            <NavLink
              to="/"
              className="text-orange-400 font-brand leading-tight font-bold text-2xl "
            >
              AyomiCode
            </NavLink>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <ul className="flex gap-5">
              <li>
                <NavLink style={navLinkStyles} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={navLinkStyles} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink style={navLinkStyles} to="/projects">
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink style={navLinkStyles} to="/skills">
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink style={navLinkStyles} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <NavLink
              to="/contact"
              className="border border-orange-400 text-sm text-orange-400 px-2 py-1 rounded-lg hover:bg-orange-400 hover:text-white hover:translate-y-1 transition"
            >
              Hire me
            </NavLink>
          </div>

          <button
            className="block md:hidden items-center cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </button>
          {sidebarOpen && (
            <div className="fixed z-0" onClick={() => setSidebarOpen(false)} />
          )}

          <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>
              <i className="fa-solid fa-x"></i>
            </button>
            <div className="text-3xl text-white w-20 h-20 bg-orange-400/70 flex justify-center items-center border-4 border-orange-500/80 rounded-full">
              <h2>AY</h2>
            </div>
            <div className="m-0">
              <h2 className="text-md text-white">Ayomide Yerokun</h2>
              <span className="text-lg text-white">Frontend Developer</span>
            </div>

            <ul>
              <li>
                <NavLink
                  style={navLinkStyles}
                  to="/"
                  onClick={() => setSidebarOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={navLinkStyles}
                  to="/about"
                  onClick={() => setSidebarOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={navLinkStyles}
                  to="/projects"
                  onClick={() => setSidebarOpen(false)}
                >
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={navLinkStyles}
                  to="/skills"
                  onClick={() => setSidebarOpen(false)}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={navLinkStyles}
                  to="/contact"
                  onClick={() => setSidebarOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink to="/contact" className="hire-mBtn">
              Hire me
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
