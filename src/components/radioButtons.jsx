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
                const resultData = result.data.result.data[0]
                console.log(resultData)
                resultData.data.prefCode = targetKey;
                resultData.data.prefName = targetPrefName;
                const tmpValue = resultData.data.map(
                    (value) => {
                        return value.value;
                    }
                )
                console.log(tmpValue)
                const tmpPrefName = resultData.data.prefName;
                setPopulationData([...populationData, {name: tmpPrefName, data: tmpValue}]); //　配列の末尾にチェックが入った都道府県のデータを追加
            }
            get();
        }else{
            // チェックを外した時の処理
            console.log(populationData)
            const filteredArray = populationData.filter(
                (obj) => {
                    console.log(obj);
                return obj.name !== targetPrefName // targetKey と prefCode が一致している要素をfalseとして返す
            })

            setPopulationData(filteredArray); // targetKey と prefCode が一致していない要素のみを残した新しい配列を格納
        }

    }
    return (
        <div className="checkboxes">
            {
                prefectureData?.map(
                    (d, index) => {
                        return (
                            <li>{d?.prefName} <input type="checkbox" data-prefname={d?.prefName} data-key={index + 1}
                                                     onChange={(e) => handleRadioButtons(e)}/></li>
                        )
                    }
                )
            }
        </div>

    )

};

export default RadioButtons;