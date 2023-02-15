import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const LoginForm = ({ changeStateTrue}) => {
    const [isEmail, setIsEmail] = useState("");
    const [isPassword, setIsPassword ] = useState("");
    const navigate = useNavigate("")

    const handleEmail = (e) => {
        setIsEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setIsPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, isEmail, isPassword)
        .then((userCredential)=> {
            const user = userCredential.user;
            console.log(`${user} signed in`)
            navigate("/add")
            changeStateTrue()
        })
        .catch((err) => {
            const errCode = err.code;
            const errMsg = err.message;
            console.log(errCode, errMsg)
        })
    }

    return (
        <div className=" ">
            <form onSubmit={handleSubmit} className=" p-10">
                <div className=" flex justify-center pb-10 ">
                    <h1 className=" text-2xl text-txtColor font-mainTxt font-[900]">LOGIN FORM</h1>
                </div>
                <div className=" pb-3">
                    <input value={isEmail} onChange={handleEmail} className=" rounded-md p-2 w-[250px]" type="text" placeholder="Your Email Address" />
                </div>
                <div className=" pb-10 ">
                    <input value={isPassword} onChange={handlePassword} className=" rounded-md p-2 w-[250px]" type="password" placeholder="Your Password" />
                </div>

                <button className=" rounded-md p-2 w-[250px] bg-txtColor text-xl font-mainTxt font-extrabold text-secColor hover:bg-secColor hover:text-txtColor">LOGIN</button>
                <p className=" pt-5 text-txtColor">Not yet a member? Register <span onClick={changeStateTrue} className=" hover:text-secColor cursor-pointer">here</span></p>
            </form>
        </div>
    );
}

export default LoginForm;