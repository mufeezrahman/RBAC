import React, { createContext, useContext, useReducer, useEffect } from "react";
import { mockApi } from "../api/mockApi";

const RoleContext = createContext();

const initialState = {
  users: [],
  roles: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SET_ROLES":
      return { ...state, roles: action.payload };
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.id ? action.payload : u
        ),
      };
    case "DELETE_USER":
      return { ...state, users: state.users.filter((u) => u.id !== action.payload) };
    case "ADD_ROLE":
      return { ...state, roles: [...state.roles, action.payload] };
    default:
      return state;
  }
};

export const RoleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    mockApi.fetchUsers().then((data) => dispatch({ type: "SET_USERS", payload: data }));
    mockApi.fetchRoles().then((data) => dispatch({ type: "SET_ROLES", payload: data }));
  }, []);

  return (
    <RoleContext.Provider value={{ state, dispatch }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleContext = () => useContext(RoleContext);
