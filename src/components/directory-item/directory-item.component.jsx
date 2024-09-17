import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Link to={`/shop/${title}`} className="directory-item-body">
        <h2>{title.toUpperCase()}</h2>
        <p>상품보기</p>
      </Link>
    </div>
  );
};

export default DirectoryItem;
