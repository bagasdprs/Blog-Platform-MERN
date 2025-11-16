import React from "react";
import { useEffect, useState } from "react";
import { fetchPost } from "../features/blog/api";
import { useParams } from "react-router-dom";
import Spinner from "../components/ui/Spinner";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost(id).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <Spinner />;

  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        {/* <img src={post.image} alt={post.title} className="w-full h-60 object-cover rounded" /> */}
        <img src={post.image ? `http://localhost:5000${post.image}` : "/placeholder.png"} alt={post.title} className="w-full h-60 object-cover rounded" />

        <h1 className="text-3xl font-bold mt-4">{post.title}</h1>

        <p className="text-gray-500 mt-2">Tags: {post.tags.join(", ")}</p>

        <p className="mt-6 text-lg leading-relaxed">{post.content}</p>
      </div>
    </>
  );
}

export default PostDetails;
