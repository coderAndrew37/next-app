import React from "react";

const NoteFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg">Page Not Found</p>

      <p className="text-gray-500">
        The page you are looking for does not exist.
      </p>
      <p className="text-gray-500">
        Please check the URL or return to the homepage.
      </p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">
        Return to Home
      </a>
    </div>
  );
};

export default NoteFoundPage;
