import React from "react";
import styles from "../styles/Blogs.module.css";
import FeaturedBlog from "../components/FeaturedBlog";
import BlogCard from "../components/BlogCard";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Blogs() {
  const plus = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M14.25 10.2485H9.75V14.7485H8.25V10.2485H3.75V8.7485H8.25V4.2485H9.75V8.7485H14.25V10.2485Z"
        fill="#F4F4F4"
      />
    </svg>
  );

  return (
    <>
      <section id={`${styles.blogs_page}`}>
        <FeaturedBlog route_path='article' />
        
        <div className={`${styles.heading}`}>
          <h4>Discover all articles</h4>
          <a href="#" className={`${styles.create_blog_button}`}>
            {plus} Share your story
          </a>
        </div>
        <div className={`${styles.blogs_container}`}>
          <BlogCard route_path='article'/>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}

export default Blogs;
