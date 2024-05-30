import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TextForm from "./components/views/States";
import Sidebar from "./components/Sidebar";
import AllProps from "./components/views/Props";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="containe">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="all-content">
            <Routes>
              <Route path="/allProps" element={<AllProps />}></Route>
              <Route path="/textTransform" element={<TextForm />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
