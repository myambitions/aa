import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Info = styled.div<{ today: boolean | undefined }>`
  margin: 0 2rem;

  ${({ today }) =>
    today &&
    css`
      display: flex;
      align-items: center;
      flex-direction: row;
    `};
`;

export const CardStyled = styled.div`
  position: relative;
  font-size: 1.5rem;
  margin: auto;
  outline: 2px solid #fff;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem 0;
  color: #7a7a7a;
  font-weight: 200;

  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:nth-child(2) {
    border-bottom-left-radius: 10px;
  }

  &:nth-child(5) {
    border-bottom-right-radius: 10px;
  }
`;

export const Temperature = styled.div<{ today: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ today }) => (today ? "start" : "center")};

  & p {
    margin: 0;
  }

  & p:nth-child(1) {
    color: #000;
    font-weight: bold;

    ${({ today }) =>
      today &&
      css`
        font-size: 3rem;
        margin-bottom: 1.5rem;
      `};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: rgba(255, 255, 255, 0.6);
  z-index: 11;
  width: 100%;
  height: 100%;
`;

export const Loader = styled.div`
  margin: 7rem auto 0;
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid #7a7a7a;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
`;
