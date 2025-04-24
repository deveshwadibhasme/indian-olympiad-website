import { useState , Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import LoadingPage from "./pages/LoadingPage";

function App() {
  

  return (
    <Suspense fallback={<LoadingPage/>}>
      <Header />
      <Outlet />
    </Suspense>
  );
}

export default App;
