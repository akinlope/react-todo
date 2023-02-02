import { useState } from "react";

const Add = ({updatedDated, lastNum}) => {
    const [isValue, setIsValue] = useState('');
    const handleChange = (e) => {
        setIsValue(e.target.value)
    }
    const handleSubmit = () => {
        if (!isValue)
            return;
            const dataToSendHome = {
                id: lastNum + 1,
                val: isValue
            };
            updatedDated(dataToSendHome)
            setIsValue("")
    }
    // console.log(getLastId);

    return (
        <div className="flex justify-center ">
            <div className=" w-[500px]  mt-10 shadow-3xl pt-10 pb-10 pl-4 rounded-[10px]">
                <input value={isValue} onChange={handleChange} className=" border-2 border-txtColor sm:w-[350px] w-[250px] h-[50px] sm:mr-8 mr-2 rounded-[10px] focus: shadow-none" type="text" />
                <button onClick={handleSubmit} className=" bg-txtColor h-[50px] w-[90px] rounded-[10px] font-mainTxt font-[800] text-xl text-secColor hover:bg-secColor hover:text-txtColor">Add</button>
            </div>
        </div>
    );
}

export default Add;