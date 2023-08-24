import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import './styles/global.scss'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
