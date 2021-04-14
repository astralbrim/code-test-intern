import React, { useEffect, useState } from 'react';
import Header from './header';
import RadioButtons from './radioButtons';
import Chart from './chart';
import { getPrefectureList } from '../api'
import './App.css';

function App() {
    const [prefectureData, setPrefectureData] = useState([]);

    useEffect(
         () => {
             const get = async () => {
                 const result = await getPrefectureList();
                  setPrefectureData(result.data.result);
                 console.log(prefectureData);
             }
             get();
        },
        []
    )

    return (
        <div className="App">
            <Header/>
            <RadioButtons prefectureData={prefectureData}/>
            <Chart/>
        </div>
    )

}

export default App;
