import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbarpg from './components/navbarpg.jsx'
import { lazy, Suspense } from "react";
import Spinnerpage from "./components/spinnerpage";
function App() {
  const Homepage = lazy(()=>import('./components/homepage'))
  const Aboutpage = lazy(()=>import('./components/aboutpage'))
  return (
    <>
      <Navbarpg />
      <Suspense fallback={<Spinnerpage/>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutPage" element={<Aboutpage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;