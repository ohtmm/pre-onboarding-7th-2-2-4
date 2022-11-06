import React from "react";
import styled from "styled-components";
import BoardChart from "./BoardChart";
import BoardList from "./BoardList";

export default function Board() {
  return (
    <>
      <BoardContainer>
        <BoardList />
        <BoardChart />
      </BoardContainer>
    </>
  );
}

export const BoardContainer = styled.div`
  width: 1039px;
  height: 654px;
  margin: 20px auto;
  padding-top: 30px;
  background: ${(props) => props.theme.color.bg_white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;
