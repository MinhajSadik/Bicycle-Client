import React from "react";
import "./TopBanner.css";
// import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const TopBanner = () => {
    let history = useHistory();
    const bookNowHandle = () => {
        history.push("/dashboard/dashboardBookNow");
    };
    return (
        <>
            <div className="topBanner text-center align-items-center">
                <h1 className="">
                    Professional Bicycle Repair & Custom Services
				</h1>
                <div className="bookNowBtn mt-4">
                    <button
                        class="btn rounded"
                        onClick={bookNowHandle}
                    >
                        <span class="text-green">
                            Book Now
						</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default TopBanner;
