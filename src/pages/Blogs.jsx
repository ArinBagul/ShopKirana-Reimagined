import React from "react";
import styles from "../styles/Blogs.module.css";
import FeaturedBlog from "../components/FeaturedBlog";
import BlogCard from "../components/BlogCard";

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
    <section id={`${styles.blogs_page}`}>
      {/* <FeaturedBlog /> */}
      <div className={`${styles.featured_card}`}>
        <div className={`${styles.featured_content}`}>
          <span className={`${styles.featured_badge}`}>Featured</span>
          <h4 className={`${styles.featured_blog_heading}`}>
            ShopKirana (DIRECT) raised $38Mn (285 Crore~) led by Sixth Sense
            Ventures, Oman India, Info Edge.
          </h4>
          <p className={`${styles.featured_blog_content}`}>
            Business-to-business FMCG startup Shopkirana said it has raised $38
            million from Sixth Sense Ventures, Oman India joint investment
            fund, Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum exercitationem eum facere quis blanditiis odit qui veritatis beatae quae? Exercitationem incidunt at temporibus ex magni ratione itaque officiis doloremque numquam repellat? Quos enim in animi soluta quod atque vel suscipit, possimus, quae reprehenderit tenetur consequuntur est voluptates omnis veniam!
          </p>
        </div>
        <div className={`${styles.featured_blog_image}`}>
          <img
            src="https://static.wixstatic.com/media/c45202_ae229d7a1340447b99e248f9f9fbf1a4~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/c45202_ae229d7a1340447b99e248f9f9fbf1a4~mv2.jpg"
            alt="featured blog image"
          />
        </div>
      </div>
      <div className={`${styles.heading}`}>
        <h4>Discover all articles</h4>
        <a href="#" className={`${styles.create_blog_button}`}>
          {plus} Share your story
        </a>
      </div>
      <div className={`${styles.blogs_container}`}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}

export default Blogs;
