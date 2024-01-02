import sql from "better-sqlite3";

const db = sql("meals.db");

// creatig extra delay just for practice
export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return db.prepare("SELECT * FROM meals").all();
}
