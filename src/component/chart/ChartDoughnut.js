import { useState, useEffect } from "react";
import axios from "axios";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import { ChartCardDetail } from "../../styled/dashboard/MainDashboard";
const ChartDoughnut = ({ query }) => {
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
    stackChart_yAxis.push({ value: item["forest_loss_ha"] });
    stackChart_zAxis.push({ value: item["province"] + " " + item["year"] });
    // stackChart_wAxis.push({ value: item[2004] });
  });

  console.log(stackChart_xAxis);
  //   console.log(stackChart_zAxis);

  const chartConfigs1 = {
    type: "doughnut2d",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Split of Revenue by Product Categories",
        subCaption: "Last year",
        numberPrefix: "$",
        // bgColor: "#f5f5f5",

        startingAngle: "510",
        showLegend: "1",
        defaultCenterLabel: "Forest Loss",
        centerLabel: "Forest Loss from $label: $value",
        centerLabelBold: "1",
        showTooltip: "0",
        decimals: "0",
        theme: "candy",
      },
      //   categories: [
      //     {
      //       category: stackChart_xAxis,
      //     },
      //   ],
      //   dataset: [
      //     {
      //   seriesname: "Forest Loss",
      data: stackChart_xAxis,
      // },
      //   ],
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
      {/* <div id="chart-container">
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.provinsi}</p>
            </li>
          ))}
        </ul> */}
      <ReactFC {...chartConfigs1} />
      {/* </div> */}
    </ChartCardDetail>
  );
};

export default ChartDoughnut;
