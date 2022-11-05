import React from "react";
import styled from "styled-components";
import { BsFillTriangleFill } from "react-icons/bs";
export default function BoardItem() {
  return (
    <BoardItemContainer>
      <div>
        <ItemName>ROAS</ItemName>
        <ItemValue>697%</ItemValue>
      </div>
      <ValueChangeContainer>
        {/* 조건부 렏더링 */}
        <ValueUp></ValueUp>
        {/* <ValueDown></ValueDown> */}
        <ValueChange>18%</ValueChange>
      </ValueChangeContainer>
    </BoardItemContainer>
  );
}

const BoardItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 18px 40px;
  gap: 146px;
  width: 304px;
  height: 79px;
  border: 0.5px solid ${(props) => props.theme.color.gray_50};
  border-radius: 10px;
`;

const ItemName = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.color.gray_300};
`;

const ItemValue = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.color.gray_800};
`;

const ValueChangeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ValueChange = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.color.gray_300};
`;

const ValueUp = styled.div`
  width: 5px;
  height: 10px;
  margin-right: 10px;
  border: 8px solid white;
  border-bottom: 10px solid ${(props) => props.theme.color.graph_green};
  transform: rotate(180deg);
`;

const ValueDown = styled.div`
  width: 10px;
  height: 8px;
  border: 10px solid white;
  border-bottom: 10px solid ${(props) => props.theme.color.secondary_red};
`;
