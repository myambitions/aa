import styled from "styled-components";

export const AppStyled = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  outline: 4px solid #fff;
  border-radius: 10px;
  margin: auto;
  color: #000000;
  background-color: #e2edf6;
  box-shadow: 0 0 12px 1px #ccc;
`;
