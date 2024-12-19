import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import logo from "./../assets/logo.svg"
import { links, social } from "../data";

const Sidebar = () => {
        const { isSideBarOpen, toggleSideBar } = useGlobalContext();

    return isSideBarOpen ? (
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src={logo} alt="Logo" className="logo" />
          <button className="close-btn" onClick={toggleSideBar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, icon, text } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="social-links">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    ) : (
      <></>
    );
}

export default Sidebar;