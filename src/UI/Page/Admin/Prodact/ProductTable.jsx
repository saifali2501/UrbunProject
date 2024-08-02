import axios from "axios";
import { Table } from "flowbite-react";
import React from "react";

const sizeOptions = ["S", "M", "L", "XL"];
const img = "https://marketplace.canva.com/EAFijA-Es8I/1/0/1600w/canva-beige-minimalist-stay-tuned-coming-soon-instagram-post-iv_vQnhdRkY.jpg";

export default function ProductTable({ allProduct, setPreviewOpen, setDetails, product }) {

  const PreviewHandler = (id) => {
    axios({
      method: "get",
      url: `http://localhost:9999/product/getProductById/${id}`,
      data: product,
    })
      .then((res) => {
        console.log("+=+==+++++++++++++++++++++++++++++++++", res?.data);
        setDetails(res?.data?.data);
        setPreviewOpen(true);
      })
      .catch((err) => {
        alert(err);
      });

    setPreviewOpen(true);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head className="[&_*]:!bg-slate-300">
            <Table.HeadCell>Sr.No.</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Title</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Size</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {allProduct?.map((product, index) => (
              <Table.Row
                key={product.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>
                  <img
                    className="h-[70px]"
                    src={product?.thumbnail || img}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = img;
                    }}
                  />
                </Table.Cell>
                <Table.Cell>{product.title}</Table.Cell>
                <Table.Cell>
                  <div className="bordering flex gap-1">
                    <span className="fw-bold">Price:- </span>
                    <div className="text-black font-bold">₹ {product?.price}</div>
                  </div>
                  <div className="bordering flex gap-1">
                    <span className="fw-bold">Discount:- </span>
                    <div className="text-red-500 font-bold">
                      {product?.discountPercentage || 0} %
                    </div>
                  </div>
                  <div className="bordering flex gap-1">
                    <span className="fw-bold">FinalPrice:- </span>
                    <div className="text-green-500 font-bold">
                      ₹
                      {product?.price -
                        (
                          (product?.price * product?.discountPercentage) /
                          100
                        ).toFixed(0)}
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex">
                    {product?.color?.map((color, index) => (
                      <div
                        key={index}
                        className="mr-1 rounded-xl w-[15px] h-[15px] border border-black"
                        style={{ background: color }}
                      ></div>
                    ))}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex">
                    {sizeOptions?.map((size, index) => {
                      let include = product?.size?.includes(size);
                      return (
                        <div
                          key={index}
                          style={{
                            color: include ? "black" : "gray",
                            border: include
                              ? "1.5px solid black"
                              : "1.5px solid gray",
                          }}
                          className="relative w-[25px] h-[25px] rounded-full grid place-content-center mr-1"
                        >
                          {size}
                          {!include && (
                            <hr className="absolute top-[45%] rotate-[40deg] !m-0 w-full !border-2 !border-gray-500" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex gap-3 [&_p]:cursor-pointer [&_p]:m-0">
                    <p
                      className="underline text-green-500"
                      onClick={() => PreviewHandler(product?._id)}
                    >
                      Preview
                    </p>
                    <p
                      className="underline text-blue-800"
                      onClick={() => updateHandler(product)}
                    >
                      Edit
                    </p>
                    <p
                      className="underline text-red-500"
                      onClick={() => deleteHandler(product?._id)}
                    >
                      Delete
                    </p>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
