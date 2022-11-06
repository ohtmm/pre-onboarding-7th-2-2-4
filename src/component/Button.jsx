import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

export default function Button({ bgColor, text }) {
  return <ButtonContainer>{text}</ButtonContainer>;
}

const ButtonContainer = styled.button`
  display: block;
  width: 92px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.color.gray_100};
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.bg_white};
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.color.gray_800};
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string
};
