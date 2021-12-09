import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import da from "./courses.json";
import { useNavigate } from "react-router-dom";
const axios = require("axios");
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Courses() {
  const chartRef = useRef();
  const navigat = useNavigate();
  const [das, setDas] = useState();
  useEffect(() => {
    const url = "https://colleges--info.herokuapp.com/college/courses/";
    axios.get(url).then((res) => {
      setDas(res.data);
    });
  }, []);
  const options = {
    responsive: true,
    onClick: function (e, ele) {
      if (ele.length > 0) {
        var ind = ele[0].index;
        navigat(`/courses/${Object.keys(da)[ind]}`);
        console.log(Object.keys(da)[ind], ind, ele);
      }
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar Chart of the courses offered by colleges",
      },
    },
  };
  const labels = Object.keys(da);
  const data = {
    labels,
    datasets: [
      {
        label: " ",
        data: Object.values(da),
        backgroundColor: [
          "#88" + Math.floor(Math.random() * 16777215).toString(16),
          "#88" + Math.floor(Math.random() * 16777215).toString(16),
          "#88" + Math.floor(Math.random() * 16777215).toString(16),
          "#88" + Math.floor(Math.random() * 16777215).toString(16),
          "#88" + Math.floor(Math.random() * 16777215).toString(16),
          "#88" + Math.floor(Math.random() * 16777215).toString(16),
          "#88" + Math.floor(Math.random() * 16777215).toString(16),
        ],
      },
    ],
  };
  return <Bar options={options} data={data} ref={chartRef} />;
}
