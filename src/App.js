import Add from "./components/add-view/Add";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login-reg/Login";

function App() {


  return (
    <div className=" w-full h-full">
      <div>
        {/* <h1 className=" flex justify-center text-txtColor font-mainTxt text-2xl font-[800]">TODO-REACT APP</h1> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/add" element={<Add />} />


        </Routes>
      </div>
      {/* </div> */}

    </div>
  );
}

export default App;
