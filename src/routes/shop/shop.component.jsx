import { Fragment, useContext } from "react";
import ProductCard from "../../components/product-card/product-card.components";
import "./shop.styles.scss";
import { CategoriesContext } from "../../context/categories.context";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, index) => (
        <Fragment key={index}>
          <h2>{title.toUpperCase()}</h2>
          {
            <div className="products-container">
              {categoriesMap[title].map((category) => (
                <ProductCard key={category.id} product={category} />
              ))}
            </div>
          }
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
