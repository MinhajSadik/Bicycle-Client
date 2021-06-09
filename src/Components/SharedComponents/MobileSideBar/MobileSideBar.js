import React from "react";
import "./MobileSideNav.css";
import menuBar from "../../../images/menubar.png";
import logo from "../../../images/logo2.png";

import Modal from "react-modal";
// import Sidebar from "../Sidebar/Sidebar";
import MobileNavItem from "./MobileNavItem";

const customStyles = {
    content: {
        top: "100px",
        right: "auto",
        bottom: "auto",

        transform: "translateX(-20% )",
        width: "250px",
        zIndex: "1",
    },
};

Modal.setAppElement("#root");

const MobileSideBar = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="menubar">
                <img src={menuBar} alt="" onClick={openModal} />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <MobileNavItem closeModal={closeModal} />
                </Modal>
            </div>
            <div className="MobileLogo">
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default MobileSideBar;
