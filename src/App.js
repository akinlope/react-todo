import Add from "./components/Add";
import View from "./components/View";
import { db } from "../src/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {
  const [isTodo, setIsTodo] = useState("")
  const [isRender, setIsRender] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const fetchPost = async () => {

    await getDocs(collection(db, "todo"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setIsTodo(newData);
        setIsRender(true)
        // console.log(isTodo, newData);
      })
  };

  useEffect(() => {
    setTimeout(() => {
      fetchPost();
    }, 1000);
  },)

  const darkMode = () => {
    console.log("moon clicked");
    setIsDark(true)
  }
  const lightMode = () => {
    setIsDark(false)
  }


  // console.log(lastNum);
  return (
    <div className=" w-full h-full" style={{
            backgroundColor: isDark ? '#002c3e' : ''
          }}>
      <div className=" flex float-right">
        <div className=" mr-4">
          <svg onClick={lightMode} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        </div>

        <div className=" mr-4">
          <svg onClick={darkMode} 
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>

        </div>

      </div>
      <div className=" mt-10">
        <div>
          <h1 className=" flex justify-center text-txtColor font-mainTxt text-2xl font-[800]">TODO-REACT APP</h1>
          <Add />
          {isRender && <View isTodo={isTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
