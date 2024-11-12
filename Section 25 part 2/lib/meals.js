import sql from "better-sqlite3";

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
