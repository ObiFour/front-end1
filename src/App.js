import './App.css';
import SellerForm from './pages/Sellerform.js';
import Layout from './pages/layout.js';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import Buyerform from './pages/Buyerform';
import Properties from './pages/Properties';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route
                path="sellerform"
                element={<SellerForm />}>
                  <Route path="display"
                  element={<p>this is a paragraph</p>}
                  />
                </Route>
              <Route
                path="properties"
                element={<Properties />}
              />
              <Route
                path="buyerform"
                element={<Buyerform />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
