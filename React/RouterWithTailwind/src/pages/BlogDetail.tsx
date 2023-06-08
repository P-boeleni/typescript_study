import { Link } from "react-router-dom";
import "./css/BlogDetail.css";
const BlogDetail = () => {
  return (
    <>
      <h1>BlogDetali</h1>
      <Link to={`/`}>戻る</Link>
    </>
  );
};

export default BlogDetail;
