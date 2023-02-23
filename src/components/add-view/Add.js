import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "../../firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import View from "./View";
import Signout from "../signout/Signout";


const Add = () => {
    const [isValue, setIsValue] = useState('');
    const [isRender, setIsRender] = useState(false);
    const [isTodo, setIsTodo] = useState("");
    const [dataBase, setDataBase] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const handleChange = (e) => {
        setIsValue(e.target.value)
    }


    let auth = getAuth();

    const handleSubmit = async () => {
        if (!isValue)
            return;
        try {
            const docRef = await addDoc(collection(db, "todo"), {
                userid: auth.currentUser.uid,
                todo: isValue,
                timeStamp: serverTimestamp()
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setIsValue("")
        setDataBase(!dataBase)
    }

    
    useEffect(() => {
        const toLoadFetchPost = async () => {
            const auth = getAuth();
            await onAuthStateChanged(auth, (user) => {
                if (user) {
                    const userID = user.uid
                    // console.log(userID);
                    console.log();
                    const q = query(collection(db, "todo"), where("userid", "==", userID), orderBy("timeStamp", "desc"));
                    const fetchPost = async () => {
                        await getDocs(q)
                            .then((querySnapshot) => {
                                const newData = querySnapshot.docs.map((doc) => ({
                                    ...doc.data(),
                                    id: doc.id
                                }));
                                setIsTodo(newData);
                                // console.log(newData);
                                setIsRender(true)
                            })
                    };
                    return fetchPost()   
                }   
            })
        };


        toLoadFetchPost();
    }, [dataBase])


// To change BackgroundColor
const handleChangeBgLight = () => {
    setIsDark(false)
    console.log("cicked...");
}
const handleChangeBgDark = () => {
setIsDark(true)
}

const reloadAfterDelete = () => {
    setDataBase(true);
}



    // console.log(isTodo.id);
    return (
        <div style={{backgroundColor: isDark ? '#3B3B3B' : ""}} className=" h-screen">
            <div className=" flex justify-around p-3">
                <div className=" flex ">
                    <div className=" mr-5 cursor-pointer">
                        <svg onClick={handleChangeBgLight} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </div>
                    <div className=" ml-5 cursor-pointer">
                        <svg onClick={handleChangeBgDark} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                    </div>
                </div>
                <Signout />
            </div>
            <div className=" flex justify-center">

                <div className=" w-[500px]  mt-10 shadow-3xl pt-10 pb-10 pl-4 rounded-[10px]">
                    <input placeholder="What do you have to do today?" value={isValue} onChange={handleChange} className=" border-2 border-txtColor sm:w-[350px] w-[250px] h-[50px] sm:mr-8 mr-2 rounded-[10px] focus: shadow-none text-[16px] p-2" type="text" />
                    <button onClick={handleSubmit} className=" bg-txtColor h-[50px] w-[90px] rounded-[10px] font-mainTxt font-[800] text-xl text-secColor hover:bg-secColor hover:text-txtColor">Add</button>
                    {isRender && <View isTodo={isTodo} setReload={reloadAfterDelete} />}

                </div>
            </div>
        </div>
    );
}

export default Add;