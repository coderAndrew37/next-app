import React from "react";
import AdminLayout from "./layout";

const AdminPage = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Admin Page</h1>
        <p className="text-lg">Welcome to the admin page!</p>
        <p className="text-lg">You can manage users and other settings here.</p>
      </div>
    </AdminLayout>
  );
};

export default AdminPage;
