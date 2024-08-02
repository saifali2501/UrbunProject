import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from 'flowbite-react';
import React from 'react';

export default function Card({ product }) {
    let discountPrice = (product?.price * product?.discountPercentage) / 100
  return (
    <div>
      <div style={{ width: "22rem", height: "30rem" }} className="hover:h-40 group datas-center m-3">
        <div className="relative">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="group-hover:!opacity-0 group-hover:!duration-700"
          />
          <img
            src={product?.images?.[0]}
            alt={product.title}
            style={{ width: "30rem", height: "25rem" }}
            className="absolute top-0 left-0 group-hover:!opacity-100 transition-opacity !duration-700 opacity-0"
          />
          {product.sale && (
            <p className="bg-[red] absolute p-0.5 text-xs px-1 font-semibold top-2 left-2 rounded-sm text-white">
              Sale
            </p>
          )}
          <div className="opacity-0 group-hover:!opacity-100 duration-300 absolute top-0 m-2 right-0">
            <div className="bg-white hover:!bg-[#d11e33] hover:!border-[#d11e33] mb-2 hover:text-white border h-12 w-12 text-center rounded-full grid place-content-center cursor-pointer">
              <FontAwesomeIcon icon={faEye} />
            </div>
            <div className="bg-white hover:!bg-[#d11e33] hover:!border-[#d11e33] hover:text-white border h-12 w-12 text-center rounded-full grid place-content-center">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
        <div className="bg-white group-hover:-translate-y-12 transition-all duration-500 flex flex-col items-center">
          <div className="flex items-center space-x-2 my-2">
            <Rating>
              {[1, 2, 3, 4, 5].map((rating) => (
                <Rating.Star key={rating} filled={rating <= product.rating} />
              ))}
            </Rating>
          </div>
          <h6 className="text-[#191919] font-normal hover:text-[#d11e33] cursor-pointer">
            {product.title}
          </h6>
          <div className="flex m-0 space-x-2">
            <h6 className="text-[#d11e33] text-sm">Rs.₹ {product?.price - discountPrice?.toFixed(0)}.00</h6>
            <h6 className="text-[#191919] text-sm line-through">
                            Rs.{product?.price}.00
                        </h6>
          </div>
          <button className="bg-[#d11e33] text-white rounded-md py-2 px-4 hidden group-hover:block hover:bg-white hover:border-2 hover:border-[#d11e33] hover:!text-[#d11e33]">
            <div className="flex items-center gap-2">
              <div>ADD TO CART</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
