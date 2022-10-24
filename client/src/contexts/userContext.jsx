import { createContext, useEffect, useState } from "react";
import { users as userData } from "../mockData";

export const UserContext = createContext([]);

export function useUserContextValue() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = userData; // make call to DB
    setUsers(data);
  }, []);

  return {
    users,
  };
}
