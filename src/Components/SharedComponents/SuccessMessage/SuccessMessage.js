import React from "react";
import { Card } from "react-bootstrap";
import congratulationPic from "../../../images/congratulation.png";

const SuccessMessage = ({ successText }) => {
    return (
        <div>
            <Card
                border="success"
                style={{ width: "18rem" }}
                className="mt-3"
            >
                <Card.Header className="text-center">
                    {" "}
                    <img
                        style={{ width: "40px" }}
                        src={congratulationPic}
                        alt=""
                    />{" "}
                </Card.Header>
                <Card.Body
                    style={{
                        color: "green",
                        textAlign: "center",
                    }}
                >
                    <Card.Text>{successText}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SuccessMessage;
