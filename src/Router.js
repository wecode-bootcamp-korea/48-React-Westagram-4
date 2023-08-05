import { BrowserRouter, Routes, Route } from "react-router-dom";
// Mihye 의 컴포넌트
import MainMihye from "./pages/mihye/Main/Main";
import LoginMihye from "./pages/mihye/Login/Login";

// Heejin 의 컴포넌트
import MainHeejin from "./pages/heejin/Main/Main";
import LoginHeejin from "./pages/heejin/Login/Login";
// Dongcheol 의 컴포넌트
import MainDongcheol from "./pages/dongcheol/Main/Main";
import LoginDongcheol from "./pages/dongcheol/Login/Login";

// jeongwan 의 컴포넌트
import MainJeongwan from "./pages/jeongwan/Main/Main";
import LoginJeongwan from "./pages/jeongwan/Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mihye-main" element={<MainMihye />} />
        <Route path="/mihye-login" element={<LoginMihye />} />
        <Route path="/heejin-main" element={<MainHeejin />} />
        <Route path="/heejin-login" element={<LoginHeejin />} />
        <Route path="/dongcheol-main" element={<MainDongcheol />} />
        <Route path="/dongcheol-login" element={<LoginDongcheol />} />
        <Route path="/jeongwan-main" element={<MainJeongwan />} />
        <Route path="/jeongwan-login" element={<LoginJeongwan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
