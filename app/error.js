"use client";

import React from "react";

export default function Error({ error }) {
  return (
    <div className="container">
      <h3 className="text-white text-center">An error occured </h3>
      <p className="text-center text-white">
        Failed to fetch data, please try again{" "}
      </p>
      {/* <p className="text-center text-white">{error}</p> */}
    </div>
  );
}
