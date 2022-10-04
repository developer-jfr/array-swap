import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import classes from './index.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 20
      },
      grid: {
        color: "#525773",
      },
    },
    x: {
      grid: {
        color: "#525773",
      },
    }
  },
};

const labels = ["Text", "Text", "Text", "Text", "Text"];

export const data = {
  labels,
  datasets: [
    {
      data: [0, 12, 45, 70, 50],
      backGroundColor: "linear-gradient(90deg, #F506FE 0%, #06D6DF 100%);",
      fill: true,
      pointBorderColor: "#A6CEE3",
      pointBorderWidth: 10,
      tension: 0.4,
    },
  ],
};

function createGradient(ctx, area) {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0.3, "#06D6DF");
  gradient.addColorStop(0.5, "#F506FE");

  return gradient;
}

function Chart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef?.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        borderColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);
  return (
    <div className={classes.chartWrapp}>
       <Line  className={classes.canvas} ref={chartRef} options={options} data={chartData} />
       <div className={classes.daysGroup}>
         <span className={classes.active}>24H</span>
         <span>7D</span>
         <span>30D</span>
       </div>
    </div>
  );
}

export default Chart;
