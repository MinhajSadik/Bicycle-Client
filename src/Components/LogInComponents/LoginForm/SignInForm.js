import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";

const SignInForm = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div>
            <h4 className="text-center text-info   mb-3">Sign In</h4>
            <div className="icon  d-flex justify-content-center mb-2">
                <SpecialIcon />
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
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
                        className=" w-100 special-Btn"
                        type="submit"
                    >
                        Sign In
					</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
