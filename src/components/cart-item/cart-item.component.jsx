import {
  CartItemContainer,
  ItemDetails,
  ItemImg,
  ItemName,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <ItemImg src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span>{`${quantity}개 X $${price}`}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
