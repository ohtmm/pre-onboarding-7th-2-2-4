import React from "react";
import styled from "styled-components";
import BoardItem from "./BoardItem";
import SelectButton from "../../component/SelectButton";

export default function Board() {
  return (
    <>
      <BoardContainer>
        <BoardList>
          <BoardItem />
          <BoardItem />
          <BoardItem />
          <BoardItem />
          <BoardItem />
          <BoardItem />
        </BoardList>
        <BoardChart>
          <SelectButton />
          <SelectButton />
        </BoardChart>
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

const BoardList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 40%;
`;

const BoardChart = styled.div`
  margin: 40px;
`;
