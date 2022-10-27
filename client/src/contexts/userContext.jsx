import { createContext, useEffect, useState } from "react";

export const UserContext = createContext([]);

export function useUserContextValue() {
  const [users, setUsers] = useState([]);

  const baseURL = "http://localhost:5001/users";

  const fetchUsers = async () => {
    const res = await fetch(baseURL);
    const userList = await res.json();
    setUsers(userList);
  };
  useEffect(() => {
    fetchUsers(); // make call to backend service
  }, []);

  return {
    users,
  };
}
