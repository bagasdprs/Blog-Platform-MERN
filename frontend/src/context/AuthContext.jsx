import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Provider
export function AuthProvider({ children }) {
  // Load from localStorage when app loads
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  // Save changes to localStorage
  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  }, [token]);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  // LOGIN
  const login = ({ token, user }) => {
    setToken(token);
    setUser(user);
  };

  // LOGOUT
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.clear();
  };

  return <AuthContext.Provider value={{ token, user, login, logout }}>{children}</AuthContext.Provider>;
}

// Hook: useAuth()
export function useAuth() {
  return useContext(AuthContext);
}
