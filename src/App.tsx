import React from "react";
import CardForm from "./components/organisms/CardForm";
import { CardProvider } from "./contexts/CardContext";

function App() {
  return (
    <div className="App">
      <CardProvider>
        <CardForm />
      </CardProvider>
    </div>
  );
}

export default App;
