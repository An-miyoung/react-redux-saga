import { useSelector } from "react-redux";
import Spinner from "../spinner/spinner.component";
import ProductCard from "../product-card/product-card.components";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";
import {
  CategoryPreviewContainer,
  CategoryTitle,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, categories }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={`/shop/${title}`} className="title">
          {title.toUpperCase()}
        </CategoryTitle>
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <Preview>
          {categories
            .filter((_, idx) => idx < 4)
            .map((category) => (
              <ProductCard key={category.id} product={category} />
            ))}
        </Preview>
      )}
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
