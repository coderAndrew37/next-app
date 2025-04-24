"use client";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    <CldUploadWidget
      uploadPreset="uploads123"
      options={{
        maxFiles: 1,
        maxFileSize: 2000000, // 2MB
        cropping: true,
        croppingAspectRatio: 1,
        sources: ["local", "url"],
      }}
    >
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload Image
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
