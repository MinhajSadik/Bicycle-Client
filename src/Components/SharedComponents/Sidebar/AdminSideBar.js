import React from "react";
import "./Sidebar.css";
// import logo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faListAlt,
    faTasks,
    faPlus,
    // faUserAlt,
    faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";
const AdminSideBar = () => {
    let {  url } = useRouteMatch();
    return (
        <div>
            <>
                <Link to={`${url}/allBookingList`}>
                    <div className="row mt-4 ml-4 align-items-center">
                        <FontAwesomeIcon
                            className="mr-2"
                            icon={faListAlt}
                        />
						All Booking List
					</div>
                </Link>


                <Link to={`${url}/addService`}>
                    <div className="row mt-4 ml-4 align-items-center">
                        <FontAwesomeIcon
                            className="mr-2"
                            icon={faPlus}
                        />
						Add Service
					</div>
                </Link>
                <Link to={`${url}/addAdmin`}>
                    <div className="row mt-4 ml-4 align-items-center">
                        <FontAwesomeIcon
                            className="mr-2"
                            icon={faUserShield}
                        />
						Make Admin
					</div>
                </Link>
                <Link to={`${url}/manageServices`}>
                    <div className="row mt-4 ml-4 align-items-center">
                        <FontAwesomeIcon
                            className="mr-2"
                            icon={faTasks}
                        />
						Manage Services
					</div>
                </Link>
            </>
        </div>
    );
};

export default AdminSideBar;
