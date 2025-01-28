import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './components/routes';
import Footer from './components/Footer/Footer';
import Business from './pages/Business';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
          <Route path='/business' element={<Business />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;