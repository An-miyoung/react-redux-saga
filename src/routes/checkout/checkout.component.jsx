import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>이미지</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>상품명</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>수량</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>가격</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>삭제</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item) => (
        <CheckoutItem cartItem={item} key={item.id} />
      ))}
      <Total>총액 : ${`${cartTotal}`}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
