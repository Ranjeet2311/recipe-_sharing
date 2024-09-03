import Image from "next/image";
import React from "react";
import construction from "../../assets/pageImages/under-constructions.svg";

export default function CommunityPage() {
  return (
    <div className="container page">
      <h1 className="text-center">Community Page</h1>
      <h2 className="text-center my-4 ">---Under development---</h2>
      <div
        style={{ height: "370px", position: "relative" }}
        className="d-flex align-items-center justify-content-center w-00"
      >
        <Image layout="fill" src={construction} />
      </div>
    </div>
  );
}
