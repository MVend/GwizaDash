import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { Ecommerce, Orders, Employees, Customers, StagingGroups, ProductionGroups, ProductionGroupDetails, StagingGroupInfo, ProductionMembers, MemberDetails, StagingDashboard } from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
// import PrivateRoute from "./utils/PrivateRoute";
// import AppRoutes from "./routes";


const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: "#1a97f5", borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              {/* <AppRoutes /> */}
              <Routes>
                {/* dashboard  */}
                {/* <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

              {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/customers" element={<Customers />} />
                <Route exact path="/staging/dashboard" element={<StagingDashboard />} />
                <Route exact path="/staging/groups" element={<StagingGroups />} />
                <Route exact path="/staging/groups/:group_id" element={<StagingGroupInfo />} />
                <Route exact path="/production/groups" element={<ProductionGroups />} />
                <Route exact path="/production/groups/:group_id" element={<ProductionGroupDetails />} />
                <Route exact path="/production/members" element={<ProductionMembers />} />
                <Route exact path="/production/members/:member_id" element={<MemberDetails />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
