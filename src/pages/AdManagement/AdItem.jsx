import React from "react";
import styled from "styled-components";

export default function AdItem() {
  return (
    <AdItemContainer>
      <h3>웹광고_20210603123030</h3>
    </AdItemContainer>
  );
}

const AdItemContainer = styled.div`
  width: 123px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.color.gray_100};
  border-radius: 10px;
  h3 {
    margin: 40px 20px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
`;
