import MealsDisplay from "@/components/meals/meals-display";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsDisplay meals={meals}></MealsDisplay>;
}

export default async function MealPage() {
  return (
    <div className="container page">
      <h1 className="text-center">
        Delicious meals, created by <span> by you</span>
      </h1>
      <p className="text-center my-4">
        Choose you favourite recipe and cook in yourself. It is easy and fun
      </p>
      <p className="text-center">
        <Link href="meals/share">
          <button className="btn btn-md">Share your favourite Recipe</button>
        </Link>
      </p>
      <Suspense
        fallback={<p className="text-dark d-block text-center">Loading... </p>}
      >
        <Meals />
      </Suspense>
    </div>
  );
}
