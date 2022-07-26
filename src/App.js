import { useState } from "react";
import "./App.css";
import Product from "./components/Product/Product";
import { List, Subtotal, Title } from "./style";

function App() {
  const [finalPrice, setFinalPrice] = useState(0);
  return (
    <div className="App">
      <Title>Cool Beans</Title>
      <List>
        <Product
          name="Combo"
          price="650"
          icon="combo"
          state={finalPrice}
          set={setFinalPrice}
        />
        <Product
          name="Açaí"
          price="600"
          icon="bow"
          state={finalPrice}
          set={setFinalPrice}
        />
        <Product
          name="Milk-shake"
          price="600"
          icon="cup"
          state={finalPrice}
          set={setFinalPrice}
        />
        <Product
          name="Bolo"
          price="400"
          icon="cake"
          state={finalPrice}
          set={setFinalPrice}
        />
        <Product
          name="Croissant"
          price="400"
          icon="croissant"
          state={finalPrice}
          set={setFinalPrice}
        />
        <Product
          name="Donuts"
          price="400"
          icon="donut"
          state={finalPrice}
          set={setFinalPrice}
        />
        <Product
          name="Coca-cola"
          price="350"
          icon="can"
          state={finalPrice}
          set={setFinalPrice}
        />
        <Product
          name="Chá-mate"
          price="350"
          icon="coffee-brown"
          state={finalPrice}
          set={setFinalPrice}
        />
        <Product
          name="Chá-verde"
          price="350"
          icon="coffee-green"
          state={finalPrice}
          set={setFinalPrice}
        />
      </List>
      <Subtotal>
        {finalPrice > 0 ? (
          <>
            <span>{`$ ${finalPrice}`}</span>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Resetar
            </button>
          </>
        ) : (
          <span style={{ color: "#fafafa", fontSize: "2rem" }}>
            Carrinho vazio
          </span>
        )}
      </Subtotal>
    </div>
  );
}

export default App;
