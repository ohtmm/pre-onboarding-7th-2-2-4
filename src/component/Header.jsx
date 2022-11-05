import React from "react";
import styled from "styled-components";

export default function Header() {
  return <HeaderContainer>header</HeaderContainer>;
}

const HeaderContainer = styled.header`
  width: 1120px;
  height: 80px;
  background-color: ${(props) => props.theme.color.bg_gray};
`;
