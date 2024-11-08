import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>This is meals:</h1>
      <h1>The Blog</h1>
      <p>
        <Link href="/meals/meal-1">Meal 1</Link>
      </p>
      <p>
        <Link href="/meals/meal-2">Meal 2</Link>
      </p>
      <p>Go to share </p>
      <p>
        <Link href="/meals/share">Share meal</Link>
      </p>
    </main>
  );
}
