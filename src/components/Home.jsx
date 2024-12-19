import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Home = () => {
    const {  toggleSideBar, toggleModal } = useGlobalContext();
    return (
      <main>
        <button onClick={toggleSideBar} className="sidebar-toggle">
          <FaBars />
        </button>
        <button onClick={toggleModal} className="btn">
         Show Modal
        </button>
      </main>
    );
};

export default Home;
