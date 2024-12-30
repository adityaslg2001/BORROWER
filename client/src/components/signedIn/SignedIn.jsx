import React, { useEffect,useState } from "react";
import "./SignedIn.css";
import { useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
// import FontAwesomeIcon from "font-awesome";
// import {faUser} from "font-awesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faUser, faShop, faList, faPlus,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function ConfirmationModal({ show, onHide, onConfirm }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="none"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="log-out-modal">
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm Logout
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 className="danger-text">Are you sure you want to log out?</h3>
        <p className="modal-para">You will need to log back in to access your account.</p>
      </Modal.Body>
      <Modal.Footer className="log-out-modal">
        <Button variant="secondary" onClick={onHide} className="cancel-btn">
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm} className="danger-danger-btn">
          Log Out
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function SignedIn({ username }) {
  const navigate = useNavigate();
  const storedUsername = username || localStorage.getItem("username");
  // const [isDropdownOpen, setDropdownOpen] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    if (!storedUsername) {
      navigate("/error");
    }
  }, [storedUsername, navigate]);
  
  if (!storedUsername || storedUsername==="") {
    // navigate("/error");
    return null; 
  }

  const firstLetter=storedUsername[0].toUpperCase();
  const toggleDropdown = () => {
    const dropdown = document.querySelector(".dropdown-menu");
    if(dropdown) 
    {
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }
  };
  const handleSignOut = () => {
    
    localStorage.removeItem("username");
    localStorage.removeItem("token"); 
    sessionStorage.removeItem("token"); 

    
    navigate("/login"); 
  };
  

  return (
    <div className="sign-in-container">
      <div className="sign-in-box" onClick={toggleDropdown}>
        <span className="sign-in-initial">{firstLetter}</span>
      </div>
      {(
        <div className="dropdown-menu">
          <ul>
            <li><FontAwesomeIcon icon={faUser} className="move-right"/>Profile</li>
            <li><FontAwesomeIcon icon={faShop} className="move-right"/>Orders</li>
            <li><FontAwesomeIcon icon={faList} className="move-right"/>Listings</li>
            <li style={{ color:"rgb(212, 0, 0)", fontWeight:"bold"}}><FontAwesomeIcon icon={faPlus} className="move-right"/>Add Product</li>
            <li onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faRightFromBracket} className="move-right"/>Sign Out</li>
          </ul>
        </div>
      )}
      <ConfirmationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onConfirm={() => {
          setModalShow(false); 
          handleSignOut(); 
        }}
      />
    </div>
  );
}

