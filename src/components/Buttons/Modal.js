import "./Modal.css";
import { NavLink } from "react-router-dom";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="modal-buttons">
          <button type="button" className="continue-btn" onClick={handleClose}>
            <NavLink to="/expenses"></NavLink>
            Continue
          </button>
          <button type="button" className="close-btn" onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
