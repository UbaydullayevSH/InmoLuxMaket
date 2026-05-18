import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Sell from "./components/Sell/sell";
import Investment from "./components/Investment/investment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Sell />} />
        <Route path="investment" element={<Investment />} />
      </Route>
    </Routes>
  );
}

export default App;