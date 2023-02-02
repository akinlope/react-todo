import Add from "./components/Add";
import View from "./components/View";
import {db} from "../src/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {
  const [isTodo, setIsTodo] = useState("")
  const [isRender, setIsRender] = useState(false)
  
  const fetchPost = async () => {
    
    await getDocs(collection(db, "todo"))
    .then((querySnapshot)=> {
      const newData = querySnapshot.docs.map((doc)=> ({
        ...doc.data(), 
        id: doc.id
      }));
      setIsTodo(newData);
      setIsRender(true)
      // console.log(isTodo, newData);
    })
  };

  useEffect(()=>{
      fetchPost();
  }, [])
  
  // console.log(lastNum);
  return (
    <div className=" w-full h-full">
      <div className=" mt-10">
        <div>
          <h1 className=" flex justify-center text-txtColor font-mainTxt text-2xl font-[800]">TODO-REACT APP</h1>
          <Add />
          {isRender && <View isTodo={isTodo}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
