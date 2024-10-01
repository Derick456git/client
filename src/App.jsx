import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer.jsx";
import Navbarpg from './components/navbarpg.jsx'
import { lazy, Suspense } from "react";
import Spinnerpage from "./components/spinnerpage";
import { ComponentProvider } from "./components/componentprovider.jsx";
function App() {
  const Homepage = lazy(()=>import('./components/homepage'))
  const Aboutpage = lazy(()=>import('./components/aboutpage'))
  return (
    <>
    <ComponentProvider>
      <Navbarpg />
      <Suspense fallback={<Spinnerpage/>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutpage" element={<Aboutpage />} />
        </Routes>
      </Suspense>
      <Footer />
      </ComponentProvider>
    </>
  );
}

export default App;