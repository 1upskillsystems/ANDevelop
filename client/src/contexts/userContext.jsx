import { createContext, useEffect, useState } from "react";
import { users as mockData } from "../mockData";

export const UserContext = createContext([]);

export function useUserContextValue() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = mockData; // make call to DB
    setUsers(data);
  }, []);

  return {
    users,
  };
}
