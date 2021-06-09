import React, { useState } from "react";
import axios from "axios";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import ReviewForm from "./ReviewForm";
import SuccessMessage from "../../SharedComponents/SuccessMessage/SuccessMessage";
import "./Review.css";
import { toast } from "react-toastify";

const Review = () => {
	const [photoUrl, setPhotoUrl] = useState(null);
	const [isSubmit, setIsSubmit] = useState(false);
	const onSubmit = (data) => {
		const reviewData = { ...data };
		reviewData.photo_url = photoUrl;
		reviewData.date = new Date().toLocaleDateString();

		axios({
			method: "post",
			url: "https://salty-retreat-17704.herokuapp.com/review",
			data: reviewData,
		});
		setIsSubmit(true);
		console.log(reviewData);
	};

	const handleUploadImage = (event) => {
		toast("Pleas 😶 wait 5 seconde for upload icon");
		console.log(event.target.files[0]);
		const ImageData = new FormData();
		ImageData.set("key", "85dea4d9aec0e6e2a9113a6126e66123");
		ImageData.append("image", event.target.files[0]);

		axios.post("https://api.imgbb.com/1/upload", ImageData)
			.then(function (response) {
				setPhotoUrl(response.data.data.display_url);
				console.log(response.data.data.display_url);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<>
			<div className="reviewPart">
				<h3 className="text-center">Happy Customers</h3>
				<div className="icon  d-flex justify-content-center mb-3">
					<SpecialIcon />
				</div>
				<div>
					{isSubmit ? (
						<div className="d-flex justify-content-center">
							<SuccessMessage
								successText={
									"Your review  added successfully"
								}
							/>
						</div>
					) : (
						<ReviewForm
							handleUploadImage={
								handleUploadImage
							}
							onSubmit={onSubmit}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Review;
