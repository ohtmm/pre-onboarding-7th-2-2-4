import React from "react";
import styled from "styled-components";
import Button from "../../component/Button";

export default function AdItem() {
  return (
    <AdItemContainer>
      <AdName>웹광고_20210603123030</AdName>
      <AdDataList>
        <AdDataItem>
          <p>상태</p>
          <span>진행중</span>
        </AdDataItem>
        <AdDataItem>
          <p>상태</p>
          <span>진행중</span>
        </AdDataItem>
      </AdDataList>
      <Button text="수정하기" />
    </AdItemContainer>
  );
}

const AdItemContainer = styled.div`
  width: 305px;
  height: 420px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.color.gray_100};
  border-radius: 10px;
`;

const AdName = styled.h3`
  margin: 20px 0px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const AdDataList = styled.ul`
  width: 265px;
  margin: 0 auto;
`;

const AdDataItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 265px;
  height: 40px;
  border-top: 1px solid ${(props) => props.theme.color.gray_50};

  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${(props) => props.theme.color.gray_300};
  }

  span {
    position: absolute;
    left: 120px;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: ${(props) => props.theme.color.gray_800};
  }
`;
