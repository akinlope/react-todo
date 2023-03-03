import { toast } from "react-toastify";
;
// success message
export function toastSuccess (message) {
    console.log("helper function");
    return toast.success(message)
};

// error message
export function toastError (message){
    return toast.error(message)
}

