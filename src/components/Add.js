import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase"

const Add = ({updatedDated, lastNum}) => {
    const [isValue, setIsValue] = useState('');
    const handleChange = (e) => {
        setIsValue(e.target.value)
    }

    const  handleSubmit = async () => {
        if (!isValue)
            return;
        try{
            const docRef = await addDoc(collection(db, "todo"), {
                todo: isValue,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setIsValue("")
    }
    // console.log(getLastId);

    return (
        <div className="flex justify-center ">
            <div className=" w-[500px]  mt-10 shadow-3xl pt-10 pb-10 pl-4 rounded-[10px]">
                <input placeholder="What do you have to do today?" value={isValue} onChange={handleChange} className=" border-2 border-txtColor sm:w-[350px] w-[250px] h-[50px] sm:mr-8 mr-2 rounded-[10px] focus: shadow-none" type="text" />
                <button onClick={handleSubmit} className=" bg-txtColor h-[50px] w-[90px] rounded-[10px] font-mainTxt font-[800] text-xl text-secColor hover:bg-secColor hover:text-txtColor">Add</button>
            </div>
        </div>
    );
}

export default Add;