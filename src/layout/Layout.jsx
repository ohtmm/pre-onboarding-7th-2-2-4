import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../component/Header";
import SideBar from "../component/SideBar";

export default function Layout() {
  return (
    <Container>
      <SideBar />
      <Content>
        <Header />
        <Outlet />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 1836px;
  background-color: ${(props) => props.theme.color.bg_gray};
`;

const Content = styled.div``;
