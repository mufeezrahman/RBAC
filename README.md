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

## Installation

To get started with the project, clone this repository and install the required dependencies.

```bash
Step 1: Clone the repository

cd rbac-application
Step 2: Install dependencies
Make sure you have Node.js and npm installed on your machine. Then run:

npm install
Step 3: Run the application
npm start
The application will start, and you can open it in your browser at http://localhost:3000.

Configuration
Static Data
For testing purposes, the app uses static data for users, roles, and permissions. You can modify or add new roles, users, and permissions directly in the mockData.js file.

Context API
The app uses React's Context API to manage global state for users, roles, and permissions. You can find the context in the RoleContext.js file, where the state is initialized and shared across the components.

Components
User Management: Allows the admin to manage users (add, edit, delete users).
Role Management: Lets the admin manage roles, assign roles to users, and view roles.
Permission Management: Allows creating, updating, and assigning permissions to roles.
User List: Displays a list of all users with actions for editing or deleting them.
Usage
User Management
Search Users: You can search users by their name in the search bar.
Filter by Role: Filter users based on their role, such as Admin, Moderator, User.
Add User: You can add a new user by entering their name and assigning a role.
Edit User: You can edit an existing user's name or role.
