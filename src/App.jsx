import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route , Navigate, useLocation } from 'react-router-dom';
import { Formik } from 'formik';

import { Ecommerce, Orders, Employees, Customers, LoginPage } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import { getLoggedUserInfo } from './utils/helpers';

const App = () => {
  
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);


  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
     <BrowserRouter>
              <Routes>
                {/* Authentication*/}
                <Route path="/" element={(<LoginPage />)} />
                <Route path="/login" element={(<LoginPage />)} />
                  

                  {/* dashboard  */}
                  <Route path="/" element={(<Ecommerce />)} />
                  <Route path="/ecommerce" element={(<Ecommerce />)} />

                  {/* pages  */}
                  <Route path="/orders" element={
                    <RequireAuth>
                      <Orders />
                    </RequireAuth>
                  } />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/customers" element={<Customers />} />

              </Routes>
      </BrowserRouter>
    </div>
  );
};

function RequireAuth({ children }) {
  let auth = getLoggedUserInfo();
  let location = useLocation();

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
