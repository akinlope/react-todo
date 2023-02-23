import { db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const View = ({ isTodo, setReload}) => {

  const myFunc = (param) => {
    let id = param;
    let docRef = doc(db, "todo", id);
     deleteDoc(docRef).then(()=> {
      console.log("Deleted");
      setReload();
    }).catch((err)=> {
      console.log(err);
    }) 
 
  }
  return (
    <div className=" mt-14">
      {isTodo.map((item) => {
        return (
          <div onClick={()=> myFunc(item.id)} key={item.id} className=" flex justify-center mt-2 mb-2 cursor-pointer">
            <p  className=" p-3 shadow-3xl rounded text-txtColor font-mainTxt text-2xl font-extrabold mt-3">
              {item.todo}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default View;

