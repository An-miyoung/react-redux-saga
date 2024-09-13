import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>이미지</span>
        </div>
        <div className="header-block">
          <span>상품명</span>
        </div>
        <div className="header-block">
          <span>수량</span>
        </div>
        <div className="header-block">
          <span>가격</span>
        </div>
        <div className="header-block">
          <span>삭제</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckoutItem cartItem={item} key={item.id} />
      ))}
      <div className="total">총액 : ${`${cartTotal}`}</div>
    </div>
  );
};

export default Checkout;
