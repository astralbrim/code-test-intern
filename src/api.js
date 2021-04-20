import axios from 'axios';
import { apiKey } from './config';

const BASE_URL = 'https://opendata.resas-portal.go.jp/api/v1';
const config = {
  headers: {
    'X-API-KEY': apiKey,
  },
};

export const getPrefectureList = () => (
  axios.get(
    `${BASE_URL}/prefectures`,
    config,
  )
);

export const getPopulationComposition = (prefectureCode) => (
  axios.get(
    `${BASE_URL}/population/composition/perYear?cityCode=-&prefCode=${prefectureCode}`,
    config,
  )
);
