import { useState, useEffect } from "react";
import axios from "axios";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { ChartCardDetail } from "../../styled/dashboard/MainDashboard";
const ChartStackedBar = ({ query }) => {
  ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
  // ========================================================
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

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

  const chartConfigs1 = {
    type: "stackedbar2d",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Product-wise quarterly revenue in current year",
        subCaption: "Harry's SuperMart",
        xAxisname: "Quarter",
        yAxisName: "Revenue (In USD)",
        numberPrefix: "$",
        theme: "fusion",
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
      {/* <h2>{headerQuery}</h2> */}
      <ReactFC {...chartConfigs1} />
      {/* console.log({stackData}) FusionCharts will render here */}
    </ChartCardDetail>
    // </div>
  );
};

export default ChartStackedBar;
