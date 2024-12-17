import React from "react";
import { Container, Content } from "./styles"; // Importando Container e Content de styles.js
import { GlobalStyle } from "./global"; // Importando o estilo global

const App = () => {
  return (
    <>
      <GlobalStyle /> {/* Aplica o estilo global */}
      <Container>
        <Content>
          Olá, este é o conteúdo centralizado dentro do Container!
        </Content>
      </Container>
    </>
  );
}

export default App;
