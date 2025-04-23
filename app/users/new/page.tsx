"use client";

import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <button
      className="btn btn-soft"
      onClick={() => {
        // Here you would typically handle the form submission to create a new user
        // For example, you might call an API endpoint to create the user in your database
        // and then redirect the user to the users list page or show a success message.
        // After creating the user, you can redirect to the users page
        router.push("/users");
      }}
    >
      Create
    </button>
  );
};

export default NewUserPage;
