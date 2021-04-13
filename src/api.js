import axios, { AxiosRequestConfig } from 'axios';
import {apiKey} from "./config";
class api {
    BASE_URL = "https://opendata.resas-portal.go.jp/api/v1"
    config = {
        'X-API-KEY' : apiKey
    }
    
    getPrefectureList(){
        axios.get(
            `${this.BASE_URL}/prefectures`,
            this.config
        ).then(

        )
    }

    getPopulationComposition(prefectureCode){
        axios.get(
            `${this.BASE_URL}/population/composition/perYear?cityCode=-?prefCode=${prefectureCode}`,
            this.config
        ).then(

        )
    }
}