import React from 'react';
import { getPopulationComposition } from '../api';

const RadioButtons = (props) => {
  const { // eslint-disable-next-line react/prop-types
    prefectureData, populationData, setPopulationData, apiKey,
  } = props;

  const handleRadioButtons = (e) => {
    const targetKey = e.currentTarget.dataset.key;
    const targetPrefName = e.currentTarget.dataset.prefname;

    if (e.target.checked === true) {
      // チェックを入れたときの処理
      const get = async () => {
        const result = await getPopulationComposition(targetKey, apiKey);
        const resultData = result.data.result.data[0];
        resultData.data.prefCode = targetKey;
        resultData.data.prefName = targetPrefName;
        const tmpValue = resultData.data.map(
          (value) => value.value,
        );
        const tmpPrefName = resultData.data.prefName;
        // eslint-disable-next-line max-len
        setPopulationData([...populationData, { name: tmpPrefName, data: tmpValue }]); // 配列の末尾にチェックが入った都道府県のデータを追加
      };
      get();
    } else {
      // チェックを外した時の処理
      // eslint-disable-next-line react/prop-types
      const filteredArray = populationData.filter(
        (obj) => obj.name !== targetPrefName // targetName と prefName が一致している要素をfalseとして返す
        ,
      );

      setPopulationData(filteredArray); // targetName と prefName が一致していない要素のみを残した新しい配列を格納
    }
  };
  return (
    <div className="checkboxes">
      {
        // eslint-disable-next-line react/prop-types
                prefectureData?.map(
                  (d, index) => (
                    <li>
                      {d?.prefName}
                      {' '}
                      <input
                        type="checkbox"
                        data-prefname={d?.prefName}
                        data-key={index + 1}
                        onChange={(e) => handleRadioButtons(e)}
                      />
                    </li>
                  ),
                )
            }
    </div>

  );
};

export default RadioButtons;
