import { useState, useEffect } from "react";
import ChartMSColumn from "../chart/ChartMSColumn";
import ChartDoughnut from "../chart/ChartDoughnut";
import ChartMSSpline from "../chart/ChartMSSpline";
import ChartArea from "../chart/ChartArea";

import ChartCard from "./ChartCard";
import { Dropdown } from "semantic-ui-react";
import {
  // Dashboard,
  HeaderSection,
  HeaderWrapper,
  HeaderCard,
  HeaderTitle,
  HeaderText,
  HeaderCardFilter,
  HeaderFilterInput,
  ChartCardDetail,
  ChartCardSection,
  ChartCardWrapper,
} from "../../styled/dashboard/MainDashboard";

import { countryOptions } from "../../data/filter";
import ChartStackedBar from "../chart/ChartStackedBar";

// import { urlData } from "../../data/urlDataForest";

const MainDashboard = () => {
  const [query, setQuery] = useState({ keyword: "Aceh" });

  const updateDashboard = (e, result) => {
    // const { name, value } = result || e.target;
    // setQuery({ ...query, [name]: [value] });
    setQuery({ [result.name]: result.value });
    // setQuery(e.target.value);

    // setUrl(
    //   `https://forest.wri-indonesia.tech/api/provincial_degraded_forest_loss?and=(tcd.eq.46,year.gt.2000,provinsi.eq.${keyword})&order=year`
    // );
    // getData();

    // setRegion({ value: e.target.innerText });
    // if (e.target.id === "Aceh") {
    //   getData("Aceh");
    // }
  };
  return (
    <>
      <HeaderSection>
        <HeaderWrapper>
          <HeaderCard>
            <HeaderTitle>
              Dashboard
              <br />
              Forest Outlook
            </HeaderTitle>
            <HeaderText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
              temporibus voluptatum voluptates ipsam dolorum aperiam.
            </HeaderText>
          </HeaderCard>
          <HeaderCard>
            <HeaderCardFilter>
              <HeaderText>Choose the region you want to explore</HeaderText>
              <Dropdown
                placeholder="Aceh"
                fluid
                name="keyword"
                search
                selection
                options={countryOptions}
                onChange={updateDashboard}
              />
              {/* <HeaderFilterInput>Choose here</HeaderFilterInput> */}
            </HeaderCardFilter>
          </HeaderCard>
        </HeaderWrapper>
      </HeaderSection>
      {/* <h1>THIS IS DASHBOARD </h1> */}

      <ChartCardSection>
        <ChartCardWrapper>
          <ChartMSColumn query={query} />
          {/* <ChartCardDetail>This is the detail</ChartCardDetail> */}
        </ChartCardWrapper>

        <ChartCardWrapper>
          <ChartDoughnut query={query} />
          <ChartStackedBar query={query} />
          <ChartDoughnut query={query} />
        </ChartCardWrapper>

        <ChartCardWrapper>
          {/* <ChartStackedBar query={query} /> */}
          <ChartArea query={query} />

          <ChartMSSpline query={query} />
        </ChartCardWrapper>
      </ChartCardSection>
    </>
  );
};

export default MainDashboard;
