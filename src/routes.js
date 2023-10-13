import './styles/global.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Todos from "pages/Todos";
import Assistidos from 'pages/Assistido';
import NaoEncontrado from 'pages/NaoEncontrado';
import Curtidos from 'pages/Curtidos';
import NaoVistos from 'pages/NaoVistos';
import NaoCurtidos from 'pages/NaoCurtidos';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Todos />} />
          <Route path="/assistidos" element={<Assistidos/>} />
          <Route path="/curtidos" element={<Curtidos />} />
          <Route path="/NaoVistos" element={<NaoVistos />} />
          <Route path="/NaoCurtidos" element={<NaoCurtidos />} />
          <Route path="*" element={<NaoEncontrado/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
