import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}
const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex ">
      <aside className="w-1/4 bg-slate-200 p-5 mr-4">Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
