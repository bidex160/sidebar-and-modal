import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";


const Modal = () => {
    const { isModalOpen, toggleModal } = useGlobalContext();
    return (
      <>
        {isModalOpen ? (
          <div className="modal-overlay">
            <div className="modal-container">
              <h3>Modal Content</h3>
              <button
                className="close-modal-btn"
                onClick={toggleModal}
                        >
                            <FaTimes />
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
        
}


export default Modal;