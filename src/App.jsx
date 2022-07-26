import Main from './components/main/main';
import Solvers from './components/solvers/solvers';
import Chars from './components/chars/chars';
import About from './components/about/about';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from './utils/const';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />}>
        </Route>
        <Route path={AppRoute.FEMSolvers} element={<Solvers />}>
        </Route>
        <Route path={AppRoute.EffectiveChars} element={<Chars />}>
        </Route>
        <Route path={AppRoute.About} element={<About />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;