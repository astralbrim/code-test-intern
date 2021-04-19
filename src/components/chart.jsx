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
    const [options, setOptions] = useState({});


    // series に変化があったとき optionsを更新する
    useEffect(
        () => {
            console.log(populationData);
            setOptions(creatOptions(populationData));
        },[populationData]
    )
    return (
        <div className="chart">
            <HighchartsReact highcharts={Highcharts} options={options}/>
        </div>
    )
}

export default Chart;