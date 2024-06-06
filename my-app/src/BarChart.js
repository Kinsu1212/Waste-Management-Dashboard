import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

  

function BarChart({stateName}) {

  const dataPoints = [
    { Countyname: "Los Angeles", DisposalTons: 437629.86 },
    { Countyname: "San Diego", DisposalTons: 314124.04 },
    { Countyname: "San Bernardino", DisposalTons: 172115.36 },
    { Countyname: "Orange", DisposalTons: 99312.32 },
    { Countyname: "Yuba", DisposalTons: 84540.33 },
    { Countyname: "Humboldt", DisposalTons: 84368.67 },
    { Countyname: "Alameda", DisposalTons: 62511.5 },
    { Countyname: "Sacramento", DisposalTons: 48061.45 },
    { Countyname: "San Luis Obispo", DisposalTons: 35701.27 },
    { Countyname: "Kern", DisposalTons: 31150.32 },
    { Countyname: "Kings", DisposalTons: 29835.96 },
    { Countyname: "Monterey", DisposalTons: 23417.41 },
    { Countyname: "Fresno", DisposalTons: 22651.49 },
    { Countyname: "Riverside", DisposalTons: 21179.47 },
    { Countyname: "Sonoma", DisposalTons: 14385.84 },
    { Countyname: "Napa", DisposalTons: 13481.53 },
    { Countyname: "Madera", DisposalTons: 11532.26 },
    { Countyname: "San Joaquin", DisposalTons: 10803.93 },
    { Countyname: "Butte", DisposalTons: 10643.01 },
    { Countyname: "Imperial", DisposalTons: 10469.31 },
    { Countyname: "Solano", DisposalTons: 10288.61 },
    { Countyname: "Shasta", DisposalTons: 9413.74 },
    { Countyname: "San Francisco", DisposalTons: 8652.69 },
    { Countyname: "Marin", DisposalTons: 8108.27 },
    { Countyname: "Inyo", DisposalTons: 7999.1 },
    { Countyname: "Lassen", DisposalTons: 7377.65 },
    { Countyname: "Tuolumne", DisposalTons: 7337.3 },
    { Countyname: "Amador", DisposalTons: 5836.22 },
    { Countyname: "Ventura", DisposalTons: 5186.22 },
    { Countyname: "Tulare", DisposalTons: 5107.18 },
    { Countyname: "Santa Cruz", DisposalTons: 4862.74 },
    { Countyname: "Santa Clara", DisposalTons: 4067.07 },
    { Countyname: "Del Norte", DisposalTons: 3996.25 },
    { Countyname: "Stanislaus", DisposalTons: 2903.26 },
    { Countyname: "El Dorado", DisposalTons: 2226.99 },
    { Countyname: "Mendocino", DisposalTons: 1897.89 },
    // { Countyname: "Merced", DisposalTons: 1384.35 },
    // { Countyname: "San Mateo", DisposalTons: 1265.98 },
    // { Countyname: "Santa Barbara", DisposalTons: 1224.7 },
    // { Countyname: "Contra Costa", DisposalTons: 865.28 },
    // { Countyname: "Placer", DisposalTons: 592.75 },
    // { Countyname: "Yolo", DisposalTons: 497.0 },
    // { Countyname: "Nevada", DisposalTons: 374.3 },
    // { Countyname: "Sutter", DisposalTons: 366.0 },
    // { Countyname: "Tehama", DisposalTons: 250.2 },
    // { Countyname: "Calaveras", DisposalTons: 209.99 },
    // { Countyname: "San Benito", DisposalTons: 138.65 },
    // { Countyname: "Siskiyou", DisposalTons: 135.0 },
    // { Countyname: "Lake", DisposalTons: 116.4 },
    // { Countyname: "Plumas", DisposalTons: 85.0 },
  ];
  
  const labels = dataPoints.map((dp) => dp.Countyname);
  console.log(labels);
  
   const data = {
    labels,
    datasets: [
      {
        label: "Disposal Tons",
        data: dataPoints.map((dp) => dp.DisposalTons),
        borderColor: "rgb(255, 99, 132)",
        // backgroundColor: "#7E8EF1",
        hoverBackgroundColor:"#0000FF",
        backgroundColor: function(context) {
          const index = context.dataIndex;
          const label = context.chart.data.labels[index];
          return label === stateName ? '#0000FF' : '#7E8EF1';
        },
      },
    ],
  };
  
  const options = {
      labels: false,
      elements: {
        bar: {
          borderWidth: 0.6,
          backgroundColor: "blue",
        },
      },
      scales: {
        x: {
          grid: {
            display: false, // Remove x-axis grid lines
          },
          ticks: {
            autoSkip: false, // Ensure all labels are shown
            maxRotation: 70, // Rotate labels if necessary
            minRotation: 70, // Rotate labels if necessary
          },
        },
        y: {
          grid: {
            display: false, // Remove y-axis grid lines
          },
        },
      },
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "CountyWise Waste Management Dashboard",
          color: "black",
          font: {
            size: 32, // Increase the font size of the title
          },
        },
        datalabels: {
          color: "#36A2EB",
          formatter: (value, context) => {
            return value;
          },
        },
      },
      legend: {
        display: false,
      },
    };

  return (
        <Bar options={options} data={data} />
  );
}

export default BarChart;
