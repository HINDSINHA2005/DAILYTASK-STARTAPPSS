import { Link } from "react-router-dom";

const blogs = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "React Router" },
];

function Blog() {
  return (
    <>
      <h1>Blogs</h1>
      {blogs.map(blog => (
        <div key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            {blog.title}
          </Link>
        </div>
      ))}
    </>
  );
}
export default Blog;
