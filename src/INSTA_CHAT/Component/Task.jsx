// import React from "react";
// import datanotBG from "../../../public/TaskImages/IMAGE.svg";
// import datanotfound from "../../../public/TaskImages/404 1.svg"
// import Logo from "../../../public/TaskImages/Group 9.svg"

// const DataNotFound = () => {
//   return (
//     <div className="flex flex-col relative h-screen justify-center items-center ">
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${datanotBG})` }}
//       ></div>
//       <div className="logo absolute top-2 left-3 right-0 ">
//              <img src={Logo} alt="" />
//       </div>
//       <div className="relative z-10 flex flex-col items-center">
//         <img
//           src={datanotfound}
//           alt="Data Not Found"
//           className="max-w-xs md:max-w-2xl mb-2"
//         />
//         <div className="mb-8 text-center">
//           <p className="text-2xl font-Montserat font-bold "> Sorry, page not found .</p>
//           <p style={{width:"25.5rem"}} className="text-sm text-gray-400 font-Montserat  pt-2">Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling</p>
//         </div>
//         <div className="flex justify-center">
//           <button className="bg-Red hover:bg-red-700 text-white font-bold py-2 px-8 rounded-xl">
//           Refresh
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataNotFound;

import React from "react";
import datanotBG from "../../../public/TaskImages/IMAGE.svg";
import datanotfound from "../../../public/TaskImages/404 1.svg"
import Logo from "../../../public/TaskImages/Group 9.svg"

const DataNotFound = () => {
  return (
    <div className="flex flex-col relative h-screen justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${datanotBG})` }}
      ></div>
      <div className="logo absolute top-2 left-3 right-0">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={datanotfound}
          alt="Data Not Found"
          className="max-w-xs md:max-w-2xl mb-2"
        />
        <div className="mb-8 text-center">
          <p className="text-2xl font-Montserat font-bold">Sorry, page not found.</p>
          <p className="text-sm text-gray-400 font-Montserat pt-2" style={{ width: "25.5rem" }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-xl">
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataNotFound
