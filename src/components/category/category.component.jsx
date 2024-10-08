import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../product-card/product-card.components";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import {
  categorySelector,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categorySelector);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
