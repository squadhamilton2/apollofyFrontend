import { User } from "../interfaces/user";
import { createContext, useContext, ReactNode, useState } from "react";

interface UserContextType {
  user: User;
  setUser: Function;
}

interface UserProps {
  children: ReactNode;
}

const UserContext = createContext({} as UserContextType);

export function UserContextProvider(Props: UserProps) {
  const userName = localStorage.getItem("user")!;
  const [user, setUser] = useState<User>(JSON.parse(userName));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {Props.children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("User Error!");
  }
  return context;
}
