import MainContent from "../components/MainContent";
import SideMenu from "../components/SideMenu";
import { HomeContainer, OpenBtn } from "./Home.style";
import React from "react";
import { LuMenu, LuX } from "react-icons/lu";
export default function Home() {
  const [isOpened, setIsOpened] = React.useState(true);
  return (
    <HomeContainer opened={isOpened}>
      <SideMenu opened={isOpened} setIsOpened={setIsOpened} />
      <MainContent />
      <OpenBtn onClick={() => setIsOpened(!isOpened)}>
        {!isOpened ? <LuMenu /> : <LuX />}
      </OpenBtn>
    </HomeContainer>
  );
}
