import React from 'react'
import styles from "../styles/Blogs.module.css";

function BlogCard() {
    const calendar = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M11.4685 9.84921C11.6474 9.84921 11.819 9.77813 11.9455 9.65162C12.072 9.52511 12.1431 9.35352 12.1431 9.1746C12.1431 8.99569 12.072 8.8241 11.9455 8.69759C11.819 8.57107 11.6474 8.5 11.4685 8.5C11.2896 8.5 11.118 8.57107 10.9915 8.69759C10.865 8.8241 10.7939 8.99569 10.7939 9.1746C10.7939 9.35352 10.865 9.52511 10.9915 9.65162C11.118 9.77813 11.2896 9.84921 11.4685 9.84921ZM11.4685 12.5476C11.6474 12.5476 11.819 12.4765 11.9455 12.35C12.072 12.2235 12.1431 12.0519 12.1431 11.873C12.1431 11.6941 12.072 11.5225 11.9455 11.396C11.819 11.2695 11.6474 11.1984 11.4685 11.1984C11.2896 11.1984 11.118 11.2695 10.9915 11.396C10.865 11.5225 10.7939 11.6941 10.7939 11.873C10.7939 12.0519 10.865 12.2235 10.9915 12.35C11.118 12.4765 11.2896 12.5476 11.4685 12.5476ZM8.77007 9.1746C8.77007 9.35352 8.699 9.52511 8.57249 9.65162C8.44597 9.77813 8.27439 9.84921 8.09547 9.84921C7.91655 9.84921 7.74497 9.77813 7.61845 9.65162C7.49194 9.52511 7.42087 9.35352 7.42087 9.1746C7.42087 8.99569 7.49194 8.8241 7.61845 8.69759C7.74497 8.57107 7.91655 8.5 8.09547 8.5C8.27439 8.5 8.44597 8.57107 8.57249 8.69759C8.699 8.8241 8.77007 8.99569 8.77007 9.1746ZM8.77007 11.873C8.77007 12.0519 8.699 12.2235 8.57249 12.35C8.44597 12.4765 8.27439 12.5476 8.09547 12.5476C7.91655 12.5476 7.74497 12.4765 7.61845 12.35C7.49194 12.2235 7.42087 12.0519 7.42087 11.873C7.42087 11.6941 7.49194 11.5225 7.61845 11.396C7.74497 11.2695 7.91655 11.1984 8.09547 11.1984C8.27439 11.1984 8.44597 11.2695 8.57249 11.396C8.699 11.5225 8.77007 11.6941 8.77007 11.873ZM4.72245 9.84921C4.90137 9.84921 5.07296 9.77813 5.19947 9.65162C5.32598 9.52511 5.39706 9.35352 5.39706 9.1746C5.39706 8.99569 5.32598 8.8241 5.19947 8.69759C5.07296 8.57107 4.90137 8.5 4.72245 8.5C4.54354 8.5 4.37195 8.57107 4.24544 8.69759C4.11893 8.8241 4.04785 8.99569 4.04785 9.1746C4.04785 9.35352 4.11893 9.52511 4.24544 9.65162C4.37195 9.77813 4.54354 9.84921 4.72245 9.84921ZM4.72245 12.5476C4.90137 12.5476 5.07296 12.4765 5.19947 12.35C5.32598 12.2235 5.39706 12.0519 5.39706 11.873C5.39706 11.6941 5.32598 11.5225 5.19947 11.396C5.07296 11.2695 4.90137 11.1984 4.72245 11.1984C4.54354 11.1984 4.37195 11.2695 4.24544 11.396C4.11893 11.5225 4.04785 11.6941 4.04785 11.873C4.04785 12.0519 4.11893 12.2235 4.24544 12.35C4.37195 12.4765 4.54354 12.5476 4.72245 12.5476Z"
            fill="#595959"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.72204 1.58533C4.85623 1.58533 4.98492 1.63863 5.07981 1.73352C5.17469 1.8284 5.228 1.95709 5.228 2.09128V2.606C5.67458 2.59723 6.16637 2.59723 6.7074 2.59723H9.48204C10.0238 2.59723 10.5155 2.59723 10.9621 2.606V2.09128C10.9621 1.95709 11.0154 1.8284 11.1103 1.73352C11.2052 1.63863 11.3339 1.58533 11.4681 1.58533C11.6023 1.58533 11.731 1.63863 11.8258 1.73352C11.9207 1.8284 11.974 1.95709 11.974 2.09128V2.64918C12.1494 2.66267 12.3156 2.67976 12.4726 2.70045C13.2632 2.80703 13.9034 3.031 14.4087 3.5356C14.9133 4.04088 15.1372 4.68108 15.2438 5.47172C15.347 6.24076 15.347 7.22231 15.347 8.46223V9.88699C15.347 11.1269 15.347 12.1091 15.2438 12.8775C15.1372 13.6681 14.9133 14.3083 14.4087 14.8136C13.9034 15.3182 13.2632 15.5422 12.4726 15.6488C11.7035 15.752 10.722 15.752 9.48204 15.752H6.70875C5.46883 15.752 4.48661 15.752 3.71823 15.6488C2.9276 15.5422 2.2874 15.3182 1.78212 14.8136C1.27752 14.3083 1.05355 13.6681 0.946964 12.8775C0.84375 12.1085 0.84375 11.1269 0.84375 9.88699V8.46223C0.84375 7.22231 0.84375 6.24009 0.946964 5.47172C1.05355 4.68108 1.27752 4.04088 1.78212 3.5356C2.2874 3.031 2.9276 2.80703 3.71823 2.70045C3.87564 2.67976 4.04182 2.66267 4.21677 2.64918V2.09128C4.21677 1.95721 4.26998 1.82862 4.36472 1.73376C4.45946 1.63889 4.58797 1.58551 4.72204 1.58533ZM3.85181 3.70358C3.17383 3.79465 2.78256 3.966 2.4972 4.25136C2.21185 4.53672 2.0405 4.92799 1.94942 5.60596C1.93413 5.72064 1.92109 5.84185 1.9103 5.96957H14.2798C14.269 5.84185 14.256 5.72042 14.2407 5.60529C14.1496 4.92731 13.9783 4.53604 13.6929 4.25068C13.4076 3.96533 13.0163 3.79398 12.3376 3.70291C11.6448 3.60981 10.7307 3.60846 9.44427 3.60846H6.74585C5.45938 3.60846 4.54597 3.61049 3.85181 3.70358ZM1.85498 8.50001C1.85498 7.9239 1.85498 7.42267 1.86375 6.98215H14.3264C14.3351 7.42267 14.3351 7.9239 14.3351 8.50001V9.84922C14.3351 11.1357 14.3338 12.0498 14.2407 12.7433C14.1496 13.4212 13.9783 13.8125 13.6929 14.0979C13.4076 14.3832 13.0163 14.5546 12.3376 14.6456C11.6448 14.7387 10.7307 14.7401 9.44427 14.7401H6.74585C5.45938 14.7401 4.54597 14.7387 3.85181 14.6456C3.17383 14.5546 2.78256 14.3832 2.4972 14.0979C2.21185 13.8125 2.0405 13.4212 1.94942 12.7426C1.85633 12.0498 1.85498 11.1357 1.85498 9.84922V8.50001Z"
            fill="#595959"
          />
        </svg>
      );
      const views = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <g clip-path="url(#clip0_462_237)">
            <path
              d="M7.28551 12.9643C4.24979 12.9643 0.606934 9.92856 0.606934 7.49999C0.606934 5.07142 4.24979 2.03571 7.28551 2.03571C10.3212 2.03571 13.9641 5.07142 13.9641 7.49999C13.9641 9.92856 10.3212 12.9643 7.28551 12.9643ZM7.28551 4.46428C6.48038 4.46428 5.70824 4.78411 5.13893 5.35342C4.56962 5.92272 4.24979 6.69487 4.24979 7.49999C4.24979 8.30511 4.56962 9.07726 5.13893 9.64657C5.70824 10.2159 6.48038 10.5357 7.28551 10.5357C8.09063 10.5357 8.86277 10.2159 9.43208 9.64657C10.0014 9.07726 10.3212 8.30511 10.3212 7.49999C10.3212 6.69487 10.0014 5.92272 9.43208 5.35342C8.86277 4.78411 8.09063 4.46428 7.28551 4.46428Z"
              stroke="#595959"
              stroke-width="1.21429"
            />
          </g>
          <defs>
            <clipPath id="clip0_462_237">
              <rect
                width="14.5714"
                height="14.5714"
                fill="white"
                transform="translate(0 0.214294)"
              />
            </clipPath>
          </defs>
        </svg>
      );
      
  return (
    <div className={`${styles.blog_card}`}>
          <div className={`${styles.blog_image}`}>
            <img
              src="https://static.wixstatic.com/media/c45202_ae229d7a1340447b99e248f9f9fbf1a4~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/c45202_ae229d7a1340447b99e248f9f9fbf1a4~mv2.jpg"
              alt="blog image"
            />
          </div>
          <h4 className={`${styles.blog_heading}`}>
            ShopKirana (DIRECT) raised $38Mn (285 Crore~) led by Sixth Sense
            Ventures, Oman India, Info Edge.
          </h4>
          <p className={`${styles.blog_content}`}>
            Business-to-business FMCG startup Shopkirana said it has raised $38
            million from Sixth Sense Ventures, Oman India joint investment fund,
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
            facilis.
          </p>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.meta_data_ctr}`}>
            <div className={`${styles.date}`}>{calendar} Jan 27, 2022</div>
            <div className={`${styles.views}`}>{views} 2,532 views</div>
          </div>
          <a href="#" className={`${styles.read_more_btn}`}>
            Read More
          </a>
        </div>
  )
}

export default BlogCard