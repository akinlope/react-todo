const View = ({ isTodo }) => {
  return (
    <div className=" mt-14">
      {isTodo.map((item) => {
        return (

          <div key={item.id} className=" flex justify-center mt-2 mb-2">
            <p className=" p-3 shadow-3xl rounded text-txtColor font-mainTxt text-2xl font-extrabold mt-3">
              {item.todo}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default View;

