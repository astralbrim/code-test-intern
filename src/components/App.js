import React, { useEffect, useState } from 'react';
import Header from './header';
import RadioButtons from './radioButtons';
import Chart from './chart';
import { getPrefectureList } from '../api'
import './App.css';

function App() {
    const [prefectureData, setPrefectureData] = useState([{prefCode: "", prefName: ""}]);

    useEffect(
         () => {
             const get = async () => {
                 const result = await getPrefectureList();
                 setPrefectureData(result.data.result);
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
