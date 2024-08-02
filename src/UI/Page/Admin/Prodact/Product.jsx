import React, { useState } from "react";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";
import { intialProduct } from "../../../../Untils/intialState";
import ProductPreview from "./ProductPreview";

export default function Product() {
  let [allProduct, setAllProduct] = useState([]);
  let [product, setProduct] = useState(intialProduct);
  const [open, setOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [refetch, setRefetch] = useState(true);
  let [details,setDetails] = useState(null)

  const refetchData = () => setRefetch(!refetch);

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <div style={{ flex: "1", textAlign: "center" }}>
          <h1 className="m-0 ps-5 ms-5">Product</h1>
        </div>

        <div>
          <ProductForm
            open={open}
            setOpen={setOpen}
            setAllProduct={setAllProduct}
            product={product}
            setProduct={setProduct}
            refetchData={refetchData}
            refetch={refetch}
            intialProduct={intialProduct}
          />
        </div>
      </div>
      <ProductTable allProduct={allProduct} setPreviewOpen={setPreviewOpen} setDetails={setDetails} product={product}/>
      <ProductPreview previewOpen={previewOpen} setPreviewOpen={setPreviewOpen} details={details} />
    </div>
  );
}
