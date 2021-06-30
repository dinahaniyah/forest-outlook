import styled from "styled-components";

export const HomepageSection = styled.div`
  width: 100%;
  height: auto;
`;

export const HomepageHeader = styled.div`
  position: relative;
  /* top: 100; */
  width: 100%;
  height: 100vh;
  background: #0d8a6a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    top: 100;
    height: 100%;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

export const HomepageHeaderWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  text-align: center;
  color: #fff;
  z-index: 3;
`;

export const HomepageHeaderH1 = styled.h1`
  font-size: 3.5rem;
`;

export const HomepageHeaderP = styled.p``;

export const HomepageBody = styled.div`
  width: 100%;
  height: 300px;
  padding: 3%;
`;

export const HomepageBodyWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

export const HomepageBodyCard = styled.div`
  width: 100%;
  height: 300px;
  background-color: pink;
`;
