import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Signout = () => {

    const navigate = useNavigate("")
    const auth = getAuth()
    const handleLogout = async () => {
        await signOut(auth).then(()=> {
            console.log("user signed out");
            navigate("/")
        }).then((err)=> {
            console.log(err);
        })
    }


    return (<div>
        <p onClick={handleLogout} className=" cursor-pointer hover:font-[600] hover:text-txtColor">LogOut</p>
    </div>);
}

export default Signout;