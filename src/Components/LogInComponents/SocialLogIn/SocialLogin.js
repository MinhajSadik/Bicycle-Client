import React, { useContext } from "react";
import "./SocialLogin.css";

import { GoogleSignInMethod } from "../LoginManegment/LoginManegment";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";

import searchBtn from "../../../images/search.png";

const SocialLogin = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignInHandle = () => {
        GoogleSignInMethod().then((res) => {
            setUser(res);
            history.replace(from);
        });
    };
    return (
        <div className="google d-flex justify-content-center">
            <button
                className="btn draw-border"
                onClick={googleSignInHandle}
            >
                <div className="row socialRow d-flex align-items-center justify-content-around">
                    <img src={searchBtn} alt="" />
					Log in with Google
				</div>
            </button>
        </div>
    );
};

export default SocialLogin;
