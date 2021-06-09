import React from "react";
import { Form } from "react-bootstrap";

const AllBookingListTable = ({ bookingData, changeStatus }) => {
    return (
        <tbody>
            <tr>
                <td>{bookingData.name}</td>
                <td>{bookingData.email}</td>
                <td>{bookingData.serviceName}</td>
                <td>{bookingData.type}</td>
                <td>
                    <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="inlineFormCustomSelect"
                        custom
                        onChange={(event) =>
                            changeStatus(
                                event,
                                bookingData._id
                            )
                        }
                    >
                        <option value="0">
                            {bookingData.status}
                        </option>
                        <br />
                        <hr
                            style={{
                                width: "100%",
                                marginBottom: "5px",
                                borderBottom:
                                    "2px solid tomato",
                            }}
                        />
                        <option value="1">Pending</option>
                        <option value="2">On Going</option>
                        <option value="3">Done</option>
                    </Form.Control>
                </td>
            </tr>
        </tbody>
    );
};

export default AllBookingListTable;
