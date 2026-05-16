import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/home";
import Project from "./components/Projects/projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project" element={<Project />} />
      </Route>
    </Routes>
  );
}

export default App;