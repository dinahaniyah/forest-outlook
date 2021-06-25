import React from "react";
import {
  ChartCardDetail,
  ChartCardSection,
  ChartCardWrapper,
} from "../../styled/dashboard/ChartCard";

const ChartCard = () => {
  return (
    <ChartCardSection>
      <ChartCardWrapper>
        <ChartCardDetail>This is the detail</ChartCardDetail>
      </ChartCardWrapper>
    </ChartCardSection>
  );
};

export default ChartCard;
