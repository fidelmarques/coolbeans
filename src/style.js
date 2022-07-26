import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Pacifico", cursive;
  color: #f2f2f2;
  font-size: 3rem;
  text-shadow: 2px 2px 15px black;
  animation: glow 2s ease-in-out infinite alternate;
  display: flex;
  align-items: center;
  height: 10vh;
  backdrop-filter: blur(15px);
  background-color: rgb(255, 167, 202, 0.5);
  box-shadow: 0px 5px 5px -5px #a4a4a4;
  position: absolute;
  width: 100%;
  justify-content: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding-top: calc(20px + 10vh);
  padding-bottom: calc(20px + 20vh);
  font-family: "Righteous", cursive;
  overflow-y: scroll;
`;

export const Subtotal = styled.div`
  background-color: #c0c0c0;
  height: 20vh;
  width: calc(90vw - 20px);
  max-width: 500px;
  padding: 0 10px;
  border: 2px solid #808080;
  border-bottom: unset;
  border-radius: 10px 10px 0 0;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  backdrop-filter: blur(15px);
  background-color: rgb(192, 192, 192, 0.8);
  box-shadow: 0px 1px 15px #a4a4a4;

  span {
    font-family: "Righteous", cursive;
    font-size: 3rem;
    color: #fafafa;
    text-shadow: 2px 2px 4px #f775a8;
  }

  button {
    font-size: 2rem;
    font-family: "Righteous", cursive;
    background-color: #970000;
    padding: 5px 20px;
    width: fit-content;
    border-radius: 8px;
    color: #fafafa;
    text-shadow: 2px 2px 4px grey;
    cursor: pointer;
  }
`;
