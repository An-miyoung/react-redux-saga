import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { categorySelector } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector((state) => categorySelector(state));

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const categories = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} categories={categories} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
