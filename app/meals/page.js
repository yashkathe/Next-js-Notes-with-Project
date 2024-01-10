import { Suspense } from "react";
import Link from "next/link";

import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";

import { getMeals } from "@/fetch-functions/meals";

async function Meals() {
	const meals = await getMeals();
	return <MealsGrid meals={meals} />;
}

// static metadata
export const metadata = {
	title: "Meals Pages",
	description: "All the Delicious meals",
};

export default function MealsPage(second) {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Meals created <span className={classes.highlight}>by you</span>
				</h1>
				<p>Choose a meal and cook it yourself</p>
				<p className={classes.cta}>
					<Link href='meals/share'>Share Your favourite recepie</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense
					fallback={<p className={classes.loading}>Fetching Meals...</p>}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
}
