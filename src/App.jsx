import Newsletter from './Newsletter';
import SuccessMsg from "./SuccessMsg";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 
  return (
    <BrowserRouter>
      <main className="bg-charcoalGrey flex items-center justify-center md:h-[100vh]">
        <Routes>
          <Route path="/" element={<Newsletter />} />
          <Route path="/success" element={<SuccessMsg />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
