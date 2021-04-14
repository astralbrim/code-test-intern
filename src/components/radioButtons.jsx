import React, {useState} from 'react';
import { getPopulationComposition } from '../api'

const RadioButtons = (props) => {
    const {prefectureData, setPopulationData} = props;

    const handleRadioButtons = (e) => {
        const targetKey = e.currentTarget.dataset.key;
        const get = async () => {
            const result = await getPopulationComposition(targetKey);
            setPopulationData(result.data.result.data[0]);
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