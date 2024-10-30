import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Reservations from "./components/Reservations";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";


function App() {
  return (

      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="/reservations" element={<Reservations />} />
              {/*<Route path="*" element={<NotFound />} />*/}
          </Route>
      </Routes>

  );
}

export default App;
