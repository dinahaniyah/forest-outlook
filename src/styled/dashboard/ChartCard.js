import styled from "styled-components";

export const ChartCardSection = styled.div`
  width: 100%;
  max-height: 500px;
`;

export const ChartCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

export const ChartCardDetail = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
`;
