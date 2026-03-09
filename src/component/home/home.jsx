import "./home.css";   ///
import { FaBars, FaSearch, FaBell, FaUser, FaMoon, FaSun } from "react-icons/fa";
import DashboardCenter from "../DashboardCenter/DashboardCenter";
import { TiBook } from "react-icons/ti";
import { AiOutlineStar } from "react-icons/ai";
function Home({ darkMode, setDarkMode }) {

  return (

    <div className="main">

      <header className="header">

        <div className="left">
          <TiBook className="menuIcon"/>
                     <AiOutlineStar className="menuIcon"/>
          <span className="title">Dashboards</span>
          <span className="arrow">›</span>
          <span className="sub">Default</span>
        </div>

        <div className="searchBox">
          <FaSearch className="searchIcon"/>
          <input type="text" placeholder="Search..." />
        </div>

        <div className="right">

          <div className="iconBox" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun/> : <FaMoon/>}
          </div>

          <div className="iconBox">
            <FaBell/>
          </div>

          <div className="iconBox">
            <FaUser/>
          </div>

        </div>

      </header>

      <div className="content">
        <DashboardCenter/>
      </div>

    </div>

  );
}

export default Home;