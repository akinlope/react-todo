import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../../helpers/functions";


const RegistrationForm = ({ changeStateFalse }) => {
    const [isEmail, setIsEmail] = useState("")
    const [isPassword, setIsPassword] = useState("");
    const [error, setError] = useState(false);
    const [pError, setPError] = useState(false)
    const navigate = useNavigate();

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

        if (isEmail.trim().length === 0){ setError(true);}
        if (isPassword.trim().length < 8){ return setPError(true);}
        
        await createUserWithEmailAndPassword(auth, isEmail, isPassword)
            .then((userCredential) => {
                //user created
                // const user = userCredential.user;
                // alert("user created")
                toastSuccess("Registration successful")


            }).then(() => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        //signout user 
                        // signOut(auth).then(() => {
                        //     console.log("SignOut succesfully")
                        // }).catch((err) => {
                        //     console.log(err)
                        // })
                        navigate("/add");
                        changeStateFalse();
                    }
                })
            })
            .catch((err) => {
                // alert("user not created")
                // const errCode = err.code;
                // const errMsg = err.message;
                // console.log(errCode, errMsg)
                toastError("Oops! Could not register you")
            });


    }

    return (
        <div className=" ">
            <form onSubmit={handleSubmit} className=" p-10">
                <div className=" flex justify-center pb-10 ">
                    <h1 className=" text-2xl text-txtColor font-mainTxt font-[900]">RTGISTRATION FORM</h1>
                </div>
                <div className=" pb-3">
                    <input onChange={handleEmail} value={isEmail} className=" rounded-md p-2 w-[250px]" type="email" placeholder="Your Email Address" style={{backgroundColor: error ? "salmon" : " ", border: error ? "red" : "none"}}/>
                </div>
                <div className=" pb-10 ">
                    <input onChange={handlePassword} value={isPassword} className=" rounded-md p-2 w-[250px]" type="password" placeholder="Your Password" style={{backgroundColor: pError ? "salmon" : " ", border: pError ? "red" : "none"}}/>
                    { pError && <p className=" text-txtColor mt-[4px] font-medium text-sm">Password can't be lesser than 8-digits</p>}
                </div>
                <button className=" rounded-md p-2 w-[250px] bg-txtColor text-xl font-mainTxt font-extrabold text-secColor hover:bg-secColor hover:text-txtColor">REGISTER</button>
                <p className=" pt-5 text-txtColor">Already a member? Login <span onClick={changeStateFalse} className=" hover:text-secColor cursor-pointer">here</span></p>
            </form>
        </div>
    );
}

export default RegistrationForm;