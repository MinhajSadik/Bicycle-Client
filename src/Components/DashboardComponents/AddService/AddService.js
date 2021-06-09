import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { Button} from "react-bootstrap";
import axios from "axios";
// import { useHistory } from "react-router";
import "./AddService.css";
import AddServiceForm from "./AddServiceForm";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import SuccessMessage from "../../SharedComponents/SuccessMessage/SuccessMessage";
// import { ToastContainer, toast } from "react-toastify";

const AddService = () => {
    const [photoUrl, setPhotoUrl] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);
    const onSubmit = (data) => {
        const serviceData = { ...data };
        serviceData.photo_url = photoUrl;
        serviceData.date = new Date().toLocaleDateString();

        axios({
            method: "post",
            url: "https://localhost:3000/service",
            data: serviceData,
        });
        setIsSubmit(true);
        console.log(serviceData);
    };

    const handleUploadImage = (event) => {
        // eslint-disable-next-line no-undef
        toast("Pleas 😶 wait Two seconde for upload icon");
        const ImageData = new FormData();
        ImageData.set("key", "85dea4d9aec0e6e2a9113a6126e66123");
        ImageData.append("image", event.target.files[0]);

        axios.post("https://api.imgbb.com/1/upload", ImageData)
            .then(function (response) {
                setPhotoUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const addMoreHandle = () => {
        setIsSubmit(false);
    };

    return (
        <div className="addServicePart">
            <h3 className="text-center">Add Service</h3>
            <div className="icon  d-flex justify-content-center ">
                <SpecialIcon />
            </div>
            <div>
                {isSubmit ? (
                    <>
                        <div className="d-flex justify-content-center">
                            <SuccessMessage
                                successText={
                                    "Your    added a service successfully"
                                }
                            />
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <Button
                                variant="info"
                                onClick={addMoreHandle}
                            >
                                Add More
							</Button>
                        </div>
                    </>
                ) : (
                    <AddServiceForm
                        handleUploadImage={handleUploadImage}
                        onSubmit={onSubmit}
                    />
                )}
            </div>
        </div>
    );
};

export default AddService;
