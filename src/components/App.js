import React, { useEffect, useState } from 'react';
import Header from './header';
import RadioButtons from './radioButtons';
import Chart from './chart';
import { getPrefectureList } from '../api';
import './App.css';

function App() {
  const [prefectureData, setPrefectureData] = useState([]);
  const [populationData, setPopulationData] = useState([]);
  const [apiKey, setApiKey] = useState('');

  useEffect(
    () => {
      setApiKey(window.location.search.substring(1));
    },
    [],
  );
  useEffect(
    () => {
      const get = async () => {
        const result = await getPrefectureList(apiKey);
        setPrefectureData(result.data.result);
      };
      get().catch();
    },
    [apiKey],
  );

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Header />
      <RadioButtons
        prefectureData={prefectureData}
        populationData={populationData}
        setPopulationData={setPopulationData}
        apiKey={apiKey}
      />
      <Chart populationData={populationData} />
    </div>
  );
}

export default App;
