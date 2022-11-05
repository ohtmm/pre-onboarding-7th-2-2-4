import React from "react";
import styled from "styled-components";

export default function SideBar() {
  return (
    <SideBarContainer>
      <LogoContainer>
        <Logo src="/images/logo.png" alt="lever-logo" />
      </LogoContainer>
      <Service>
        <Title>서비스</Title>
        <Select>
          <option value="madUp">매드업</option>
          <option value="addService">서비스 추가하기</option>
        </Select>
      </Service>
      <AdCenter>
        <Title>광고관리</Title>
        <Menu>
          <img src="/images/icon_dashboard.png" alt="icon-dashboard" />
          대시보드
        </Menu>
        <Menu>
          <img src="/images/icon_admanagement.png" alt="icon-admanagement" />
          광고센터
        </Menu>
      </AdCenter>
      <Guide>
        <div className="guideIcon"></div>
        <div className="guideText">
          <p>레버 이용 가이드</p>
          <p className="subText">시작하기 전에 알아보기</p>
        </div>
      </Guide>
      <TermsOfService>
        <Title>레버는 함께 만들어갑니다.</Title>
        <ServiceTitle as="a">이용약관</ServiceTitle>
      </TermsOfService>
    </SideBarContainer>
  );
}

const SideBarContainer = styled.div`
  width: 320px;
  height: 984px;
  height: 100%;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
  background-color: ${(props) => props.theme.color.bg_white};
`;

const LogoContainer = styled.h1`
  width: 240px;
  height: 150px;
  margin: 0 40px;
  padding: 60px 0;
  text-indent: -9999px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray_50};
`;
const Logo = styled.img`
  display: block;
  width: 124px;
  height: 30px;
`;

const Service = styled.div`
  height: 100px;
  padding: 0 40px;
  margin: 40px 0;
`;

const AdCenter = styled.div`
  height: 160px;
  padding: 0 40px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.color.gray_300};
`;

const Select = styled.select`
  width: 240px;
  height: 60px;
  padding: 22px 0 19px 20px;
  margin-top: 13px;
  border: 1px solid gray_100;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.color.gray_800};
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 60px;
  padding-left: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  border-radius: 10px;
  color: ${(props) => props.theme.color.gray_800};
  cursor: pointer;
  img {
    margin-right: 12px;
  }

  :hover {
    color: ${(props) => props.theme.color.primary_blue};
    background-color: ${(props) => props.theme.color.gray_50};
  }
`;

const Guide = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  left: 40px;
  top: 750px;
  padding-left: 20px;
  margin: 260px 40px 40px 40px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.secondary_blue};
  .guideIcon {
    width: 40px;
    height: 40px;
    margin-right: 8px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.color.primary_blue};
    background-image: url("/images/icon_light.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  .guideText {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.color.gray_800};

    .subText {
      margin-top: 7px;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: ${(props) => props.theme.color.gray_300};
    }
  }
`;

const TermsOfService = styled.div`
  margin: 40px;
`;

const ServiceTitle = styled(Title)`
  text-decoration: underline;
  cursor: pointer;
`;
