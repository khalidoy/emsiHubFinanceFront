// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import DailyExpenses from "./pages/DailyExpenses";
import CustomNavbar from "./components/navbar"; // Your Navbar component
import MonthlyExpenses from "./pages/MonthlyExpenses";
import DailyAccounting from "./pages/DailyAccounting";
import NormalPayments from "./pages/NormalPayments"; // New NormalPayments component
import CreditReport from "./pages/CreditReports"; // New CreditReport component
import DailyAccReport from "./pages/DailyAccReport"; // New DailyAccReport component
import PaymentsReport from "./pages/PaymentsReport"; // PaymentsReport component
import StudentPayment from "./pages/StudentPayment"; // Dedicated student payment portal
import "./App.css"; // Make sure your CSS file is imported

// Layout component that conditionally renders the navbar
function LayoutWithNavbar({ children }) {
  const location = useLocation();
  // Do not render the navbar if the route is the student portal
  if (location.pathname.startsWith("/student-payment")) {
    return children;
  }
  return (
    <>
      <CustomNavbar />
      {children}
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      {/* Blurred background image container */}
      <div className="background-image"></div>

      <Router>
        <LayoutWithNavbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/daily-expenses" element={<DailyExpenses />} />
            <Route path="/monthly-expenses" element={<MonthlyExpenses />} />
            <Route path="/daily-accounting" element={<DailyAccounting />} />
            <Route
              path="/reports/normal-payments"
              element={<NormalPayments />}
            />
            <Route path="/reports/credit-report" element={<CreditReport />} />
            <Route
              path="/reports/daily-acc-report"
              element={<DailyAccReport />}
            />
            <Route path="/payments-report" element={<PaymentsReport />} />
            <Route
              path="/student-payment/:token"
              element={<StudentPayment />}
            />
          </Routes>
        </LayoutWithNavbar>
      </Router>
    </div>
  );
}

export default App;
