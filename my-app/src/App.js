import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Bar, Line } from "react-chartjs-2";
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
import { Chart } from "react-google-charts";
import "./App.css";
import BarChart from "./BarChart";
import PolarChart from "./PolarChart";


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
  { Countyname: "Merced", DisposalTons: 1384.35 },
  { Countyname: "San Mateo", DisposalTons: 1265.98 },
  { Countyname: "Santa Barbara", DisposalTons: 1224.7 },
  { Countyname: "Contra Costa", DisposalTons: 865.28 },
  { Countyname: "Placer", DisposalTons: 592.75 },
  { Countyname: "Yolo", DisposalTons: 497.0 },
  { Countyname: "Nevada", DisposalTons: 374.3 },
  { Countyname: "Sutter", DisposalTons: 366.0 },
  { Countyname: "Tehama", DisposalTons: 250.2 },
  { Countyname: "Calaveras", DisposalTons: 209.99 },
  { Countyname: "San Benito", DisposalTons: 138.65 },
  { Countyname: "Siskiyou", DisposalTons: 135.0 },
  { Countyname: "Lake", DisposalTons: 116.4 },
  { Countyname: "Plumas", DisposalTons: 85.0 },
];

const countydata1 = [
  ["Agency Type", "Total Waste"],
  ["Community College", 8784.76],
  ["Correctional", 5401.32],
  ["Fair", 169],
  ["Park", 4219],
  ["California State University", 32711.36],
  ["CalTrans", 379122.45],
  ["General State Agency", 7221.97],
  ["Veteran", 0],
];

const countydata2 = [
  ["Agency Type", "Total Waste"],
  ["Community College", 2395.13],
  ["Correctional", 5230.41],
  ["Fair", 5452],
  ["Park", 4613.43],
  ["California State University", 12152.81],
  ["CalTrans", 283073.21],
  ["General State Agency", 0],
  ["Veteran", 1207.05],
];

const countydata3 = [
  ["Agency Type", "Total Waste"],
  ["Community College", 4419.37],
  ["Correctional", 21124.48],
  ["Fair", 796.32],
  ["Park", 0],
  ["California State University", 4368.31],
  ["CalTrans", 136378.98],
  ["General State Agency", 4092],
  ["Veteran", 936],
];

const countydata4 = [
  ["Agency Type", "Total Waste"],
  ["Community College", 5622.39],
  ["Correctional", 0],
  ["Fair", 6355.18],
  ["Park", 9828],
  ["California State University", 18379.21],
  ["CalTrans", 55883.54],
  ["General State Agency", 3244],
  ["Veteran", 0],
];
const countydata5 = [
  ["Agency Type", "Total Waste"],
  ["Community College", 788],
  ["Correctional", 0],
  ["Fair", 0],
  ["Park", 0],
  ["California State University", 0],
  ["CalTrans", 84462.33],
  ["General State Agency", 0],
  ["Veteran", 0],
];

export const pieChartOptions = {
  title: "Agency Wise Waste Disposal",
  // title: {
  //   display: true,
  //   text: "Agency Wise Waste Disposal",
  //   color: "black",
  //   font: {
  //     size: 34, // Increase the font size of the title
  //   },
  // },
  is3D: true,
};

const labels = dataPoints.map((dp) => dp.Countyname);

