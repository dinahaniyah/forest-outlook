import { useState, useEffect } from "react";
import axios from "axios";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { ChartCardDetail } from "../../styled/dashboard/MainDashboard";

const ChartArea = ({ query }) => {
  ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
  // ========================================================
  const [data, setData] = useState([]);

  //stack chart
  let stackChart_xAxis = [];
  let stackChart_yAxis = [];
  let stackChart_zAxis = [];

  Object.values(data).forEach((item) => {
    stackChart_xAxis.push({
      label: item["year"] + " ",
      value: item["forest_loss_ha"],
    });
  });

  const chartConfigs1 = {
    type: "area2d",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Sales of Liquor",
        subCaption: "Last week",
        xAxisName: "Day",
        yAxisName: "Sales (In USD)",
        numberPrefix: "$",
        showValues: "1",
        theme: "fusion",
      },
      data: stackChart_xAxis,
    },
  };
  // ========================================================

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(
        `https://forest.wri-indonesia.tech/api/provincial_degraded_forest_loss?and=(tcd.eq.83,year.gt.2000,provinsi.eq.${Object.values(
          query
        )})&order=year`
      );
      setData(result.data);
    };
    fetchData();
  }, [query]);

  // ========================================================

  return (
    <ChartCardDetail>
      <ReactFC {...chartConfigs1} />
    </ChartCardDetail>
  );
};

export default ChartArea;
