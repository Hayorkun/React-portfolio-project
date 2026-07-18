import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../css/custom-css.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "oklch(75% 0.183 55.934)" : "#ffff",
    textDecoration: isActive ? "underline" : "none",
  });

  // Lock body scroll while sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <>
      <nav className="border-b border-orange-300/50 h-16 flex justify-center items-center px-5 md:px-10 sticky -top-1 z-20 inset-0 bg-black/50 backdrop-blur-xl">
        <div className="my-max-width w-full flex justify-between">
          <div>
            <NavLink
              to="/"
              className="text-orange-400 font-brand leading-tight font-bold text-2xl"
            >
              AyomiCode
            </NavLink>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <ul className="flex gap-5">
              <li>
                <NavLink style={navLinkStyles} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink style={navLinkStyles} to="/about">About</NavLink>
              </li>
              <li>
                <NavLink style={navLinkStyles} to="/projects">Project</NavLink>
              </li>
              <li>
                <NavLink style={navLinkStyles} to="/skills">Skills</NavLink>
              </li>
              <li>
                <NavLink style={navLinkStyles} to="/contact">Contact</NavLink>
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
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Overlay: sibling of nav, not a child — avoids the backdrop-filter
          containing-block trap and lets z-index behave predictably */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar: also a sibling of nav, so its `position: fixed` in
          custom-css.css is anchored to the real viewport */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          <X size={20} />
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
            <NavLink style={navLinkStyles} to="/" onClick={() => setSidebarOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/about" onClick={() => setSidebarOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/projects" onClick={() => setSidebarOpen(false)}>
              Project
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/skills" onClick={() => setSidebarOpen(false)}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/contact" onClick={() => setSidebarOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>

        <NavLink to="/contact" className="hire-mBtn" onClick={() => setSidebarOpen(false)}>
          Hire me
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;