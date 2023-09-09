import './styles/global.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Todos from "pages/Todos";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Todos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
