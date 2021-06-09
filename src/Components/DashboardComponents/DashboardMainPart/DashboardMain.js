// import React, { useContext } from "react";
import "./DashboardMain.css";
// import { UserContext } from "../../../App";
// import NavBar from "../../SharedComponents/NavBar/NavBar";
import Sidebar from "../../SharedComponents/Sidebar/Sidebar";
import {
    BrowserRouter as
    Switch,
    Route,
    // Link,
    // useParams,
    useRouteMatch,
} from "react-router-dom";

import BookingList from "../BookingList/BookingList";
import AddTeamMember from "../AddTeamMember/AddTeamMember";
import AddService from "../AddService/AddService";
import AllOrders from "../AllBookingList/AllBookingList";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Review from "../Review/Review";
import BookNowPart from "../BookNowComponents/BookNowPart/BookNowPart";
// import Services from "../../HomeComponents/Services/Services";
import DashboardServices from "../DashboardServices/DashboardServices";
import ManageServices from "../ManageServices/ManageServices";
// import { Nav, Navbar } from "react-bootstrap";
import MobileSideBar from "../../SharedComponents/MobileSideBar/MobileSideBar";

const DashboardMain = () => {
    // const [user, setUser] = useContext(UserContext);
    let { path } = useRouteMatch();

    return (
        <div className="row w-100 DashBoardMainStyle">
            <div className="mobileNav col-12">
                <MobileSideBar />
            </div>
            <div className="col-md-2 pl-2 p4-2 desktopNav">
                <Sidebar />
            </div>
            <div className="col-md-10  mt-5 ml-auto mr-auto dashboardMainPart">
                <Switch>
                    <Route exact path={path}>
                        <DashboardServices />
                    </Route>
                    <Route path={`${path}/dashboardBookNow`}>
                        <DashboardServices />
                    </Route>
                    <Route path={`${path}/bookNow/:id`}>
                        <BookNowPart />
                    </Route>
                    <Route path={`${path}/bookingList`}>
                        <BookingList />
                    </Route>
                    <Route path={`${path}/allBookingList`}>
                        <AllOrders />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/bookingList`}>
                        <BookingList />
                    </Route>
                    <Route path={`${path}/addMember`}>
                        <AddTeamMember />
                    </Route>
                    <Route path={`${path}/addService`}>
                        <AddService />
                    </Route>
                    <Route path={`${path}/addAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/manageServices`}>
                        <ManageServices />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default DashboardMain;
