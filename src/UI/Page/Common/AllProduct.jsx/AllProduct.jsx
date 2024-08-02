import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllProductBag from "../../../../../public/CollectionImage/AllProductBag.webp";
import Card from '../../../Component/Card/Card';
import { useParams } from 'react-router-dom';

export default function AllProduct() {
  const [allProduct, setAllProduct] = useState([]);
  const [filter, setFilter] = useState({});
  const { type } = useParams();

  useEffect(() => {
    if (type && type !== "all") {
      setFilter({ ...filter, mainCategory: type });
    } else {
      setFilter({ ...filter, mainCategory: "" });
    }
  }, [type]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
      params: filter,
    })
      .then((res) => {
        console.log("Response data:", res.data);
        setAllProduct(res?.data?.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        alert("Error: " + err.message);
      });
  }, [filter]);

  return (
    <div>
      <div>
        <img className='w-100 h-100' src={AllProductBag} alt="All Product Bag" />
        <h1 style={{ fontWeight: "700" }} className="mx-3">
          {type}
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14'>
          {allProduct.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
      
    </div>
  );
}
