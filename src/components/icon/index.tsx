import { FC } from "react";
import styled from "styled-components";

const IconStyled = styled.img`
  filter: drop-shadow(5px 5px 5px #ccc);
`;

const Icon: FC<Props> = ({ name, description, multiplier }) => {
  const icon = getIcon(name, multiplier);
  return <IconStyled src={icon} alt={description} />;
};

const getIcon = (name: string, multiplier: "2x" | "4x" = "2x") =>
  `http://openweathermap.org/img/wn/${name}@${multiplier}.png`;

interface Props {
  name: string;
  description: string;
  multiplier: "2x" | "4x";
}

export default Icon;
