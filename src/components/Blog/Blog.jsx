import React from "react";
import Header from "../Header/Header";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      image: "https://via.placeholder.com/600x400",
      date: "November 20, 2024",
      author: "Abdul Wahab Rubel",
      excerpt:
        "Explore the latest trends and technologies shaping the future of web development, including AI, PWAs, and serverless architecture.",
      content: "Web development is constantly evolving...",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS for Modern UI",
      image: "https://via.placeholder.com/600x400",
      date: "October 15, 2024",
      author: "Abdul Wahab Rubel",
      excerpt:
        "Learn how to use Tailwind CSS to create beautiful, responsive, and modern user interfaces with minimal effort.",
      content: "Tailwind CSS has become a popular utility-first CSS framework...",
    },
    {
      id: 3,
      title: "Why React Remains the Top Frontend Library",
      image: "https://via.placeholder.com/600x400",
      date: "September 10, 2024",
      author: "Abdul Wahab Rubel",
      excerpt:
        "Discover why React continues to dominate the frontend development ecosystem and how to leverage its capabilities.",
      content: "React's component-based architecture and ecosystem...",
    },
    // Add more blog posts as needed
  ];

  return (
    <div>
      <Header></Header>
      <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Welcome to My Blog
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mt-2">
                  {post.date} | By {post.author}
                </p>
                <p className="text-gray-600 mt-4">{post.excerpt}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mt-2">
                  {post.date} | By {post.author}
                </p>
                <p className="text-gray-600 mt-4">{post.excerpt}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mt-2">
                  {post.date} | By {post.author}
                </p>
                <p className="text-gray-600 mt-4">{post.excerpt}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mt-2">
                  {post.date} | By {post.author}
                </p>
                <p className="text-gray-600 mt-4">{post.excerpt}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mt-2">
                  {post.date} | By {post.author}
                </p>
                <p className="text-gray-600 mt-4">{post.excerpt}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mt-2">
                  {post.date} | By {post.author}
                </p>
                <p className="text-gray-600 mt-4">{post.excerpt}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Blog;
