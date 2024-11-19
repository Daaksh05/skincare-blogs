// Home.js
import { Link } from "react-router-dom";
import Bg from "../assets/img/dry.jpeg"
import Hg from "../assets/img/oily.jpeg"
import Fg from "../assets/img/sensitive.jpeg"
import Eg from "../assets/img/night.jpg"
import Ig from "../assets/img/day.jpeg"
import Zg from "../assets/img/sunscreen.jpeg"
const Home = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Take Care of Oily Skin",
      image: Bg,
    },
    {
      id: 2,
      title: "Best Skincare Routines for Dry Skin",
      image: Hg,
    },
    {
      id: 3,
      title: "Top 5 Skin Cre Products",
      image: Fg,
    },
    {
      id: 4,
      title: "Nighttime Skin care Routine",
      image: Eg,
    },
    {
      id: 5,
      title: "Morning skincare routine",
      image: Ig,
    },
    {
      id: 6,
      title: "Importance of Sunscreen",
      image: Zg,
    },

  ];

  return (
    <div className="home-container">
      <h1>Welcome to the Skincare Blog</h1>
      <h2>Latest Blog Posts</h2>
      <ul className="blog-list">
        {blogPosts.map(post => (
          <li key={post.id} className="blog-item">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-info">
              <Link to={`/blog/${post.id}`} className="blog-title">{post.title}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
