import React from "react";
import DataID from "../../data/DataID";
import {
  HomepageSection,
  HomepageHeader,
  HomepageHeaderWrapper,
  HomepageHeaderH1,
  HomepageHeaderP,
  HomepageBody,
  HomepageBodyWrapper,
  HomepageBodyCard,
} from "../../styled/homepage/Homepage";

const Homepage = () => {
  return (
    <HomepageSection>
      <HomepageHeader>
        <HomepageHeaderWrapper>
          <HomepageHeaderH1>Indonesia Forest Outlook</HomepageHeaderH1>
          <HomepageHeaderP>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            placeat exercitationem atque qui ex.
          </HomepageHeaderP>
        </HomepageHeaderWrapper>
      </HomepageHeader>

      <HomepageBody>
        <HomepageBodyWrapper>
          <HomepageBodyCard>This is card</HomepageBodyCard>
        </HomepageBodyWrapper>

        <HomepageBodyWrapper>
          <HomepageBodyCard>This is card</HomepageBodyCard>
          <HomepageBodyCard>This is card</HomepageBodyCard>
          <HomepageBodyCard>This is card</HomepageBodyCard>
        </HomepageBodyWrapper>

        <HomepageBodyWrapper>
          <HomepageBodyCard>This is card</HomepageBodyCard>
          <HomepageBodyCard>This is card</HomepageBodyCard>
        </HomepageBodyWrapper>
      </HomepageBody>

      <DataID />
    </HomepageSection>
  );
};

export default Homepage;
