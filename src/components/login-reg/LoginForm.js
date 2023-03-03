import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../../helpers/functions";



const LoginForm = ({ changeStateTrue }) => {
    const [isEmail, setIsEmail] = useState("");
    const [isPassword, setIsPassword] = useState("");
    const [error, setError] = useState(false);
    const [pError, setPError] = useState(false)
    const navigate = useNavigate("")

    const handleEmail = (e) => {
        if (e.target.value.trim().length > 0)
            setError(false);
        setIsEmail(e.target.value);
    }
    const handlePassword = (e) => {
        if (e.target.value.trim().length >= 8)
            setPError(false);
        setIsPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEmail.trim().length === 0) { setError(true); }
        if (isPassword.trim().length < 8) { return setPError(true); }

        const auth = getAuth();
        await signInWithEmailAndPassword(auth, isEmail, isPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`${user} signed in`)
                toastSuccess("Login successful")
                navigate("/add")
                changeStateTrue()
            })
            .catch((err) => {
                toastError("Oops! Could not log you in")
                // const errCode = err.code;
                // const errMsg = err.message;
                // console.log(errCode, errMsg)
            })
    }


    return (
        <div className=" ">
            {/* {error && <Error title={error.title} message={error.mgs} handleError={handleError}/>} */}
            <form onSubmit={handleSubmit} className=" p-10">
                <div className=" flex justify-center pb-10 ">
                    <h1 className=" text-2xl text-txtColor font-mainTxt font-[900]">LOGIN FORM</h1>
                </div>
                <div className=" pb-3">
                    <input value={isEmail} onChange={handleEmail} className=" rounded-md p-2 w-[250px]" type="email" placeholder="Your Email Address" style={{ backgroundColor: error ? "salmon" : " ", border: error ? "red" : "none" }} />
                </div>
                <div className=" pb-10 ">
                    <input value={isPassword} onChange={handlePassword} className=" rounded-md p-2 w-[250px]" type="password" placeholder="Your Password" style={{ backgroundColor: pError ? "salmon" : " ", border: pError ? "red" : "none" }} />
                    {pError && <p className=" text-txtColor mt-[4px] font-medium text-sm">Password can't be lesser than 8-digits</p>}
                </div>

                <button className=" rounded-md p-2 w-[250px] bg-txtColor text-xl font-mainTxt font-extrabold text-secColor hover:bg-secColor hover:text-txtColor">LOGIN</button>
                <p className=" pt-5 text-txtColor">Not yet a member? Register <span onClick={changeStateTrue} className=" hover:text-secColor cursor-pointer">here</span></p>
            </form>
        </div>
    );
}

export default LoginForm;