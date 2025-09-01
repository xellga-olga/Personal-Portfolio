import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "@/pages/Home.jsx";
import {NotFound} from "@/pages/NotFound.jsx";
import {Toaster} from "@/components/ui/toaster.jsx";
import Quiz from "@/components/mini-apps/Quiz.jsx";
import Calculator from "@/components/mini-apps/Calculator.jsx";


function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/mini-apps/quiz" element={<Quiz />} />
          <Route path="/mini-apps/calculator" element={<Calculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;