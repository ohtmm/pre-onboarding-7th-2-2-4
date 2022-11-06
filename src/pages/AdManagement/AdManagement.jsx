import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Button from "../../component/Button";
import ContentHeader from "../../component/Content/ContentHeader";
import SelectButton from "../../component/SelectButton";
import api from "../../lib/api";
import { AD_SELECT_BUTTON_ARRAY, FILENAME } from "../../lib/constants";
import { adListState } from "../../lib/state";
import AdItem from "./AdItem";

export default function AdManagement() {
  const [adList, setAdList] = useRecoilState(adListState);
  const [selectedStatus, setSelectedStatus] = useState("all");
  console.log(adList);

  const handleSelectStatus = (e) => {
    console.log(e.target.value);
    setSelectedStatus(e.target.value);
  };
  useEffect(() => {
    const test = async () => {
      const data = await api(FILENAME.AD_LIST_DATA_SET, 10);
      console.log(data);
      setAdList(data.ads);
    };
    test();
  }, []);

  return (
    <>
      <ContentHeader title="광고관리" />
      <AdBoard>
        <ButtonContainer>
          <SelectButton onChange={handleSelectStatus} value={selectedStatus}>
            {AD_SELECT_BUTTON_ARRAY.map(({ id, name, value }) => {
              return (
                <option value={value} key={id}>
                  {name}
                </option>
              );
            })}
          </SelectButton>
          <Button text="광고 만들기" bgColor="primary_blue" />
        </ButtonContainer>
        <AdList>
          {adList.map((adItem) => {
            if (selectedStatus === "all") {
              return <AdItem adItem={adItem} key={adItem.id} />;
            } else {
              return (
                adItem.status === selectedStatus && (
                  <AdItem adItem={adItem} key={adItem.id} />
                )
              );
            }
          })}
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
