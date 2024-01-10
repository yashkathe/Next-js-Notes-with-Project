'use client'

import { useFormState } from "react-dom";

import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

import { shareMeal } from "@/fetch-functions/actions";

import classes from "./page.module.css";

export default function ShareMealPage() {
	// arg 2 : actual server action that should be triggered when the form is submitted
	// arg 1: initial state of the component => i.e. initial value that should be returned by useFormState
	// before the action has been triggered and yielded a response

	const [currState, formAction] = useFormState(shareMeal, { message: null });

	return (
		<>
			<header className={classes.header}>
				<h1>
					Share your <span className={classes.highlight}>favorite meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className={classes.main}>
				<form className={classes.form} action={formAction}>
					<div className={classes.row}>
						<p>
							<label htmlFor='name'>Your name</label>
							<input type='text' id='name' name='name' required />
						</p>
						<p>
							<label htmlFor='email'>Your email</label>
							<input type='email' id='email' name='email' required />
						</p>
					</div>
					<p>
						<label htmlFor='title'>Title</label>
						<input type='text' id='title' name='title' required />
					</p>
					<p>
						<label htmlFor='summary'>Short Summary</label>
						<input type='text' id='summary' name='summary' required />
					</p>
					<p>
						<label htmlFor='instructions'>Instructions</label>
						<textarea
							id='instructions'
							name='instructions'
							rows='10'
							required></textarea>
					</p>
					<ImagePicker label='Your Image' name='image' />
					{currState.message && <p> {currState.message} </p>}
					<p className={classes.actions}>
						<MealsFormSubmit />
					</p>
				</form>
			</main>
		</>
	);
}
