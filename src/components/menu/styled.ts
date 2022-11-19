import styled, { css } from "styled-components";

export const MenuStyled = styled.ul`
  margin-bottom: 3rem;
  text-transform: uppercase;
  font-size: 2rem;
  list-style: none;
  padding: 0;
`;

export const MenuItem = styled.li<{ active: boolean }>`
  color: ${({ active }) => (active ? "#5f97ff" : "#7a7a7a")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  cursor: pointer;
  display: inline-block;
  padding: 0 2rem;

  &:hover {
    color: #5f97ff;
  }
`;
