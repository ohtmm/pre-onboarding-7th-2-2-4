import React from "react";
import styled from "styled-components";
import BoardItem from "./BoardItem";

export default function BoardList() {
  return (
    <BoardListContainer>
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
    </BoardListContainer>
  );
}

const BoardListContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 40%;
`;
