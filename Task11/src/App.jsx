import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const POSTS = [
  { id: 1, title: "The Joy of Coding", excerpt: "Why writing code feels like magic...", content: "Full story: Coding is the closest thing we have to magic spells. You type words, and things happen!" },
  { id: 2, title: "React + Tailwind", excerpt: "The ultimate developer duo...", content: "Full story: Tailwind allows you to style components without leaving your HTML/JSX. It speeds up development significantly." },
  { id: 3, title: "Modern UI Design", excerpt: "Less is often much more.", content: "Full story: Clean lines, consistent spacing, and subtle shadows make for a premium user experience." },
];

const BlogList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {POSTS.map((post) => (
      <div key={post.id} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link 
          to={`/post/${post.id}`} 
          className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Read More
        </Link>
      </div>
    ))}
  </div>
);

const PostDetail = () => {
  const { id } = useParams();
  const post = POSTS.find((p) => p.id === parseInt(id));

  if (!post) return <h2 className="text-center text-2xl mt-10">Post not found!</h2>;

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl border border-gray-100">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Feed
      </Link>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-blue-500 pl-4">
        {post.content}
      </p>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
        <header className="max-w-5xl mx-auto mb-12 border-b border-gray-100 pb-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-black tracking-tighter text-blue-600">
            MINI.BLOG
          </Link>
          <nav className="space-x-4 text-sm font-medium text-gray-500">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>About</span>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}