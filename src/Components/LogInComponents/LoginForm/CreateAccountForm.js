import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";

const CreateAccountForm = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm();
    const { errors } = useForm();
    return (
        <div>
            <h4 className="text-center text-info mb-3">Sign Up</h4>
            <div className="icon  d-flex justify-content-center mb-2">
                <SpecialIcon />
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="nameBox">
                    <input
                        placeholder="Enter Your Name"
                        type="text"
                        name="name"
                        id=""
                        ref={register({
                            required: true,
                        })}
                    />
                    {errors.name && (
                        <p className="text-muted">
                            Name is required
                        </p>
                    )}
                </div>
                <div className="emailBox">
                    <input
                        placeholder="Enter Your Email"
                        type="email"
                        name="email"
                        id=""
                        ref={register({
                            required: true,
                        })}
                    />
                    {errors.email && (
                        <p className="text-muted">
                            Email is required
                        </p>
                    )}
                </div>
                <div className="passwordBox">
                    <input
                        placeholder="Enter Your Password"
                        type="password"
                        name="password"
                        id=""
                        ref={register({
                            required: true,
                        })}
                    />
                    {errors.password && (
                        <p className="text-muted">
                            Password is required
                        </p>
                    )}
                </div>
                <div className="nameBox">
                    <Button
                        variant="primary"
                        className=" w-100  "
                        type="submit"
                    >
                        Sign Up
					</Button>
                </div>
            </form>
        </div>
    );
};

export default CreateAccountForm;
