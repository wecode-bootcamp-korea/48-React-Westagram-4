import { BrowserRouter, Routes, Route } from "react-router-dom";
// codePark 의 컴포넌트
import MainCodePark from "./pages/codePark/Main/Main";
import LoginCodePark from "./pages/codePark/Login/Login";

// gaebalKim 의 컴포넌트
import MainGaebalKim from "./pages/gaebalKim/Main/Main";
import LoginGaebalKim from "./pages/gaebalKim/Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/codepark-main" element={<MainCodePark />} />
        <Route path="/codepark-login" element={<LoginCodePark />} />
        <Route path="/gaebalkim-main" element={<MainGaebalKim />} />
        <Route path="/gaebalkim-login" element={<LoginGaebalKim />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
