import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logo2.png";
import profileImage from "../../../images/profile.png";
import "./Navbar.css";
import UserAction from "./UserAction/UserAction";

const NavBar = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useContext(UserContext);
    const [toggle, setToggle] = useState("none");
    const profileOpen = () => {
        toggle === "none" ? setToggle(" ") : setToggle("none");
    };
    const profileClose = () => {
        setToggle(" ");
    }

    return (
        <Navbar expand="lg" className="NavBarPart">
            <Navbar.Brand href="/home" className="logo">
                <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <div className="navMenu">
                        <Link to="/home">Home</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/dashboard/dashboardBookNow">
                            Services
						</Link>
                        {user?.email ? (
                            <Button
                                onClick={profileOpen}
                                className="profileBtn"
                            >
                                <img
                                    src={
                                        user?.photoURL ||
                                        profileImage
                                    }
                                    alt=""
                                />
								Profile
                                <FontAwesomeIcon
                                    className="ml-2"
                                    icon={faSortDown}
                                />
                            </Button>
                        ) : (
                            <Link to="/login">LogIn</Link>
                        )}
                    </div>
                </Nav>
            </Navbar.Collapse>
            <div className="nestedNav" style={{ display: toggle }} onClick={profileClose}>
                <UserAction />
            </div>
        </Navbar>
    );
};

export default NavBar;
