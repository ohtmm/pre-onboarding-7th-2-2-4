import React from "react";
import styled from "styled-components";
import Button from "../../component/Button";
import ContentHeader from "../../component/Content/ContentHeader";
import SelectButton from "../../component/SelectButton";
import AdItem from "./AdItem";

export default function AdManagement() {
  return (
    <>
      <ContentHeader title="광고관리" />
      <AdBoard>
        <ButtonContainer>
          <SelectButton>
            <option value="all">전체 광고</option>
            <option value="now">진행 중</option>
            <option value="done">중단</option>
          </SelectButton>
          <Button text="광고 만들기" bgColor="primary_blue" />
        </ButtonContainer>
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
  height: 1020px;
  margin: 20px auto;
  padding-top: 30px;
  background: ${(props) => props.theme.color.bg_white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

const AdList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 50px 30px 30px;
`;
