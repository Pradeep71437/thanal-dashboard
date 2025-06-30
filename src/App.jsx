import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/DashBoard";
import Bookings from "./pages/Bookings";
import LeadsEnquiries from "./pages/LeadsEnquiries";

function App() {
  // const [currentPage, setCurrentPage] = useState("dashboard");

  // const renderCurrentPage = () => {
  //   switch (currentPage) {
  //     case "leads":
  //       return <LeadsEnquiries />;
  //     case "bookings":
  //       return <Bookings />;
  //     case "dashboard":
  //     default:
  //       return <Dashboard />;
  //   }
  // };

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Sidebar />

          <div className="ml-64">
            <Header />

            <main>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/leads" element={<LeadsEnquiries />} />
                <Route path="/bookings" element={<Bookings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
