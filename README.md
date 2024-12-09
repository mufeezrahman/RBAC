# Role-Based Access Control (RBAC) Application

This is a **Role-Based Access Control (RBAC) Application** built using **React**, **Material-UI**, and **Context API**. The application allows administrators to manage users, assign roles, manage permissions, and set access control policies to determine which users can access specific resources within the system.

## Features

- **User Management**: View, search, filter, add, edit, and delete users.
- **Role Management**: Create and assign roles to users. A role defines the permissions that a user has within the system.
- **Permission Management**: Manage permissions that define the actions a user can perform (e.g., Read, Write, Delete).
- **Role-Permission Assignment**: Assign specific permissions to roles to control access at a granular level.
- **Dynamic User List**: Automatically updates the list of users after any operation (add, edit, delete).
- **Dynamic Role and Permission Management**: Modify and add new roles and permissions dynamically.
- **Modular Design**: The application is designed to manage users, roles, and permissions independently with easy-to-manage components.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A React UI framework that provides customizable and responsive UI components.
- **React Context API**: Used to manage global state for users, roles, and permissions.
- **React Hooks**: Functional components with hooks to manage state and effects.
- **JavaScript (ES6+)**: For writing modern JavaScript code.
- **CSS**: For styling the components and UI.

## Project Structure

RBAC-Dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── RoleBasedLayout.jsx
│   │   ├── AdminActions.jsx
│   │   ├── ModeratorActions.jsx
│   │   ├── UserDashboard.jsx
│   │   ├── UserManagement.jsx
│   │   ├── RoleManagement.jsx
│   │   ├── PermissionManagement.jsx
│   ├── context/
│   │   └── RoleContext.jsx
│   ├── data/
│   │   ├── roles.js
│   │   └── mockData.js
│   ├── api/
│   │   └── mockApi.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
