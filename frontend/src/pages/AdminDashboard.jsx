import React from "react";
import { useBlogs } from "../features/blog/hooks";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Spinner from "../components/ui/Spinner";
import { deletePost } from "../features/blog/api";
import { useAuth } from "../context/AuthContext";

function AdminDashboard() {
  const { token, user } = useAuth();
  const { posts, loading } = useBlogs("");

  const handleDelete = async (id) => {
    await deletePost(id, token);
    window.location.reload();
  };

  if (loading) return <Spinner />;

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>

          {user?.role === "admin" && (
            <Link to="/admin/create">
              <Button>Add New Post</Button>
            </Link>
          )}
        </div>

        <div className="mt-6 space-y-4">
          {posts.map((post) => (
            <div key={post._id} className="p-4 border rounded flex justify-between items-center">
              <h2 className="font-semibold">{post.title}</h2>

              {user?.role === "admin" && (
                <div className="space-x-3">
                  <Link to={`/admin/edit/${post._id}`}>
                    <Button className="bg-yellow-500 hover:bg-yellow-600">Edit</Button>
                  </Link>

                  <Button onClick={() => handleDelete(post._id)} className="bg-red-600 hover:bg-red-700">
                    Delete
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Link to="/admin/create">
            <Button>Add New Post</Button>
          </Link>
        </div>

        <div className="mt-6 space-y-4">
          {posts.map((post) => (
            <div key={post._id} className="p-4 border rounded flex justify-between items-center">
              <h2 className="font-semibold">{post.title}</h2>

              <div className="space-x-3">
                <Link to={`/admin/edit/${post._id}`}>
                  <Button className="bg-yellow-500 hover:bg-yellow-600">Edit</Button>
                </Link>

                <Button onClick={() => handleDelete(post._id)} className="bg-red-600 hover:bg-red-700">
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default AdminDashboard;
