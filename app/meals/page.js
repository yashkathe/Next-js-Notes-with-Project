import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";

import { getMeals } from "@/fetch-functions/meals";

export default async function MealsPage(second) {
	const meals = await getMeals();

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
				<MealsGrid meals={meals} />
			</main>
		</>
	);
}
