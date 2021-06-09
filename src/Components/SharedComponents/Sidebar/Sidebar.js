import React from "react";
import "./Sidebar.css";
import logo from "../../../images/footerLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faListAlt,
    // faTasks,
    // faPlus,
    // faUserAlt,
    // faUserShield,
    faClipboard,
    faSignOutAlt,
    faCartPlus,
    faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../App";
import { useState } from "react";
import { useEffect } from "react";
import {
    initializeFramework,
    logOutMethod,
} from "../../LogInComponents/LoginManegment/LoginManegment";
import axios from "axios";
import AdminSideBar from "./AdminSideBar";
// import { Nav, Navbar } from "react-bootstrap";

const Sidebar = () => {
    initializeFramework();

    const [user, setUser] = useContext(UserContext);
    let { url } = useRouteMatch();

    const [allAdmin, setAllAdmin] = useState(null);
    useEffect(() => {
        axios({
            method: "get",
            url: "https://salty-retreat-17704.herokuapp.com/allAdmin",
            responseType: "stream",
        }).then(function (response) {
            setAllAdmin(response.data);
        });
    }, []);

    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        const check = allAdmin?.find(
            (admin) => admin.email === user.email
        );
        if (check) {
            setIsAdmin(true);
        }
    }, [allAdmin, user.email]);

    const logOutHandle = () => {
        logOutMethod();
        setUser(null);
    };

    return (
        <div className="sidebar">
            <Link to="/home">
                <div className="row d-flex justify-content-center">
                    <img
                        style={{
                            width: "130px",
                            height: "130px",
                        }}
                        src={logo}
                        alt=""
                    />
                </div>
            </Link>
            <Link to={`${url}/dashboardBookNow`}>
                <div className="row    ml-4 align-items-center ">
                    <FontAwesomeIcon
                        className="mr-2"
                        icon={faCartPlus}
                    />
					Book Now
				</div>
            </Link>
            <Link to={`${url}/bookingList`}>
                <div className="row mt-4 ml-4 align-items-center">
                    <FontAwesomeIcon
                        className="mr-2"
                        icon={faListAlt}
                    />
					Booking List
				</div>
            </Link>
            <Link to={`${url}/review`}>
                <div className="row mt-4 ml-4 align-items-center">
                    <FontAwesomeIcon
                        className="mr-2"
                        icon={faClipboard}
                    />
					Review
				</div>
            </Link>
            <hr style={{ borderBottom: "2px solid white" }} />
            {isAdmin && <AdminSideBar />}

            <br />
            <Link to="/home">
                <div className="row mt-4 ml-4 align-items-center">
                    <FontAwesomeIcon
                        className="mr-2"
                        icon={faHome}
                    />
					Home
				</div>
            </Link>
            <Link onClick={logOutHandle}>
                <div className="row mt-4 ml-4 align-items-center">
                    <FontAwesomeIcon
                        className="mr-2"
                        icon={faSignOutAlt}
                    />
					Log Out
				</div>
            </Link>
        </div>
    );
};

export default Sidebar;
