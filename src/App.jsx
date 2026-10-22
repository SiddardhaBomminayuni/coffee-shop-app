import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Order from "./pages/Order";
import Delivery from "./pages/Delivery";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coffee/:id" element={<Detail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
