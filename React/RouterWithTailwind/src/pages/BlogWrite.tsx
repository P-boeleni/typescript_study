import { Link } from "react-router-dom";
import "./css/BlogWrite.css";
const BlogWrite = () => {
  return (
    <>
      <h1>Blog Write</h1>
      <p>test</p>
      <Link to={`/`}>戻る</Link>
    </>
  );
};

export default BlogWrite;
