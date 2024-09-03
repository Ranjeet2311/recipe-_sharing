import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);
  // to call notFound() page
  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <div className="container page">
      <div className="row text-white box p-4">
        <div className="col-6">
          <Image src={meal.image} height={500} width={500} alt="food" />
        </div>
        <div className="col-6 box p-4">
          <h1> {meal.title} </h1>
          <p>
            by
            <a
              className="text-decoration-none mx-2 text-white"
              href={`mainto:${"Email"}`}
            >
              {meal.creator}
            </a>
          </p>
          <p> {meal.summary} </p>

          <main>
            <p dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
          </main>
        </div>
      </div>
    </div>
  );
}
