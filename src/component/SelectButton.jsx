import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function SelectButton({ children }) {
  return <SelectContainer>{children}</SelectContainer>;
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

SelectButton.propTypes = {
  children: PropTypes.node
};
