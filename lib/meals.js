import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 800));
  const mealData = db.prepare("SELECT * FROM meals").all();
  // console.log(`mealData ::  `, mealData);
  // throw new Error("Loading failed");

  return mealData;
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // console.log(`meal :: `, meal);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  // array buffer gives a promise, so we added await
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Image couldn't save");
    }
  });

  meal.image = `/images/${fileName}`;

  const stmt = db.prepare(
    `
    INSERT INTO meals (title, image, summary, instructions, creator, creator_email, slug)
    VALUES (
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @slug
    )
    `
  );

  stmt.run(meal);
}

// const text = "pic.png";
// const split = text.split(".").pop();
// console.log(` split  ::  `, split);
