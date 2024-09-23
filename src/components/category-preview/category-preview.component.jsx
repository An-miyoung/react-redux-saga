import ProductCard from "../product-card/product-card.components";

import {
  CategoryPreviewContainer,
  CategoryTitle,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, categories }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={`/shop/${title}`} className="title">
          {title.toUpperCase()}
        </CategoryTitle>
      </h2>
      <Preview>
        {categories
          .filter((_, idx) => idx < 4)
          .map((category) => (
            <ProductCard key={category.id} product={category} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
