/** @format */

import { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "./AxiosConfig";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState({ logged: false, role: null });

  useEffect(() => {
    // console.log(user);
    if (user.logged) {
     setSidebar(true);
   } 
  }, [user]);

  return (
    <AppContext.Provider value={{ sidebar, setSidebar, user, setUser }}>
      {" "}
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
