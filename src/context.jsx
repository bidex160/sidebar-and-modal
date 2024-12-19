import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }
      const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };
  return (
    <AppContext.Provider value={{ isModalOpen, isSideBarOpen ,toggleSideBar, toggleModal }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
