export const BASE_URL = process.env.PUBLIC_URL + "assets/resources/";

export const FILENAME = {
  TREND_DATA_SET: "wanted_FE_trend-data-set.json",
  AD_LIST_DATA_SET: "wanted_FE_ad-list-data-set.json"
};

export const AD_SELECT_BUTTON_ARRAY = [
  {
    id: 1,
    name: "전체 광고",
    value: "all"
  },
  {
    id: 2,
    name: "진행 중",
    value: "active"
  },
  {
    id: 3,
    name: "중단됨",
    value: "ended"
  }
];
