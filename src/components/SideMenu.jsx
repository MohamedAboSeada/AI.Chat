import React from "react";
import { StyledSideMenu } from "./SideMenu.style";
import { LuMenu } from "react-icons/lu";

function SideMenu({ opened, setIsOpened }) {
  return <StyledSideMenu open={opened}></StyledSideMenu>;
}

export default SideMenu;
