import { BASE_URL } from "../constants";

const delayFetch = (filename, delayTime) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetch(BASE_URL + filename));
    }, delayTime);
  });

const api = (filename, delayTime = 100) =>
  delayFetch(filename, delayTime).then((response) => response.json());

export default api;
