import { FC } from "react";
import { citiesList, CityProps } from "utils";
import { MenuItem, MenuStyled } from "./styled";

const Menu: FC<Props> = ({ selected, onClick }) => {
  return (
    <MenuStyled>
      {citiesList.map(({ id, name }) => (
        <MenuItem
          key={id}
          active={selected === name}
          onClick={() => onClick({ id, name })}
        >
          {name}
        </MenuItem>
      ))}
    </MenuStyled>
  );
};

interface Props {
  selected: string;
  onClick: (city: CityProps) => void;
}

export default Menu;
