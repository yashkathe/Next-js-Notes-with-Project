"use client";

import Image from "next/image";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
	const imageInput = useRef();
	const [pickedImage, setPickedImage] = useState();

	function handlePickClick() {
		imageInput.current.click();
	}

	function handleImageChange(event) {
		const file = event.target.files[0];

		// if file doesnt exist
		if (!file) {
			setPickedImage(null);
			return;
		}

		// convert into data URL
		const fileReader = new FileReader();

		fileReader.readAsDataURL(file);
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
	}

	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p>No Image picked yet</p>}
					{pickedImage && (
						<Image src={pickedImage} alt='image selected by the user' fill />
					)}
				</div>
				<input
					className={classes.input}
					type='file'
					id={name}
					accept='image/png, image/jpeg, image/jpg'
					name={name}
					ref={imageInput}
					onChange={handleImageChange}
                    required
				/>
				<button
					className={classes.button}
					type='button'
					onClick={handlePickClick}>
					Pick an Image
				</button>
			</div>
		</div>
	);
}
