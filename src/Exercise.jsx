import { useEffect, useState } from "react";
import PostCard from "./PostCard.jsx";
import { getPosts } from "./Services.js";

function Exercise() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        setError("Data post gagal dimuat. Periksa koneksi internet lalu coba lagi.");
        console.error("[Exercise] Gagal menampilkan data post:", error.message);
      }
    };

    fetchPosts();
  }, []);

  //filter hanya yang city nya Semarang
  //const nonSemarangUsers = users.filter((user) => user.city !== "Semarang");    

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Post Cards
      </h1>

      {error ? (
        <p role="alert" className="mx-auto max-w-5xl rounded-lg bg-red-100 p-4 text-center text-red-700">
          {error}
        </p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-600">Memuat data post...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.slice(0, 9).map((post) => (
  <PostCard
    key={post.id}
    title={post.title}
    body={post.body}
  />
))}
        </div>
      )}
    </main>
  );
}

export default Exercise;
