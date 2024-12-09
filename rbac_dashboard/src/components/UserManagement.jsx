import React, { useState, useEffect } from "react";
import { useRoleContext } from "../context/RoleContext"; // Assuming this is where you manage your global state
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  Modal,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  Card,
} from "@mui/material";

// Static mock data for users
const mockUsers = [
  { id: 1, name: "John Doe", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", role: "User", status: "Inactive" },
  { id: 3, name: "Sam Wilson", role: "Editor", status: "Active" },
];

const UserManagement = () => {
  const { state, dispatch } = useRoleContext(); // Assuming the context holds roles and users
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: "", name: "", role: "" });

  // Initialize the users list with static data if it's empty
  useEffect(() => {
    if (!state.users.length) {
      dispatch({ type: "SET_USERS", payload: mockUsers });
    }
  }, [dispatch, state.users]);

  // Handle user deletion
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  // Handle save for adding/editing a user
  const handleSave = () => {
    if (currentUser.id) {
      dispatch({ type: "UPDATE_USER", payload: currentUser });
    } else {
      const newUser = { ...currentUser, id: Date.now(), status: "Active" };
      dispatch({ type: "ADD_USER", payload: newUser });
    }
    setModalOpen(false);
    setCurrentUser({ id: "", name: "", role: "" });
  };

  // Filter users based on search term and role
  const filteredUsers = state.users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterRole ? user.role === filterRole : true)
    );
  });

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" }}>
        User Management
      </Typography>

      <Card elevation={3} sx={{ p: 3, mb: 2 }}>
        <Box display="flex" gap={2} mb={2}>
          <TextField
            label="Search by Name"
            variant="outlined"
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
          />
          <Select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">All Roles</MenuItem>
            {state.roles.map((role) => (
              <MenuItem key={role.id} value={role.name}>
                {role.name}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setModalOpen(true)}
            sx={{ fontWeight: "bold" }}
          >
            Add User
          </Button>
        </Box>
      </Card>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#1976D2" }}>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Role</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow hover key={user.id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => setCurrentUser(user) || setModalOpen(true)}
                    sx={{ marginRight: "8px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for Adding/Editing Users */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
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
          <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
            {currentUser.id ? "Edit User" : "Add User"}
          </Typography>
          <TextField
            label="Name"
            value={currentUser.name}
            onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
            fullWidth
            margin="dense"
          />
          <Select
            value={currentUser.role}
            onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
            displayEmpty
            fullWidth
            margin="dense"
          >
            <MenuItem value="">Select Role</MenuItem>
            {state.roles.map((role) => (
              <MenuItem key={role.id} value={role.name}>
                {role.name}
              </MenuItem>
            ))}
          </Select>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button
              variant="outlined"
              onClick={() => setModalOpen(false)}
              sx={{ fontWeight: "bold" }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ fontWeight: "bold" }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default UserManagement;
