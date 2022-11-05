const delayFetch = (url, options) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetch(url, options));
    }, options.delay);
  });

const api = (url, delay) => delayFetch(url, { delay });

export default api;
