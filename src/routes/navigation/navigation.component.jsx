import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

import {
  NavigatonContainer,
  LogoContainer,
  NavLinkContainer,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handleSignOut = async () => await signOutUser();

  return (
    <Fragment>
      <NavigatonContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">쇼핑몰</NavLink>
          {currentUser !== null ? (
            <NavLink as="span" onClick={handleSignOut}>
              로그아웃
            </NavLink>
          ) : (
            <NavLink to="/auth">로그인</NavLink>
          )}
          {/* drop down  방식의 cart를 불러오는 버튼 */}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigatonContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
