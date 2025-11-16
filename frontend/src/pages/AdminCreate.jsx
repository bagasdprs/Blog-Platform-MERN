import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { createPost } from "../features/blog/api";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

function AdminCreate() {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
    tags: "",
    image: null,
  });

  const submit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("content", form.content);
    fd.append("tags", form.tags);
    fd.append("image", form.image);

    try {
      await createPost(fd, token);
      navigate("/admin");
    } catch (err) {
      console.log("Create Error:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>

      <form onSubmit={submit} className="space-y-4">
        <Input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />

        <Input type="file" accept="image/*" onChange={(e) => setForm({ ...form, image: e.target.files[0] })} />

        <Textarea rows={6} placeholder="Content" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />

        <Input placeholder="Tags (comma separated)" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} />

        <Button type="submit">Create</Button>
      </form>
    </div>
  );
}

export default AdminCreate;
