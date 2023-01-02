import PokemonList from "./Pages/PokemonList";
import PokemonDetail from "./Pages/PokemonDetail";
import { Container } from "@mui/system";
import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <><BrowserRouter>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={
        <PokemonList></PokemonList>
          }>
          </Route>
          <Route path="/PokemonDetail/:id" element={
        <PokemonDetail></PokemonDetail>
          }>
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
