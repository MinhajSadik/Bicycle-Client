import React from "react";
import { Button, Card } from "react-bootstrap";

const BookingListForm = ({ booking }) => {
    return (
        <div>
            <Card
                border="success"
                style={{ width: "18rem" }}
                className="ml-2 mr-2 mt-3"
            >
                <Card.Header className="d-flex justify-content-between">
                    <img
                        style={{ width: "50px" }}
                        src={booking.servicePhoto}
                        alt=""
                    />
                    <Button variant="primary">
                        {booking.status}
                    </Button>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        {booking.serviceName}
                    </Card.Title>
                    <Card.Text>
                        {booking.serviceDescription}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookingListForm;
