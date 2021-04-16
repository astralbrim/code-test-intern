import React, {useState, useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = (props) => {
    const {populationData} = props;
    const creatOptions = (series) => {
        return ({
                title: {
                    text: '人口構成のグラフ'
                },

                subtitle: {
                    text: 'Source: RESAS API'
                },

                yAxis: {
                    title: {
                        text: '人口'
                    }
                },

                xAxis: {
                    title: {
                        text: '年'
                    }
                },

                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },

                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 1960,
                        pointInterval: 5,
                    }
                },

                series: series,

                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
            }

    )
    }
    const [lastPopulationData, setLastPopulationData] = useState([])
    const [series, setSeries] = useState([]);
    const [options, setOptions] = useState({});

    // populationData に変化があったとき series を更新する
    useEffect(
        () => {
            if (populationData.slice(-1)[0] !== undefined) { // 最初は配列の要素が undefinedなら無視
                const lastPopulationDataLength = lastPopulationData.length;
                setLastPopulationData(populationData); // 一個前のpopulationData を更新
                if (lastPopulationDataLength < populationData.length) { // populationData に要素が追加された時の処理
                    const tmp = populationData.slice(-1)[0].data.map( // 配列の末尾要素の参照
                        (value) => {
                            return value.value;
                        }
                    )
                    const tmpPrefName = populationData.slice(-1)[0].data.prefName
                    setSeries([...series, {name: tmpPrefName, data: tmp}]);
                } else { // populationData の要素が削除されたとき
                        setSeries(populationData.filter(
                            (obj, index) => {
                                return index !== populationData.length;
                            }
                        ));
                }
            }
            }, [populationData]
    );

    // series に変化があったとき optionsを更新する
    useEffect(
        () => {
            setOptions(creatOptions(series));
        },[series]
    )
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options}/>
        </div>
    )
}

export default Chart;