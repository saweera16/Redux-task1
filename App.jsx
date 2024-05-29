import { Route, Routes } from "react-router-dom";
import './App.css'
import Login from "./pages/login";
import StudentTable from "./pages/StudentTable";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/student" element={<StudentTable/>} />

      </Routes>
    </>
  )
}

export default App
