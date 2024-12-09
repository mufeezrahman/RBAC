export const mockApi = {
    users: [
      { id: 1, name: "John Doe", role: "Admin", status: "Active" },
      { id: 2, name: "Jane Smith", role: "Moderator", status: "Inactive" },
      { id: 3, name: "Mike Brown", role: "User", status: "Active" },
    ],
    roles: [
      { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
      { id: 2, name: "Moderator", permissions: ["Read", "Write"] },
      { id: 3, name: "User", permissions: ["Read"] },
    ],
    fetchUsers: () => Promise.resolve([...mockApi.users]),
    fetchRoles: () => Promise.resolve([...mockApi.roles]),
    addUser: (user) => {
      mockApi.users.push(user);
      return Promise.resolve(user);
    },
    updateUser: (updatedUser) => {
      const index = mockApi.users.findIndex((u) => u.id === updatedUser.id);
      if (index !== -1) mockApi.users[index] = updatedUser;
      return Promise.resolve(updatedUser);
    },
    deleteUser: (id) => {
      mockApi.users = mockApi.users.filter((user) => user.id !== id);
      return Promise.resolve(id);
    },
  };
  