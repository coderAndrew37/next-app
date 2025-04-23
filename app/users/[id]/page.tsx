import { notFound } from "next/navigation";
import React from "react";

interface userDetailsProps {
  id: string;
  name: string;
  email: string;
  params: {
    id: number;
  };
}

const UserDetailsPage = ({ params: { id } }: userDetailsProps) => {
  if (id > 10) notFound(); // If the ID is greater than 10, show a 404 page

  // Fetch user details based on the ID from the URL
  return <div>UserDetailsPage {id}</div>;
};

export default UserDetailsPage;
