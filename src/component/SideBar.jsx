import React from "react";
import styled from "styled-components";

export default function SideBar() {
  return <SideBarContainer>sidebar</SideBarContainer>;
}

const SideBarContainer = styled.div`
  width: 320px;
  height: 984px;
  height: 100%;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
  background-color: ${(props) => props.theme.color.bg_white};
`;
