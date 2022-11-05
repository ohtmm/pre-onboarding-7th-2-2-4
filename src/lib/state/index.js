import { atom } from "recoil";

export const trendState = atom({
  key: "trend",
  default: []
});

export const adListState = atom({
  key: "adList",
  default: []
});
