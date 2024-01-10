import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

// creatig extra delay just for practice
export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	// throw new Error('error')
	return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split(".").pop(); // get rid of file extension
	const fileName = `${meal.slug}.${extension}`;

	// store image data in public folder
	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();

	// stream.write requires a buffered image
	// arg 1 => thing you want to write
	// arg 2 => callback function of what to do when it finishes execution
	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error("Saving Image Failed");
		}
	});

	// we dont want to store the image in a database instead we want to store
	// the image path
	meal.image = `/images/${fileName}`;

	// Write the whole data to the database

	db.prepare(`
        INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )
    `).run(meal);
}
