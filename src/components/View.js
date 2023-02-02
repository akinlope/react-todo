const View = ({ data, lastNum }) => {
  // console.log(lastNum);
  return (
    <div className=" mt-14">
      {data.map((item) => {
        return (
         
          <div key={item.id} className=" flex justify-center mt-2 mb-2">
            <p className=" p-3 shadow-3xl rounded text-txtColor font-mainTxt text-2xl font-extrabold mt-3">
              {item.val}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default View;
