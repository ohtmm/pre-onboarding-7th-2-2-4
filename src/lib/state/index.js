import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const trendState = atom({
  key: "trend",
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const adListState = atom({
  key: "adList",
  default: [],
  effects_UNSTABLE: [persistAtom]
});
