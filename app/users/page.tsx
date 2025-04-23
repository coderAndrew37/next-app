import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams; // Destructure after receiving the object

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn btn-primary">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
