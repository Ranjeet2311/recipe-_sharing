import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <div className="col">
      <div className="card h-100  text-light">
        <Image
          className="w-100 object-fit-cover"
          src={image}
          alt={title}
          height={200}
          width={200}
        ></Image>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <i>
            <p className="card-text my-3"> {creator}</p>
          </i>
          <p className="card-text">{summary}</p>
        </div>
        <div className="card-footer mb-2">
          <Link className="btn btn-md w-100" href={`/meals/${slug}`}>
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}
