import React, { useRef } from "react";
import da from "./state.json";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

export function State() {
  const navigat = useNavigate();
  const chartRef = useRef();

  const options = {
    responsive: true,
    onClick: function (e, ele) {
      if (ele.length > 0) {
        var ind = ele[0].index;
        navigat(`/states/${Object.keys(da)[ind]}`);
        console.log(Object.keys(da)[ind], ind, ele);
      }
    },
  };
  const data = {
    labels: Object.keys(da),

    datasets: [
      {
        label: "# of Votes",
        data: Object.values(da),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} options={options} ref={chartRef} />;
}
