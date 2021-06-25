import styled from "styled-components";

// export const Dashboard = styled.div`
//   width: 100%;
//   height: auto;
//   background-color: #fbfcfd;
// `;

export const HeaderSection = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d8a6a;
`;

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  gap: 1rem;
`;

export const HeaderCard = styled.div`
  padding: 5% 10%;
`;
export const HeaderTitle = styled.h1``;

export const HeaderText = styled.p`
  /* max-width: 500px; */
`;

export const HeaderCardFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 616px) {
    align-items: flex-start;
  }
`;

export const HeaderFilterInput = styled.div`
  border: 1px solid black;
  height: 30px;
  width: 90%;
  margin-top: 10px;
`;

export const ChartCardSection = styled.div`
  width: 100%;
  max-height: 500px;
  padding: 3%;
`;

export const ChartCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 1.5rem 0;
  /* background-color: #24243e; */
  /* background: pink; */
`;

export const ChartCardDetail = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 5%; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
