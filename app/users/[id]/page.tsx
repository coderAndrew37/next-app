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
  return <div>UserDetailsPage {id}</div>;
};

export default UserDetailsPage;
