// import React, { useContext, useEffect, useState } from "react";s
// import axios from "axios";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router";
// import SpecialIcon from "../../../SharedComponents/SpecialIcon/SpecialIcon";
import { UserContext } from "../../../../App";
import { useContext } from "react";

const BookNowForm = ({ onSubmit, service }) => {
    // eslint-disable-next-line no-unused-vars
    const [user, SetUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={user?.name}
                            name="name"
                            ref={register({
                                required: true,
                            })}
                        />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        controlId="formGridEmail"
                    >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={user?.email}
                            name="email"
                            ref={register({
                                required: true,
                            })}
                            readOnly
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Your City"
                            name="city"
                            ref={register({
                                required: true,
                            })}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            value="Bangladesh"
                            name="country"
                            ref={register({
                                required: true,
                            })}
                            readOnly
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control
                            type="text"
                            // placeholder="service Name"
                            name="serviceName"
                            value={service?.serviceName}
                            ref={register({
                                required: true,
                            })}
                            readOnly
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Service Price</Form.Label>
                        <Form.Control
                            type="text"
                            // placeholder="Price"
                            name="price"
                            value={service?.price}
                            ref={register({
                                required: true,
                            })}
                            readOnly
                        />
                    </Form.Group>
                </Form.Row>
                <button class="submitButton mt-5">
                    Next
					<div class="SubmitButton__horizontal"></div>
                    <div class="submitButton__vertical"></div>
                </button>
            </form>
        </div>
    );
};

export default BookNowForm;
