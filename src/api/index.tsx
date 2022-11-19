import mock from "./mock";

const URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "4ebf422280981fa8839bd79abc7256bb";

const api = {
  get: (city: string) => {
    // return Promise.resolve(mock);
    return fetch(`${URL}?q=${city}&units=metric&appid=${API_KEY}`).then((res) =>
      res.json()
    );
  },
};

export default api;
