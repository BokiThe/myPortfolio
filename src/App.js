import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./screens/navigation/navBar";
import HomePage from "./screens/homePage/homePage";
import HeroPage from "./screens/heroPage/hero";
const App = () => {
  return (
    <BrowserRouter>
      <HeroPage />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
