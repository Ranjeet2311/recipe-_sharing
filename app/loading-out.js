import React from "react";

export default function loadingOut() {
  return (
    <div className="container">
      <div className="spinner-border text-primary mx-auto mt-4" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}
