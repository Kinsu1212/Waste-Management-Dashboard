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
  // title: "",
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
  124227, 125358.7, 7321.03, 26166.48, 47726.86, 95523.76,
];
const lineChartData3 = [
  43180.33, 32028.88, 38133.33, 23036.44, 26523.87, 34562.92,
];
const lineChartData4 = [
  13901, 34220, 1889.54, 5873, 4575, 8753.39,

];
const lineChartData5 = [
  31384, 12444.77, 20235.08, 20398.48, 46258.98, 35847.76,
];

function App() {
  const [hoveredCounty, setHoveredCounty] = useState("info");
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [pieChartData, setPieChartData] = useState(countydata1);
  const [lineChartData, setLineChartData] = useState(lineChartInfo);
  const topFiveStateNames = ["Los Angeles","San Diego","San Bernardino","Orange","Yuba"];
  const [stateName, setStateName] = useState(topFiveStateNames[0])
  const [highlightBarCounty, setHighlightBarCounty] = useState(null)

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
      // title: {
      //   display: true,
      //   text: "",
      //   color: "black",
      //   font: {
      //     size: 19, // Increase the font size of the title
      //   },
      // },
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
          <div style={{ width: "100%", height: "300px", alignContent: "center", justifyContent: "center", display: "flex" }}>
            <BarChart stateName={highlightBarCounty} />
          </div>
        </Col>
      </Row>

      <div className="bottom-grid">
        <div className="grid-element-one">
          {hoveredCounty == "info" ?
            <PolarChart /> :
            <div style={{position:"relative", display:"flex", justifyContent:"center"}}>
            <h5 style={{textAlign:"center", position:"absolute", zIndex:"1"}}>Agency Wise Waste Disposal for<br /> {stateName}</h5>
            <Chart
              chartType="PieChart"
              data={pieChartData}
              options={pieChartOptions}
              width={"100%"}
              height={"350px"}
            />
            </div>
            
          }
        </div>
        <div className="grid-element-two">
          <div style={{ overflowY: "scroll", height: "480px", paddingRight: "15px" }}>
            <div
              className="para-hover"
              onMouseEnter={() => {
                setHoveredCounty("info");
                handleMouseEnter("info", null, lineChartInfo);
                setHighlightBarCounty(null);
              }
              }
            // onMouseLeave={handleMouseLeave}
            // onClick={() =>
            //   handleClick("County1", countydata1, lineChartData1)
            // }
            >
              <p>
              <strong>Welcome to the CountyWise Waste Management Dashboard,</strong> <br /> <br />a comprehensive tool designed to provide detailed insights into waste disposal activities across various counties and agencies. This dashboard features interactive visualizations that allow you to explore and compare waste disposal volumes by county, understand the distribution of waste among different agency types, and track annual disposal trends. Our goal is to present clear and concise data to help stakeholders make informed decisions and implement effective waste management strategies.

                <br /><br />With our dashboard, you can easily analyze the total waste managed by different agencies, from community colleges to correctional facilities, and see how each contributes to the overall waste landscape. The visual data representation helps identify patterns and trends over the years, offering a valuable perspective on the progress and areas needing improvement in waste disposal. We aim to support sustainable waste management practices that benefit our communities and the environment.<br /><br />
              </p>
            </div>
            <div
              className="para-hover"
              onMouseEnter={() => {
                handleMouseEnter("County1", countydata1, lineChartData1);
                setStateName(topFiveStateNames[0]);
                setHighlightBarCounty(topFiveStateNames[0]);
              }
              }
            // onMouseLeave={handleMouseLeave}
            // onClick={() =>
            //   handleClick("County1", countydata1, lineChartData1)
            // }
            >
              <p>
              <strong>Agency Wise Waste Disposal for Los Angeles:</strong> <br /> <br />
                The pie chart shows waste disposal by various agencies in Los Angeles, with Community Colleges contributing the most at 86.6%. Other notable contributors include California State University, CalTrans, Correctional facilities, and Parks. This helps identify key areas for targeted waste management. <br /> <br /> 
                The line chart tracks CalTrans waste disposal from 2011 to 2016, highlighting predicted data for 2015 and 2016. The chart shows a peak in 2014, a dip in 2015, and recovery in 2016. Predicted values in red indicate expected stabilization in waste management efforts.<br /> <br /> 
              </p>
            </div>
            <div
              className="para-hover"
              onMouseEnter={() => {
                handleMouseEnter("County2", countydata2, lineChartData2);
                setStateName(topFiveStateNames[1]);
                setHighlightBarCounty(topFiveStateNames[1]);
              }
              }
            // onMouseLeave={handleMouseLeave}
            // onClick={() =>
            //   handleClick("County2", countydata2, lineChartData2)
            // }
            >
              <p>
                <strong>Agency Wise Waste Disposal for San Diego:</strong><br /><br />
                The pie chart illustrates waste disposal distribution among various agencies in San Diego, with Community Colleges being the largest contributor at 90.1%. Other agencies, such as Correctional facilities, Parks, and the California State University system, contribute smaller portions. This distribution helps highlight key areas for targeted waste management initiatives in San Diego.< br/>< br/>

                The line chart tracks waste disposal trends for CalTrans from 2011 to 2016, with predicted data for 2015 and 2016 highlighted in red. The chart shows a peak in 2012, a significant dip in 2013, and recovery in 2016. The predicted values show an increase in total waste, implying that more waste management efforts are necessary to effectively tackle this rise.<br /><br />
              </p>
            </div>
            <div
              className="para-hover"
              onMouseEnter={() => {
                handleMouseEnter("County3", countydata3, lineChartData3);
                setStateName(topFiveStateNames[2]);
                setHighlightBarCounty(topFiveStateNames[2]);
              }
              }
            // onMouseLeave={handleMouseLeave}
            // onClick={() =>
            //   handleClick("County3", countydata3, lineChartData3)
            // }
            >
              <p>
                <strong>Agency Wise Waste Disposal for San Bernardino:</strong><br /><br />
                The pie chart illustrates waste disposal distribution among various agencies in San Bernardino, with Community Colleges being the largest contributor at 79.2%. Other agencies, such as Correctional facilities and the California State University system, also contribute significant portions, with Correctional facilities accounting for 12.3%. This distribution helps highlight key areas for targeted waste management initiatives in San Bernardino.< br/><br/>
                The line chart tracks waste disposal trends for CalTrans from 2011 to 2016, with predicted data for 2015 and 2016 highlighted in red. The chart shows a peak in 2012, a dip in 2013, and a recovery in 2016. The predicted values indicate a rise in total waste, suggesting that waste management efforts need to be intensified to address this increase effectively.< br/><br/>
              </p>
            </div>
            <div
              className="para-hover"
              onMouseEnter={() => {
                handleMouseEnter("County4", countydata4, lineChartData4);
                setStateName(topFiveStateNames[3]);
                setHighlightBarCounty(topFiveStateNames[3]);
              }
              }
            // onMouseLeave={handleMouseLeave}
            // onClick={() =>
            //   handleClick("County4", countydata4, lineChartData4)
            // }
            >
              <p>
                <strong>Agency Wise Waste Disposal for Orange:</strong><br /><br />
                The pie chart illustrates waste disposal distribution among various agencies in Orange County, with Community Colleges being the largest contributor at 56.3%. Other agencies, such as the California State University system and General State Agencies, also contribute significant portions, with 18.5% and other minor categories. This distribution helps highlight key areas for targeted waste management initiatives in Orange County.<br/><br/>
                The line chart tracks waste disposal trends for CalTrans from 2011 to 2016, with predicted data for 2015 and 2016 highlighted in red. The chart shows a peak in 2012, a significant dip in 2013, and slight recovery in 2016. The predicted values suggest stabilization in waste management efforts, indicating an improved approach to handling waste disposal by CalTrans.<br/><br/>
              </p>
            </div>
            <div
              className="para-hover"
              onMouseEnter={() => {
                handleMouseEnter("County5", countydata5, lineChartData5);
                setStateName(topFiveStateNames[4]);
                setHighlightBarCounty(topFiveStateNames[4]);
              }
              }
            // onMouseLeave={handleMouseLeave}
            // onClick={() =>
            //   handleClick("County5", countydata5, lineChartData5)
            // }
            >
              <p>
                <strong>Agency Wise Waste Disposal for Yuba:</strong><br /><br />
                The pie chart illustrates waste disposal distribution among various agencies in Yuba County, with CalTrans being the overwhelming contributor at 99.1%. Community Colleges also contributes a minor portion. This distribution helps highlight the primary area for targeted waste management initiatives in Yuba County.<br/><br/>
                The line chart tracks waste disposal trends for CalTrans from 2011 to 2016, with predicted data for 2015 and 2016 highlighted in red. The chart shows a peak in 2015, a dip in 2013, and a recovery in 2016. The predicted values suggest stabilization in waste management efforts, indicating an improved approach to handling waste disposal by CalTrans.<br/><br/>
              </p>
            </div>
          </div>
        </div>
        <div className="grid-element-one">
          <h5 style={{textAlign:"center"}}>Waste Disposal Rates Over Years <br /> {hoveredCounty == "info" ? "" : "for Caltrans"} </h5>
          <LineChartComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
