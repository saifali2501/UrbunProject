import React from "react";
import bgImge from "../../../public/bgimage.webp";
import fitpack from "../../../public/Fitpack.webp";
import Rumble from "../../../public/Rumbale.webp";
// import OurCollection from "./Common/OurCollection/OurCollection";
// import OurCollection from "./Common/OurCollection/OurCollection";

export default function Home() {
  return (
    <>
      <div className="relative flex justify-center">
        <img src={bgImge} alt="" />
        <button className=" mb-3 px-[40px] absolute bottom-0 py-[10px] bg-red-700 rounded-3xl text-white hover:!text-red-700 hover:bg-white">
          Shop Now
        </button>
      </div>
{/* ================================================= */}
      <div className="flex justify-center gap-4 py-5">
        <div className="overflow-hidden h-100 w-100">
          <img
            src={fitpack}
            alt="FitPack"
            className="hover:scale-110 transition-all duration-700 w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden h-100 w-100">
          <img
            src={Rumble}
            alt="Rumble"
            className="hover:scale-110 transition-all duration-700 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ============================================= */}

        {/* <OurCollection/> */}
    </>
  );
}
