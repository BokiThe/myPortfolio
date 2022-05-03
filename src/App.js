import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./screens/navigation/navBar";
import HomePage from "./screens/homePage/homePage";
import HeroPage from "./screens/heroPage/hero";
const App = () => {
  return (
    <div>
      <HeroPage />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
