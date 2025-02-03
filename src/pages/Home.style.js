import styled from "styled-components";

export const HomeContainer = styled.main`
  height: 100dvh;
  display: grid;
  transition: grid-template-columns 0.3s ease;
  grid-template-columns: ${(props) => (props.opened ? "400px 1fr" : "0 1fr")};
`;

export const OpenBtn = styled.button`
  position: absolute;
  z-index: 999;
  margin: 10px;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  color: #333;
  border-radius: 5px;
  background-color: #ddd;
  transition: background-color 0.3s ease;
  &:active {
    background-color: #ccc;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  }
`;
