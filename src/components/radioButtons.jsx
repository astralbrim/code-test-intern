import React from 'react';
import { getPopulationComposition } from '../api'

const RadioButtons = (props) => {
    const {prefectureData} = props;
    return (
    prefectureData?.map(
        (d, index) => {
            return(
                <li key={`data_${index}`}>{d?.prefName} <input type="radio" /></li>
            )
        }
    )
    )

}

export default RadioButtons;