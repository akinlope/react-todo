import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Signout = () => {

    const navigate = useNavigate("")
    const auth = getAuth()
    const handleLogout = async () => {
        await signOut(auth).then(() => {
            console.log("user signed out");
            navigate("/")
        }).then((err) => {
            console.log(err);
        })
    }


    return (
        <div className=" ">
            <button onClick={handleLogout} className=" text-secColor font-semibold hover:text-txtColor bg-txtColor p-2 pl-4 pr-4 rounded-[10px]  hover:bg-secColor">LogOut</button>
        </div>
    );
}

export default Signout;