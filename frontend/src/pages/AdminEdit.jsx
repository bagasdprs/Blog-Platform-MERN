import React, { useEffect, useState } from "react";
import { fetchPost, updatePost } from "../features/blog/api";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

function AdminEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [form, setForm] = useState(null);

  useEffect(() => {
    fetchPost(id).then((res) => {
      const post = res.data;
      setForm({
        title: post.title,
        content: post.content,
        tags: post.tags.join(", "),
        image: null,
        existingImage: post.image,
      });
    });
  }, [id]);

  if (!form) return <div>Loading...</div>;

  const submit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("content", form.content);
    fd.append("tags", form.tags);
    if (form.image instanceof File) {
      fd.append("image", form.image);
    }

    await updatePost(id, fd, token);
    navigate("/admin");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Post</h2>

      {form.existingImage && <img src={`http://localhost:5000${form.existingImage}`} className="w-40 mb-4 rounded" />}

      <form onSubmit={submit} className="space-y-4">
        <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />

        <Input type="file" accept="image/*" onChange={(e) => setForm({ ...form, image: e.target.files[0] })} />

        <Textarea rows={6} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />

        <Input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} />

        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  );
}

export default AdminEdit;
