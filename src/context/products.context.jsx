import { createContext, useEffect, useState } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const value = { products };

  // 최초 데이터를 batch 방식으로 firestore 에 쓴다
  // useEffect(() => {
  //   setProducts(addCollectionAndDocuments("categories", SHOP_DATA));
  // }, []);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
