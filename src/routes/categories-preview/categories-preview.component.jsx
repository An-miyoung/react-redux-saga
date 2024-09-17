import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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
