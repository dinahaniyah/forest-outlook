import React from "react";
import { Dropdown } from "semantic-ui-react";
import {
  HeaderSection,
  HeaderWrapper,
  HeaderCard,
  HeaderTitle,
  HeaderText,
  HeaderCardFilter,
  HeaderFilterInput,
} from "../../styled/dashboard/HeaderFilter";

import { countryOptions } from "../../data/filter";
const HeaderFilter = () => {
  return (
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
              placeholder="Select Country"
              fluid
              name="keyword"
              search
              selection
              options={countryOptions}
              // onChange={updateDashboard}
            />
            {/* <HeaderFilterInput>Choose here</HeaderFilterInput> */}
          </HeaderCardFilter>
        </HeaderCard>
      </HeaderWrapper>
    </HeaderSection>
  );
};

export default HeaderFilter;
