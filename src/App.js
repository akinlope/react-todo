import { useState } from "react";
import Add from "./components/Add";
import View from "./components/View";

function App() {
  const DATA =[
    {
      id: 0,
      val: "Washing my clothes"
    },
    {
      id: 1,
      val: "Cook dinner"
    },
    {
      id: 2,
      val: "Study at night"
    }
  ]
  const [isCurrentData, setIsCurrentData] = useState(DATA);
  const updatedDated = (incomingData) => {
    setIsCurrentData((previousData) => {
      return [incomingData, ...previousData]
    })
  }

  const getLastId = (isCurrentData) => {
    const lastIdNumber = isCurrentData.map((elem)=> {
      return elem.id;
    });
    const max = Math.max(...lastIdNumber)
    return max;
  }
  const lastNum = getLastId(isCurrentData)
  console.log(lastNum);
  return (
    <div className=" w-full h-full">
      <div className=" mt-10">
        <div>
          <h1 className=" flex justify-center text-txtColor font-mainTxt text-2xl font-[800]">TODO-REACT APP</h1>
          <Add updatedDated={updatedDated} lastNum={lastNum}/>
          <View lastNum={lastNum} data={isCurrentData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
