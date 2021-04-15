import React, {useState} from 'react';
import { getPopulationComposition } from '../api'

const RadioButtons = (props) => {
    const {prefectureData, populationData, setPopulationData} = props;

    const handleRadioButtons = (e) => {
        const targetKey = e.currentTarget.dataset.key;

        const get = async () => {
            const result = await getPopulationComposition(targetKey);
            result.data.result.data[0].prefCode = targetKey;
            console.log(typeof (result.data.result.data[0].data));
            setPopulationData([...populationData, ...result.data.result.data[0].data]);
            console.log(populationData);
        }
        get();

    }
    return (
        prefectureData?.map(
            (d, index) => {
                return(
                    <li >{d?.prefName} <input type="radio" data-key={index + 1} onChange={(e) => handleRadioButtons(e)} /></li>
                )
            }
        )

    )

}

export default RadioButtons;