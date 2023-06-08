import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import BlogWrite from "./pages/BlogWrite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blogDetail/" element={<BlogDetail />} />
        <Route path="/blogWrite/" element={<BlogWrite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
