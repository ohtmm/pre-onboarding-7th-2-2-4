import React from "react";
import styled from "styled-components";
import Board from "./Board";
import ContentHeader from "../../component/Content/ContentHeader";

export default function DashBoard() {
  return (
    <>
      <ContentHeader title="대시보드" />
      <BoardName>통합 광고 현황</BoardName>
      <Board />
    </>
  );
}

const BoardName = styled.h3`
  margin: 21px 0 0 40px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.color.gray_800};
`;
