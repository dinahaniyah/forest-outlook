import styled from "styled-components";

export const HeaderSection = styled.div`
  width: 100%;
  height: 60vh;
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
