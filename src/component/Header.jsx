import React from "react";
import styled from "styled-components";
import { BiBell } from "react-icons/bi";
import { FiSettings, FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <BiBell size="24" style={{ margin: 10, color: "#3A474E" }} />
        <FiSettings size="24" style={{ margin: 10, color: "#3A474E" }} />
        <UserIcon>
          <FiUser size="24" style={{ margin: 10, color: "  #94A2AD" }} />
        </UserIcon>
        <span className="userName">원티드님</span>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  min-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: right;
  width: 1120px;
  height: 80px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray_50};
  background-color: ${(props) => props.theme.color.bg_gray};

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40px;

    .userName {
      margin-left: 10px;
    }
  }
`;

const UserIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.color.gray_300};
  background-color: ${(props) => props.theme.color.gray_100};
`;
