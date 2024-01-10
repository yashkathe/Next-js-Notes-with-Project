"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
	const { pending } = useFormStatus(); // is true if there is an ongoing request

	return (
		<button disabled={pending}>
			{pending ? "Submitting ... " : "Share Meal"}
		</button>
	);
}
