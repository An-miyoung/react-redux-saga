import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const handleClick = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>장바구니가 비었습니다.</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleClick}>결제하기</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
