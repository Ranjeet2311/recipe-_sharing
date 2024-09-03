"use client";

import { useFormStatus } from "react-dom";

export default function SubmitForm() {
  // useFormStatus is next specific
  const { pending } = useFormStatus();

  // console.log(`useFormStatus() : `, useFormStatus());

  return (
    <button className="btn btn-md text-light" disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}{" "}
    </button>
  );
}
