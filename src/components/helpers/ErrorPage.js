const ErrorPage = ({handleCloseError}) => {
    return (
        <div className=" inset-0 fixed z-90 bg-priBlack flex justify-center items-center opacity opacity-[.90]" onClick={handleCloseError}>
            <div>
                <div className=" bg-secColor p-3 rounded-t-md">
                    <span className=" text-txtColor font-semibold text-3xl">Invalid Input</span>
                </div>
                <div className=" bg-txtColor p-3">
                    <span className=" text-[#fff] font-semibold">Input feild cannot be empty.</span>
                    <div className=" pt-4">
                        <button className=" p-2 pr-4 pl-4 rounded-[10px] border-2 border-[#fff] hover:bg-secColor hover:text-txtColor text-lg font-mainTxt font-semibold text-secColor" onClick={handleCloseError}>Okay!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;