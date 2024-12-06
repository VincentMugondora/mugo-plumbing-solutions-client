import React from 'react'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    id: 1,
    title: "Common Plumbing Issues and How to Fix Them",
    excerpt: "Learn about the most common household plumbing problems and get expert tips on how to resolve them quickly.",
    image: "/blog/plumbing-issues.jpg",
    author: "John Smith",
    date: "March 15, 2024",
    category: "Maintenance",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Water Conservation Tips for Your Home",
    excerpt: "Discover practical ways to reduce your water consumption and save money on your monthly bills.",
    image: "/blog/water-conservation.jpg",
    author: "Sarah Johnson",
    date: "March 12, 2024",
    category: "Tips & Tricks",
    readTime: "4 min read"
  },
  // Add more blog posts as needed
];

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          variants={itemVariants}
        >
          Plumbing Insights & Updates
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Stay informed with the latest plumbing tips, industry news, and expert advice.
        </motion.p>
      </div>

      {/* Categories */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        variants={itemVariants}
      >
        {['All', 'Maintenance', 'Tips & Tricks', 'Emergency', 'Installation'].map((category) => (
          <button
            key={category}
            className="px-6 py-2 rounded-full border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Blog Posts */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {blogPosts.map((post) => (
          <motion.article
            key={post.id}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-sm text-gray-500">{post.category}</span>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-base text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-500">{post.author}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Blog
