import { Link } from "react-router-dom";
import "./css/BlogList.css";
const BlogList = () => {
  return (
    <>
      <div className="m-20">
        <h1 className="mb-10 text-xl font-bold">ブログ一覧</h1>
        <ul className="mb-10 text-gray-500">
          <li>
            <Link to={`/blogDetail/`}>ブログ詳細</Link>
          </li>
          <li>
            <Link to={`/blogWrite/`}>ブログを書く</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogList;
