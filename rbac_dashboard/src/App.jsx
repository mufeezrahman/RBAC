import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleBasedLayout from "./components/RoleBasedLayout";
import UserDashboard from "./components/UserDashboard";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionManagement from "./components/PermissionManagement";
import { RoleProvider } from "./context/RoleContext";

function App() {
  return (
    <RoleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RoleBasedLayout />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/role-management" element={<RoleManagement />} />
          <Route path="/permissions" element={<PermissionManagement />} />
        </Routes>
      </Router>
    </RoleProvider>
  );
}

export default App;
