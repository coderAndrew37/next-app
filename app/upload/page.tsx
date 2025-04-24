"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {publicId && (
        <CldImage
          src={publicId}
          width="400"
          height="400"
          alt="Uploaded Image"
          className="rounded-lg shadow-lg"
          loading="lazy"
        />
      )}
      <CldUploadWidget
        uploadPreset="uploads123"
        options={{
          maxFiles: 1,
          maxFileSize: 2000000, // 2MB
          sources: ["local", "url"],
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button
            className="btn btn-primary px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            onClick={() => open()}
          >
            Upload Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadPage;
