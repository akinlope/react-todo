import { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


const Login = () => {
    const [ isRender, setIsRender ] = useState();

    const changeStateFalse = () => {
        setIsRender(false)
    }
    const changeStateTrue = () => {
        setIsRender(true)
    }


    return (
        <div className=" bg-bgImg bg-cover bg-txtColor">
            <div className=" flex justify-center items-center h-screen">
                <div className=" backdrop-blur-md bg-black/30 rounded-md">
                        {!isRender && <LoginForm changeStateTrue={changeStateTrue} />}
                       {isRender && <RegistrationForm changeStateFalse={changeStateFalse}/>}
                </div>
            </div>
        </div>
    );
}

export default Login;