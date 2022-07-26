import { useState } from "react";
import {
  ButtonContainer,
  Card,
  Commands,
  Description,
  Name,
  Price,
} from "./style";
import {
  GiBerriesBowl,
  GiSodaCan,
  GiCakeSlice,
  GiCroissant,
  GiDonut,
  GiCoffeeCup,
} from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { BsCupStraw } from "react-icons/bs";

function Product({ name, icon, price, state, set }) {
  const [quantity, setQuantity] = useState(0);

  const addProduct = () => {
    setQuantity(quantity + 1);
    set(state + parseInt(price));
  };

  const removeProduct = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      set(state - parseInt(price));
    }
  };

  const iconSelector = (icon) => {
    switch (icon) {
      case "combo":
        return (
          <MdFastfood
            style={{ height: "30px", width: "30px", color: "#2c18df" }}
          />
        );

      case "bow":
        return (
          <GiBerriesBowl
            style={{ height: "30px", width: "30px", color: "#5700bb" }}
          />
        );
      case "can":
        return (
          <GiSodaCan
            style={{ height: "30px", width: "30px", color: "#ad4343" }}
          />
        );
      case "cup":
        return (
          <BsCupStraw
            style={{
              height: "30px",
              width: "30px",
              color: "#8ed47c",
            }}
          />
        );
      case "cake":
        return (
          <GiCakeSlice
            style={{ height: "30px", width: "30px", color: "#c4b10d" }}
          />
        );
      case "croissant":
        return (
          <GiCroissant
            style={{ height: "30px", width: "30px", color: "#b97c09" }}
          />
        );
      case "donut":
        return (
          <GiDonut
            style={{ height: "30px", width: "30px", color: "#b350b3" }}
          />
        );
      case "coffee-brown":
        return (
          <GiCoffeeCup
            style={{ height: "30px", width: "30px", color: "#382900" }}
          />
        );
      case "coffee-green":
        return (
          <GiCoffeeCup
            style={{ height: "30px", width: "30px", color: "#073800" }}
          />
        );

      default:
        return icon;
    }
  };

  return (
    <Card>
      <Description>
        {iconSelector(icon)}
        <Name>{name}</Name>
      </Description>
      <Price>{`$ ${price}`}</Price>
      <Commands>
        {quantity}
        <ButtonContainer>
          <button
            style={{ backgroundColor: "#680206" }}
            onClick={removeProduct}
          >
            -
          </button>
          <button style={{ backgroundColor: "#387400" }} onClick={addProduct}>
            +
          </button>
        </ButtonContainer>
      </Commands>
    </Card>
  );
}
export default Product;
