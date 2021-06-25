import { useState, useEffect } from "react";
import axios from "axios";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { ChartCardDetail } from "../../styled/dashboard/MainDashboard";
const ChartMSColumn = ({ query }) => {
  ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
  // ========================================================
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  // const [query, setQuery] = useState("Riau");
  // const [query, setQuery] = useState({ keyword: "Riau" });

  const [url, setUrl] = useState(
    "https://forest.wri-indonesia.tech/api/provincial_degraded_forest_loss?and=(tcd.eq.46,year.gt.2000,provinsi.eq.Riau)&order=year"
  );

  // const [item, setItem] = useState([]);
  const [stackData, setStackData] = useState(null);
  // const [region, setRegion] = useState("Indonesia");

  // const getData = () => {
  // const arr = data;

  //stack chart
  let stackChart_xAxis = [];
  let stackChart_yAxis = [];
  let stackChart_zAxis = [];

  const headerQuery = Object.values(query);

  console.log(headerQuery);

  Object.values(data).forEach((item) => {
    stackChart_xAxis.push({ label: item["year"] + " " });
    stackChart_yAxis.push({ value: item["forest_loss_ha"] });
    // stackChart_zAxis.push({ value: item["province"] + " " + item["year"] });
    // stackChart_wAxis.push({ value: item[2004] });
  });

  Object.values(data2).forEach((item) => {
    stackChart_zAxis.push({ value: item["forest_loss_ha"] });
  });

  console.log(stackChart_xAxis);
  console.log(stackChart_zAxis);

  const chartConfigs1 = {
    type: "mscolumn2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        theme: "fusion",
        // caption: "abc",
        captionFontColor: "#D3DFF2",
        captionAlignment: "left",
        subcaption: "On a yearly basis",
        xAxisName: "Years",
        xAxisNameFontColor: "#81809C",
        yAxisName: "Forest Lost in ha",
        yNumberPrefix: "$",
        plotFillAlpha: "70",
        showPlotBorder: "0",
        showCanvasBorder: "0",
        xAxisLabelMode: "AUTO",
        showTrendlineLabels: "0",
        valueFontSize: "10",
        numDivlines: "2",
        divLineAlpha: "10",
        bgAlpha: "0",
        labelFontColor: "#81809C",
        valueFontColor: "#D3DFF2",

        plottooltext: "$dataValue $seriesname, $label",
      },
      categories: [
        {
          category: stackChart_xAxis,
        },
      ],
      dataset: [
        {
          seriesname: "tcd(90)",
          data: stackChart_yAxis,
        },
        {
          seriesname: "tcd(95)",
          data: stackChart_zAxis,
        },
      ],
    },
  };
  // setStackData({ stackData: chartConfigs1 });
  // };

  // const updateDashboard = (e, result) => {
  //   // const { name, value } = result || e.target;
  //   // setQuery({ ...query, [name]: [value] });
  //   setQuery({ [result.name]: result.value });
  //   // setQuery(e.target.value);

  //   // setUrl(
  //   //   `https://forest.wri-indonesia.tech/api/provincial_degraded_forest_loss?and=(tcd.eq.46,year.gt.2000,provinsi.eq.${keyword})&order=year`
  //   // );
  //   // getData();

  //   // setRegion({ value: e.target.innerText });
  //   // if (e.target.id === "Aceh") {
  //   //   getData("Aceh");
  //   // }
  // };

  // ========================================================

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(
        `https://forest.wri-indonesia.tech/api/provincial_degraded_forest_loss?and=(tcd.eq.90,year.gt.2000,provinsi.eq.${Object.values(
          query
        )})&order=year`
      );
      setData(result.data);
    };
    fetchData();
  }, [query]);

  useEffect(async () => {
    const fetchData2 = async () => {
      const result = await axios(
        `https://forest.wri-indonesia.tech/api/provincial_degraded_forest_loss?and=(tcd.eq.95,year.gt.2000,provinsi.eq.${Object.values(
          query
        )})&order=year`
      );
      setData2(result.data);
    };
    fetchData2();
  }, [query]);
  // ========================================================

  return (
    <ChartCardDetail>
      {/* <div id="chart-container"> */}
      <h2>{headerQuery}</h2>
      {/* <select onChange={updateDashboard} value={query}>
          <option value="Jambi">Jambi</option>
          <option value="Riau">Riau</option>
          <option value="Aceh">Aceh</option>
        </select> */}

      {/* <Dropdown
          placeholder="Select Country"
          fluid
          name="keyword"
          search
          selection
          options={countryOptions}
          onChange={updateDashboard}
        /> */}
      {/* <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        /> */}
      {/* <button
          type="button"
          onClick={() =>
            setUrl(
              `https://forest.wri-indonesia.tech/api/provincial_degraded_forest_loss?and=(tcd.eq.46,year.gt.2000,provinsi.eq.${query})&order=year`
            )
          }
        >
          Search
        </button> */}
      {/* <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.provinsi}</p>
            </li>
          ))}
        </ul> */}

      <ReactFC {...chartConfigs1} />
      {/* console.log({stackData}) FusionCharts will render here */}
    </ChartCardDetail>
    // </div>
  );
};

export default ChartMSColumn;
