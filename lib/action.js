"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

// prevState, is expexted as we use useFormState in the parent comp
export async function shareMeal(prevState, formData) {
  // console.log(`formData :: `, formData);

  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    creator: formData.get("creator"),
    instructions: formData.get("instructions"),
    creator_email: formData.get("creator_email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    meal.image.size === 0
  ) {
    // throw new Error("Invalid input");
    return { message: "Please fill all the fields" };
  }

  await saveMeal(meal);
  //to get around the caching, after any data change, we need to revalidate to see the changes, layout does revalidation for even nested pages'comps, and page does revalidation for one selected page

  revalidatePath(`/meals`);
  redirect(`/meals`);
}
