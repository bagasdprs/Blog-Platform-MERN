import React from "react";
import { useBlogs } from "../features/blog/hooks";
import { useSearch } from "../context/SearchContext";
import Card from "../components/ui/Card";
import { Link } from "react-router-dom";
import Spinner from "../components/ui/Spinner";

function Home() {
  const { search } = useSearch();
  const { posts, loading } = useBlogs(search);

  if (loading) return <Spinner />;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {posts.map((post) => {
          const imageUrl = post.image ? `http://localhost:5000${post.image}` : "https://via.placeholder.com/600x400?text=No+Image";

          return (
            <Card key={post._id}>
              <img src={imageUrl} alt={post.title} className="w-full h-40 object-cover rounded" />

              <h2 className="text-xl font-semibold mt-3">{post.title}</h2>
              <p className="text-gray-600 line-clamp-3">{post.content}</p>

              <Link to={`/posts/${post._id}`} className="mt-3 inline-block text-blue-600 underline">
                Read more
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
