import { useState, Fragment } from "react";
import ReactApexChart from "react-apexcharts";
import CardContent from "../../Card/CardContent";

const BubbleChart = () => {
    const [state, setState] = useState({
        series: [
            {
                name: "Bubble1",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: "Bubble2",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: "Bubble3",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: "Bubble4",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "bubble",
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                opacity: 0.8,
            },
            title: {
                text: "Simple Bubble Chart",
            },
            xaxis: {
                tickAmount: 12,
                type: "category",
            },
            yaxis: {
                max: 70,
            },
        },
    });

    function generateData(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
                yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
            series.push([x, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    }

    return (
        <Fragment>
            <CardContent
                title="Bubble Chart"
                CardBody={
                    <div className="d-flex justify-content-center align-items-center overflow-hidden">
                        <ReactApexChart
                            options={state.options}
                            series={state.series}
                            type="bubble"
                            height={300}
                            style={{ width: "100%" }}
                        />
                    </div>
                }
            />
        </Fragment>
    );
};

export default BubbleChart;

