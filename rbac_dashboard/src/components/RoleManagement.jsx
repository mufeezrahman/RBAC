import React, { useState } from "react";
import { useRoleContext } from "../context/RoleContext";
import { Button, Modal, TextField, Box, Typography } from "@mui/material";
import PermissionManagement from "./PermissionManagement";

const RoleManagement = () => {
  const { roles, addRole } = useRoleContext();
  const [newRole, setNewRole] = useState("");
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  const [permissionsModalOpen, setPermissionsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleAddRole = () => {
    if (newRole) {
      addRole(newRole);
      setNewRole("");
    }
  };

  const handleOpenPermissionsModal = (role) => {
    setSelectedRole(role);
    setPermissionsModalOpen(true);
  };

  const handleClosePermissionsModal = () => {
    setPermissionsModalOpen(false);
    setSelectedRole(null);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Role Management
      </Typography>
      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Role Name"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddRole}>
          Add Role
        </Button>
      </Box>

      <Box>
        {roles.map((role, index) => (
          <Box key={index} display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography>{role.name}</Typography>
            <Button variant="outlined" onClick={() => handleOpenPermissionsModal(role)}>
              Manage Permissions
            </Button>
          </Box>
        ))}
      </Box>

      {/* Role Permission Management Modal */}
      {permissionsModalOpen && (
        <PermissionManagement
          open={permissionsModalOpen}
          onClose={handleClosePermissionsModal}
          role={selectedRole}
        />
      )}
    </div>
  );
};

export default RoleManagement;
