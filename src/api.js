import axios from 'axios';

const BASE_URL = 'https://opendata.resas-portal.go.jp/api/v1';

export const getPrefectureList = (apiKey) => (
  axios.get(
    `${BASE_URL}/prefectures`,
    {
      headers: {
        'X-API-KEY': apiKey,
      },
    },
  )
);

export const getPopulationComposition = (prefectureCode, apiKey) => (
  axios.get(
    `${BASE_URL}/population/composition/perYear?cityCode=-&prefCode=${prefectureCode}`,
    {
      headers: {
        'X-API-KEY': apiKey,
      },
    },
  )
);
