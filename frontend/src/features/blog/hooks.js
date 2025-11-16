import { useEffect, useState } from "react";
import { fetchPosts, fetchPost } from "./api";

// GET ALL POSTS (with search + pagination)
export function useBlogs(query = "", page = 1, limit = 10) {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts({ q: query, page, limit })
      .then((res) => {
        setPosts(res.data || []);
        setMeta({});
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [query, page, limit]);

  return { posts, meta, loading };
}

// GET SINGLE POST (DETAIL)
export function usePost(id) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetchPost(id);
        setPost(res.data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { post, loading };
}
