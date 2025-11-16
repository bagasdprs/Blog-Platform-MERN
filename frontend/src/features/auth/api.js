import api from "../../lib/axios";

// LOGIN
export const loginUser = (email, password) => {
  return api.post("/auth/login", { email, password });
};

// OPTIONAL: verify token
export const verifyToken = (token) => {
  return api.get("/auth/verify", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// OPTIONAL: get profile after login
export const getProfile = () => {
  return api.get("/auth/me");
};
