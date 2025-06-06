import React from "react";
import { sort } from "fast-sort";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserTableProps {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: UserTableProps) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const users: User[] = await res.json();
  const sortedUsers = sort(users)[sortOrder === "email" ? "asc" : "asc"](
    (user: User) => (sortOrder === "email" ? user.email : user.name)
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
