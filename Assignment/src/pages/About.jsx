// About.js
import React from "react";
import AboutImage from "../assets/img/about-image.jpg"
const About = () => {
  return (
    <div className="about-container">
      <h1>About This Blog</h1>
      <img src={AboutImage} alt="About the Skincare Blog" className="about-image" />
      <p>
        The skincare blog website offers a comprehensive platform for skincare enthusiasts, providing insightful articles, tips, and product recommendations to help users enhance their skincare routines. With a clean, modern design and vibrant colors, it guides visitors through various sections, including blog posts on skincare routines, ingredient insights, and seasonal tips. The website also features an "About" page detailing the blog's mission and values, promoting healthy skin for all types. A simple "Contact" page allows users to engage with the content creators, while its responsive design ensures a seamless experience across devices, making it a trusted resource for skincare knowledge.
      </p>
    </div>
  );
};

export default About;
