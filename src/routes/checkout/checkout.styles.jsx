import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;

  display: grid;
  grid-template-columns: (1.5fr 2fr 1.5fr 1fr 1fr);
  text-align: center;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
