import React from "react";
import styled from "styled-components";

export default function SelectButton() {
  return (
    <SelectContainer>
      <option value="ROAS">
        <span></span>ROAS
      </option>
    </SelectContainer>
  );
}

const SelectContainer = styled.select`
  width: 123px;
  height: 40px;
  margin-right: 10px;
  border: 1px solid ${(props) => props.theme.color.gray_100};
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.color.gray_800};
`;
