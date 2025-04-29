import { useState , Suspense } from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import LoadingPage from "./pages/LoadingPage";
import Footer from "./components/Footer";

function App() {
  

  return (
    <Suspense fallback={<LoadingPage/>}>
      <Header />
      <Outlet />
      <Footer/>
    </Suspense>
  );
}

export default App;