export const data = {
  labels,
  datasets: [
    {
      label: "Disposal Tons",
      data: dataPoints.map((dp) => dp.DisposalTons),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

// Dummy data for the Line charts
const lineChartInfo = [
  535024, 478986, 267680, 357789,
];

const lineChartData1 = [
  69909.0, 124761.66, 39542.07, 144909.72, 129726.26, 143704.51,
];
const lineChartData2 = [
  80000.0, 130000.0, 45000.0, 150000.0, 135000.0, 150000.0,
];
const lineChartData3 = [
  75000.0, 127000.0, 42000.0, 147000.0, 132000.0, 148000.0,
];
const lineChartData4 = [
  70000.0, 125000.0, 40000.0, 145000.0, 130000.0, 145000.0,
];
const lineChartData5 = [
  72000.0, 128000.0, 43000.0, 149000.0, 134000.0, 147000.0,
];

function App() {
  const [hoveredCounty, setHoveredCounty] = useState("info");
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [pieChartData, setPieChartData] = useState(countydata1);
  const [lineChartData, setLineChartData] = useState(lineChartInfo);

  const handleMouseEnter = (county, pieData, lineData) => {
    setHoveredCounty(county);
    setPieChartData(pieData);
    updateChartData(county, lineData);
  };

  const handleMouseLeave = () => {
    setHoveredCounty(null);
    setPieChartData(
      selectedCounty ? getPieChartData(selectedCounty) : countydata1
    );
  };

  const handleClick = (county, pieData, lineData) => {
    setSelectedCounty(county);
    setPieChartData(pieData);
    updateChartData(lineData);
  };

  const updateChartData = (county, lineData) => {
    setLineChartData(lineData);
  };

  const getPieChartData = (county) => {
    switch (county) {
      case "County1":
        return countydata1;
      case "County2":
        return countydata2;
      case "County3":
        return countydata3;
      case "County4":
        return countydata4;
      case "County5":
        return countydata5;
      default:
        return countydata1;
    }
  };

  const LineChartComponent = () => {
    const data = {
      labels: hoveredCounty == "info" ? [2011, 2012, 2013, 2014] : [2011, 2012, 2013, 2014, 2015, 2016],
      datasets: [
        {
          label: "Disposal Tons",
          data: lineChartData,
          borderColor: (context) => {
            const index = context.dataIndex;
            if (index >= 4 && index <= 5) {
              return "red";
            }
            return "blue";
          },
          backgroundColor: (context) => {
            const index = context.dataIndex;
            if (index >= 4 && index <= 5) {
              return "red";
            }
            return "blue";
          },
          pointBackgroundColor: (context) => {
            const index = context.dataIndex;
            if (index >= 4 && index <= 5) {
              return "red";
            }
            return "blue";
          },
          pointBorderColor: (context) => {
            const index = context.dataIndex;
            if (index >= 4 && index <= 5) {
              return "red";
            }
            return "blue";
          },
        },
      ],
    };
    return <Line data={data} options={lineChartOptions} />;
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "center",
      },
      title: {
        display: true,
        text: "Waste Disposal Rates Over Years",
        color: "black",
        font: {
          size: 19, // Increase the font size of the title
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: false,
          text: "Disposal Rate",
        },
      },
    },
  };



  return (
    <div style={{ paddingLeft: "20px", paddingRight: "30px" }}>
      <Row>
        <Col className="d-flex justify-content-center">
          <div className="d-flex justify-content-center">

          </div>
          <div style={{ width: "100%", height: "450px", alignContent: "center", justifyContent: "center", display: "flex" }}>
            <BarChart />
          </div>
        </Col>
      </Row>

      <div className="bottom-grid">
        <div className="grid-element-one">
          {hoveredCounty == "info" ?
            <PolarChart /> :
            <Chart
              chartType="PieChart"
              data={pieChartData}
              options={pieChartOptions}
              width={"100%"}
              height={"400px"}
            />
          }
        </div>
        <div className="grid-element-two">
          <div style={{ overflowY: "scroll", height: "300px", paddingRight: "15px" }}>
            <div
              className="para-hover"
              onMouseEnter={() => {
                setHoveredCounty("info");
                handleMouseEnter("info", null, lineChartInfo);
              }
              }
            // onMouseLeave={handleMouseLeave}
            // onClick={() =>
            //   handleClick("County1", countydata1, lineChartData1)
            // }
            >
              <p>
                Welcome to the County Waste Management Dashboard, <br />a comprehensive tool designed to provide detailed insights into waste disposal activities across various counties and agencies. This dashboard features interactive visualizations that allow you to explore and compare waste disposal volumes by county, understand the distribution of waste among different agency types, and track annual disposal trends. Our goal is to present clear and concise data to help stakeholders make informed decisions and implement effective waste management strategies.

                <br /><br />With our dashboard, you can easily analyze the total waste managed by different agencies, from community colleges to correctional facilities, and see how each contributes to the overall waste landscape. The visual data representation helps identify patterns and trends over the years, offering a valuable perspective on the progress and areas needing improvement in waste disposal. We aim to support sustainable waste management practices that benefit our communities and the environment.
              </p>
            </div>
            <div
              className="para-hover"
              onMouseEnter={() =>
                handleMouseEnter("County1", countydata1, lineChartData1)
              }
            // onMouseLeave={handleMouseLeave}
            // onClick={() =>
            //   handleClick("County1", countydata1, lineChartData1)
            // }
            >
              <p>
                County1{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
              </p>
            </div>
            <div
              className="para-hover"
              onMouseEnter={() =>
                handleMouseEnter("County2", countydata2, lineChartData2)
              }
            // onMouseLeave={handleMouseLeave}
            // onClick={() =>
            //   handleClick("County2", countydata2, lineChartData2)
            // }
            >
              <p>
                County2{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
              </p>
            </div>
            <div
              className="para-hover"
              onMouseEnter={() =>
                handleMouseEnter("County3", countydata3, lineChartData3)
              }
            // onMouseLeave={handleMouseLeave}
            // onClick={() =>
            //   handleClick("County3", countydata3, lineChartData3)
            // }
            >
              <p>
                County3{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
              </p>
            </div>
            <div
              className="para-hover"
              onMouseEnter={() =>
                handleMouseEnter("County4", countydata4, lineChartData4)
              }
            // onMouseLeave={handleMouseLeave}
            // onClick={() =>
            //   handleClick("County4", countydata4, lineChartData4)
            // }
            >
              <p>
                County4{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
              </p>
            </div>
            <div
              className="para-hover"
              onMouseEnter={() =>
                handleMouseEnter("County5", countydata5, lineChartData5)
              }
            // onMouseLeave={handleMouseLeave}
            // onClick={() =>
            //   handleClick("County5", countydata5, lineChartData5)
            // }
            >
              <p>
                County5{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
                ksjdhjksh skdjhfsdjkfh skjdhnjksdhds cksdjhnskdjhcd
                kjsdchdsjkcjksdch ksjdchsjdkhcjkdsksdjchsdk chjksdchks{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="grid-element-one">
          <LineChartComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
