import { useState } from "react";
import { loginUser } from "./api";
import { useAuth } from "../../context/AuthContext";

// Custom hook: login flow
export function useLogin() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (email, password) => {
    setLoading(true);
    setError("");

    try {
      const res = await loginUser(email, password);

      // expected backend response:
      // { token: "...", user: {...} }

      login({
        token: res.data.token,
        user: res.data.user,
      });

      return true; // success
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      return false; // failed
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
}
