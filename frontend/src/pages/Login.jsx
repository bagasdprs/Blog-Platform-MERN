//
import React, { useState } from "react";
import { loginUser } from "../features/auth/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form.email, form.password);

      login({
        token: res.data.token,
        user: res.data.user,
      });

      navigate("/admin");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error);
      alert("Login failed, please try again!");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form onSubmit={submit} className="space-y-4">
        <Input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <Input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
