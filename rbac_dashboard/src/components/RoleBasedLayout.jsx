import React from "react";
import { Link } from "react-router-dom";

const RoleBasedLayout = () => {
  return (
    <div>
      <h1>RBAC Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/user-management">User Management</Link></li>
          <li><Link to="/role-management">Role Management</Link></li>
          <li><Link to="/permissions">Permission Management</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default RoleBasedLayout;
