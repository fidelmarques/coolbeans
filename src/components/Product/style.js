import styled from "styled-components";

export const Card = styled.div`
  background-color: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 10px;
  width: 80%;
  max-width: 450px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px grey;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 30%;
  height: 100%;
  font-size: 14px;
`;

export const Name = styled.h2``;

export const Price = styled.h3`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Commands = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 30%;
  max-width: 80px;
  height: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: grey;
    color: white;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
