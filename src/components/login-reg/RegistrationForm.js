import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const RegistrationForm = ({ changeStateFalse }) => {
    const [isEmail, setIsEmail] = useState("")
    const [isPassword, setIsPassword] = useState("");
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setIsEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setIsPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("click")

        await createUserWithEmailAndPassword(auth, isEmail, isPassword)
            .then((userCredential) => {
                //user created
                const user = userCredential.user;
                alert("user created")


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
                alert("user not created")
                const errCode = err.code;
                const errMsg = err.message;
                console.log(errCode, errMsg)
            });


    }

    return (
        <div className=" ">
            <form onSubmit={handleSubmit} className=" p-10">
                <div className=" flex justify-center pb-10 ">
                    <h1 className=" text-2xl text-txtColor font-mainTxt font-[900]">RTGISTRATION FORM</h1>
                </div>
                <div className=" pb-3">
                    <input onChange={handleEmail} value={isEmail} className=" rounded-md p-2 w-[250px]" type="email" placeholder="Your Email Address" />
                </div>
                <div className=" pb-10 ">
                    <input onChange={handlePassword} value={isPassword} className=" rounded-md p-2 w-[250px]" type="password" placeholder="Your Password" />
                </div>
                <button className=" rounded-md p-2 w-[250px] bg-txtColor text-xl font-mainTxt font-extrabold text-secColor hover:bg-secColor hover:text-txtColor">REGISTER</button>
                <p className=" pt-5 text-txtColor">Already a member? Login <span onClick={changeStateFalse} className=" hover:text-secColor cursor-pointer">here</span></p>
            </form>
        </div>
    );
}

export default RegistrationForm;