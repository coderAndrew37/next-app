import React from "react";

const UserNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg">User Not Found</p>
      <p className="text-gray-500">
        The user you are looking for does not exist.
      </p>
      <p className="text-gray-500">
        Please check the user ID or return to the users page.
      </p>
      <a href="/users" className="mt-4 text-blue-500 hover:underline">
        Return to Users
      </a>
    </div>
  );
};

export default UserNotFound;
