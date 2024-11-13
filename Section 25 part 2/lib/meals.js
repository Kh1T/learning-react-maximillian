import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare("SELECT * from meals").all();
  } catch (error) {
    throw new Error("Loading Meals Failed");
  }
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export function saveMeals(meal) {
  slug = slugify(meal.title, { lower: true });
  instructions = xss(meal.instructions);
}
