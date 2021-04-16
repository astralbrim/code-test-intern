import React, {useState, useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = (props) => {
    const {populationData} = props;
    const creatOptions = (series) => {
        return (
            {
                title: {
                    text: "人口構成"
                },
                xAxis: {
                    title: {
                        text: "年"
                    },
                },
                yAxis: {
                    title: {
                        text: "人口"
                    }
                },
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointInterval: 5,
                        pointStart: 1960,
                    },
                },
                series: series
            }
        )
    }
    const [series, setSeries] = useState([]);
    const [options, setOptions] = useState({});

    // populationData に変化があったとき series を更新する
    useEffect(
        () => {
            console.log(populationData.slice(-1)[0])
            if (populationData.slice(-1)[0] !== undefined){
                const tmp = populationData.slice(-1)[0].data.map(
                    (value) => {
                        return value.value;
                    }
                )
                setSeries([...series, tmp]);
                console.log(series);
            }

        },[populationData]
    )

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