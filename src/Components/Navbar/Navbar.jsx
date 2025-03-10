import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./navbar.css";
import logo from "../images/logo-2-yellow.png";
import mobilelogo from "../images/logo-yellow.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const storedActivePage = localStorage.getItem("activePage");
    if (storedActivePage) {
      setActive(storedActivePage);
    } else {
      setActive(location.pathname);
    }
  }, [location.pathname]);

  const handleSetActive = (name) => {
    setActive(name);
    localStorage.setItem("activePage", name);
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <nav className="z-50 p-3 Navbar-main" style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <img src={logo} alt="Logo" className="LOGOSSS" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`${active === path ? "text-orange-500 border-b-2 border-orange-500" : "hover:text-orange-500"}`}
              onClick={() => handleSetActive(path)}
            >
              {name}
            </Link>
          ))}

          {/* Services (Clickable + Dropdown) */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="hover:text-orange-500 focus:outline-none"
              onClick={() => {
                navigate("/services");
                handleSetActive("/services");
              }}
            >
              Services <i class="fa-solid fa-angle-down"></i>
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg p-3 w-48 mt-2 group-hover:block hidden">
                {[
                  { name: "App Development", path: "/services/MobileApp" },
                  { name: "Web Development", path: "/services/WebMain" },
                  { name: "Game Development", path: "/services/Game" },
                  { name: "Digital Marketing", path: "/services/digital-marketing" },
                  { name: "UI/UX Design", path: "/services/ui-ux" },
                ].map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className="block text-black hover:text-orange-500 p-2"
                    onClick={() => handleSetActive(path)}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          {[{ name: "Career", path: "/career" }, { name: "Portfolio", path: "/portfolio" }, { name: "Contact Us", path: "/contact" }].map(
            ({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`${active === path ? "text-orange-500 border-b-2 border-orange-500" : "hover:text-orange-500"}`}
                onClick={() => handleSetActive(path)}
              >
                {name}
              </Link>
            )
          )}
        </div>

        {/* Take a Solution Button */}
        <div className="hide-on-mobile">
          <Link to="/contact" className="ostech-btn" onClick={() => handleSetActive("/contact")}>
            Take Solution
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(true)}>
          <FiMenu />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-[#232429] text-white transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 p-4`}>
        {/* Close Button */}
        <div className="flex justify-between items-center mb-6">
          <img src={mobilelogo} alt="" className="mobilelogo" />
          <button onClick={() => setMenuOpen(false)}>
            <FiX className="text-2xl" />
          </button>
        </div>
        git remote add origin https://github.com/piyush-talsaniya/brain-art.git
        git branch -M main
        git push -u origin main
        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          {[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }, { name: "Career", path: "/career" }, { name: "Portfolio", path: "/portfolio" }, { name: "Contact Us", path: "/contact" }].map(({ name, path }) => (
            <Link key={name} to={path} className={`${active === path ? "text-orange-500 border-l-4 border-orange-500 pl-2" : "hover:text-orange-500"}`} onClick={() => handleSetActive(path)}>
              {name}
            </Link>
          ))}

          {/* Mobile Services (Clickable + Dropdown) */}
          <div className="relative">
            <button
              className="flex justify-between items-center w-full text-left text-white hover:text-orange-500"
              onClick={() => {
                navigate("/services");
                setMobileDropdownOpen(!mobileDropdownOpen);
              }}
            >
              Services
              <span className="text-xl">{mobileDropdownOpen ? "▲" : "▼"}</span>
            </button>

            {mobileDropdownOpen && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                {[
                  { name: "App Development", path: "/services/MobileApp" },
                  { name: "Web Development", path: "/services/WebMain" },
                  { name: "Game Development", path: "/services/Game" },
                  { name: "Digital Marketing", path: "/services/digital-marketing" },
                  { name: "UI/UX Design", path: "/services/ui-ux" },
                ].map(({ name, path }) => (
                  <Link key={name} to={path} className="text-gray-300 hover:text-orange-500 pl-4" onClick={() => handleSetActive(path)}>
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Take Solution Button */}
        <div className="mt-6">
          <Link to="/contact" className="ostech-btn" onClick={() => handleSetActive("/contact")}>
            Take Solution
          </Link>
        </div>

        <div className="location-mobile">
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:info@brainartit.in">
            info@brainartit.in</a>
        </div>

        <div className="call-mobile">
          <i className="fa-solid fa-phone"></i>
          <a href="tel:+91 93272 28578">+91 93272 28578
          </a>
        </div>

        <div className="icon-div-mobile">
          <a href="https://www.linkedin.com/company/102210949/admin/dashboard/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://www.facebook.com/people/Brainart-it-soution/61558498887261/" target="_blank"><i class="fa-brands fa-facebook-f" style={{ padding: "10px 13px" }}></i></a>
          <a href="https://www.instagram.com/brainart_it_solution/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://join.skype.com/invite/vHEhLX46XvDt" target="_blank"><i class="fa-brands fa-skype"></i></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
