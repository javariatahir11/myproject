import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaProjectDiagram,
  FaShoppingCart,
  FaUser,
  FaCog,
  FaFileAlt,
  FaBlog,
  FaUsers,
  FaChevronRight,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";
import "./sidebar.css";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false); // mobile toggle

  const toggleMenu = (menu) => setOpenMenu(openMenu === menu ? null : menu);
  const toggleSidebar = () => setIsMobileOpen(!isMobileOpen);

  const ArrowIcon = ({ menu }) =>
    openMenu === menu ? (
      <FaChevronDown className="arrow" />
    ) : (
      <FaChevronRight className="arrow" />
    );

  return (
    <>
      {/* Hamburger Button */}
      <button className="mobile-hamburger md:hidden" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Overlay */}
      {isMobileOpen && <div className="mobile-overlay md:hidden" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="logo">
          <FaUser /> ByeWind
        </div>

        {/* Favorites Section */}
        <div className="section">
          <div className="section-title">Favorites</div>
          <ul>
            <li className="item">
              <FaTachometerAlt className="icon" /> Overview
            </li>
            <li className="item">
              <FaShoppingCart className="icon" /> eCommerce
            </li>
            <li className="item">
              <FaProjectDiagram className="icon" /> Projects
            </li>
          </ul>
        </div>

        {/* Dashboards Section */}
        <div className="section">
          <div className="section-title">Dashboards</div>
          <ul>
            <li className="item-parent">
              <div className="item" onClick={() => toggleMenu("dashboardOverview")}>
                <FaTachometerAlt className="icon" /> Overview
                <ArrowIcon menu="dashboardOverview" />
              </div>
              {openMenu === "dashboardOverview" && (
                <ul className="sub-menu open">
                  <li className="sub-item">
                    <FaProjectDiagram className="icon" /> Projects
                  </li>
                  <li className="sub-item">
                    <FaShoppingCart className="icon" /> eCommerce
                  </li>
                  <li className="sub-item">
                    <FaFileAlt className="icon" /> Reports
                  </li>
                </ul>
              )}
            </li>

            <li className="item">
              <FaShoppingCart className="icon" /> eCommerce
            </li>

            <li className="item-parent">
              <div className="item" onClick={() => toggleMenu("dashboardProjects")}>
                <FaProjectDiagram className="icon" /> Projects
                <ArrowIcon menu="dashboardProjects" />
              </div>
              {openMenu === "dashboardProjects" && (
                <ul className="sub-menu open">
                  <li className="sub-item">
                    <FaProjectDiagram className="icon" /> Active
                  </li>
                  <li className="sub-item">
                    <FaProjectDiagram className="icon" /> Archived
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Pages Section */}
        <div className="section">
          <div className="section-title">Pages</div>
          <ul>
            <li className="item-parent">
              <div className="item" onClick={() => toggleMenu("pagesOverview")}>
                <FaFileAlt className="icon" /> Overview
                <ArrowIcon menu="pagesOverview" />
              </div>
              {openMenu === "pagesOverview" && (
                <ul className="sub-menu open">
                  <li className="sub-item">
                    <FaProjectDiagram className="icon" /> Projects
                  </li>
                  <li className="sub-item">
                    <FaProjectDiagram className="icon" /> Campaigns
                  </li>
                  <li className="sub-item">
                    <FaFileAlt className="icon" /> Documents
                  </li>
                  <li className="sub-item">
                    <FaUsers className="icon" /> Followers
                  </li>
                </ul>
              )}
            </li>

            <li className="item-parent">
              <div className="item" onClick={() => toggleMenu("userProfile")}>
                <FaUser className="icon" /> User Profile
                <ArrowIcon menu="userProfile" />
              </div>
              {openMenu === "userProfile" && (
                <ul className="sub-menu open">
                  <li className="sub-item">
                    <FaCog className="icon" /> Account
                  </li>
                  <li className="sub-item">
                    <FaUsers className="icon" /> Corporate
                  </li>
                  <li className="sub-item">
                    <FaBlog className="icon" /> Blog
                  </li>
                  <li className="sub-item">
                    <FaUsers className="icon" /> Social
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="footer">Powered by SnowUI</div>
      </div>
    </>
  );
};

export default Sidebar;