import api from "../../lib/axios";

// GET posts (supports search, pagination)
export const fetchPosts = (params = {}) => {
  return api.get("/posts", { params });
};

// GET detail post
export const fetchPost = (id) => {
  return api.get(`/posts/${id}`);
};

// CREATE post (Admin only)
export const createPost = (data, token) => {
  return api.post("/posts", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// UPDATE post (Admin only)
export const updatePost = (id, data, token) => {
  return api.put(`/posts/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// DELETE post (Admin only)
export const deletePost = (id, token) => {
  return api.delete(`/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
