import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../App";
import {
    initializeFramework,
    logOutMethod,
} from "../../../LogInComponents/LoginManegment/LoginManegment";
import "./UserAction.css";

const UserAction = () => {
    initializeFramework();

    const [user, setUser] = useContext(UserContext);
    const logOutHandle = () => {
        logOutMethod();
        setUser(null);
    };

    return (
        <div>
            <div className="actionDiv">
                <Link to="/dashboard/bookingList">
                    {user?.displayName}🙂
				</Link>
                <Link to="/dashboard">Dashboard</Link>

                {user?.email ? (
                    <Link onClick={logOutHandle}>Log Out</Link>
                ) : (
                    <Link to="/login">Log In</Link>
                )}
            </div>
        </div>
    );
};

export default UserAction;
