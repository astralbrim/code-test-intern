import React from 'react';
import { getPopulationComposition } from '../api'

const RadioButtons = (props) => {
    const {prefectureData, populationData, setPopulationData} = props;

    const handleRadioButtons = (e) => {
        const targetKey = e.currentTarget.dataset.key;
        const targetPrefName = e.currentTarget.dataset.prefname;

        if (e.target.checked === true) {
            // チェックを入れたときの処理
            const get = async () => {
                const result = await getPopulationComposition(targetKey);
                result.data.result.data[0].data.prefCode = targetKey;
                result.data.result.data[0].data.prefName = targetPrefName;
                setPopulationData([...populationData, result.data.result.data[0]]); //　配列の末尾にチェックが入った都道府県のデータを追加
            }
            get();
        }else{
            // チェックを外した時の処理
            const filteredArray = populationData.filter(
                (obj) => {
                return obj.data.prefCode !== targetKey // targetKey と prefCode が一致している要素をfalseとして返す
            })

            setPopulationData(filteredArray); // targetKey と prefCode が一致していない要素のみを残した新しい配列を格納
        }

    }
    return (
        prefectureData?.map(
            (d, index) => {
                return(
                    <li>{d?.prefName} <input type="checkbox" data-prefName={d?.prefName} data-key={index + 1} onChange={(e) => handleRadioButtons(e)} /></li>
                )
            }
        )

    )

}

export default RadioButtons;