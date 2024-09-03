"use client";

import { useFormState } from "react-dom";
import ImagePicker from "@/components/meals/image-picker";
import SubmitForm from "@/components/meals/submit-form";
import { shareMeal } from "@/lib/action";

export default function SharePage() {
  //'white using form useFormState, we replaced shareMeal, with formAction'
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <div className="container page">
      <form className="box p-4" action={formAction}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="creator"
            name="creator"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="form-control"
            id="creator_email"
            name="creator_email"
            placeholder="Your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Your title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="summry">Recipe summry</label>
          <input
            type="text"
            className="form-control"
            id="summary"
            name="summary"
            placeholder="Recipe summry"
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Cooking instructions</label>
          <input
            type="text"
            className="form-control"
            id="instructions"
            name="instructions"
            placeholder="Cooking instructions"
          />
        </div>
        <ImagePicker label="Your Image" name="image" />
        <SubmitForm />
      </form>
      {state.message && (
        <p className="text-white mt-2 text-warning"> {state.message} </p>
      )}
    </div>
  );
}
