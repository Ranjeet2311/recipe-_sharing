"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const ImageInput = useRef();
  const [selectedImage, setSelectedImage] = useState();

  function HandleCLick() {
    // console.log(`Image select`);
    ImageInput.current.click();
  }
  function handleSelectedImage(e) {
    const file = e.target.files[0];
    // console.log(`e :: `, e.target.files[0]);

    if (!file) {
      setSelectedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => setSelectedImage(fileReader.result);

    fileReader.readAsDataURL(file);
  }

  return (
    <div className="form-group mt-4">
      <label htmlFor="name">{label}</label>
      <div className="preview text-white ps-2 mt-2">
        {selectedImage ? (
          <Image
            src={selectedImage}
            width={40}
            height={40}
            alt="selected-image"
          />
        ) : (
          "No image selected"
        )}
      </div>
      <input
        type="file"
        className="form-control "
        id={name}
        name={name}
        accept="image/png, image/jpeg"
        required
        style={{ visibility: "hidden", height: "0px" }}
        ref={ImageInput}
        multiple
        onChange={handleSelectedImage}
      />
      <button
        onClick={HandleCLick}
        className="btn px-0 pt-0 mt-0 mb-4 text-light my-1"
        type="button"
      >
        Pick an Image
      </button>
    </div>
  );
}
