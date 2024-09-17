import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.components";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, categories }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`/shop/${title}`} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {categories
          .filter((_, idx) => idx < 4)
          .map((category) => (
            <ProductCard key={category.id} product={category} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
