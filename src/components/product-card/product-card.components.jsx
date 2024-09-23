import { useContext } from "react";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { CartContext } from "../../context/cart.context";
import {
  ProductCardContainer,
  ProductImage,
  ProductCardFooter,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={name} />
      <ProductCardFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        장바구니넣기
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
