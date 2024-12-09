import React, { useState } from "react";
import { useRoleContext } from "../context/RoleContext";
import { Button, Modal, Box, TextField, Typography, List, ListItem } from "@mui/material";

const PermissionManagement = ({ open, onClose, role }) => {
  const { permissions, addPermission } = useRoleContext();
  const [newPermission, setNewPermission] = useState("");

  const handleAddPermission = () => {
    if (newPermission) {
      addPermission(newPermission);
      setNewPermission("");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        p={4}
        style={{
          backgroundColor: "white",
          width: "400px",
          margin: "10% auto",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Manage Permissions for Role: {role.name}
        </Typography>
        <List>
          {permissions.map((permission, index) => (
            <ListItem key={index}>{permission}</ListItem>
          ))}
        </List>
        <TextField
          label="New Permission"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
          fullWidth
        />
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
          <Button variant="contained" color="primary" onClick={handleAddPermission}>
            Add Permission
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PermissionManagement;
