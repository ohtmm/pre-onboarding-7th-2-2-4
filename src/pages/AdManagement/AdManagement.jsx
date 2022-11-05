import React from "react";
import styled from "styled-components";
import { BoardContainer } from "../DashBoard/Board";
import ContentHeader from "../../component/Content/ContentHeader";
import AdItem from "./AdItem";

export default function AdManagement() {
  return (
    <>
      <ContentHeader title="광고관리" />
      <AdBoard>
        <AdList>
          <AdItem />
          <AdItem />
          <AdItem />
          <AdItem />
          <AdItem />
        </AdList>
      </AdBoard>
    </>
  );
}
const AdBoard = styled.div`
  width: 1039px;
  height: 654px;
  margin: 20px auto;
  padding-top: 30px;
  background: ${(props) => props.theme.color.bg_white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

const AdList = styled.ul``;
