// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const login = (email, password, role) => {
//     if (email && password && role) {
//       setUser({ email, role });
//     }
//   };

//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  // restore login on refresh
  useEffect(()=>{
    const stored = localStorage.getItem("user");
    if(stored){
      setUser(JSON.parse(stored));
    }
  },[]);

  const login = (userData)=>{
    setUser(userData);
  };

  const logout = ()=>{
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = ()=> useContext(AuthContext);