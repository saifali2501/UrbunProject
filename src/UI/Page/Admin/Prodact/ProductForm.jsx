import { useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Button } from "flowbite-react";
import Select from "react-select";
import { category, data } from "../../../../Untils/Constants";
import axios from "axios";
import { useSelector } from "react-redux";

const sizeOptions = ["S", "M", "L", "XL"];

export default function ProductForm({
  open,
  setOpen,
  setAllProduct,
  product,
  setProduct,
  refetchData,
  refetch,
  intialProduct,
}) {
  // const mydata = useSelector((state)=>state?.authSlice?.token)

  const mydata = useSelector((state) => state?.AuthSlice?.token);
  console.log("🚀 ~ mydata:================>", mydata);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("-----------  product----------->", product);
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: product,
      headers: {
        authorization: `Bearer ${mydata}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("=======data adddedde-------->", res?.data);
        alert("data added");
        setProduct(intialProduct);
        // console.log("------>");
        refetchData();
        setAllProduct(res?.data?.data);
      })
      .catch((err) => {
        alert(err.massage);
      });
  };
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        setAllProduct(res?.data?.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [refetch]);

  const checkHandler = (e) => {
    if (product.size.includes(e)) {
      let filterData = product?.size.filter((ele) => ele !== e);
      console.log("🚀 ~ checkHandler ~ filterData:=========>", filterData);
      setProduct({ ...product, size: filterData });
    } else {
      setProduct({ ...product, size: [...product?.size, e] });
    }
  };
  const selectHandler = (e) => {
    let color = e.map(
      (e) => e.value.charAt(0).toUpperCase() + e.value.slice(1)
    );
    setProduct({ ...product, color: color });
  };

  const CustomColorOption = ({ innerProps, label, data }) => (
    <div
      {...innerProps}
      style={{
        padding: "0px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #dee2e6",
        background: "#dee9",
        cursor: "pointer",
      }}
    >
      {label}
      <div
        style={{
          backgroundColor: data.value,
          width: "20px",
          height: "20px",
          marginRight: "8px",
          borderRadius: "50%",
        }}
      ></div>
      <div>
        <img src={data?.img} alt="" style={{ width: "40px", height: "40px" }} />
      </div>
    </div>
  );
  return (
    <>
      <Button onClick={() => setOpen(true)}>Click...</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="bg-white px-4 pb-2 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="flex min-h-full flex-1 flex-col justify-center px-2 py-4 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Add Products
                      </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                      <form
                        action="#"
                        method="POST"
                        onSubmit={(e) => submitHandler(e)}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Form fields */}
                          <div>
                            <label
                              htmlFor="title"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Title
                            </label>
                            <div className="mt-2">
                              <input
                                value={product?.title}
                                id="title"
                                name="title"
                                type="text"
                                required
                                autoComplete="title"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                onChange={(e) =>
                                  setProduct({
                                    ...product,
                                    title: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="description"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Description
                            </label>
                            <div className="mt-2">
                              <input
                                value={product?.description}
                                id="description"
                                name="description"
                                type="text"
                                required
                                autoComplete="description"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                onChange={(e) =>
                                  setProduct({
                                    ...product,
                                    description: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="brand"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Brand
                            </label>
                            <div className="mt-2">
                              <input
                                value={product?.brand}
                                id="brand"
                                name="brand"
                                type="text"
                                required
                                autoComplete="brand"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                onChange={(e) =>
                                  setProduct({
                                    ...product,
                                    brand: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="price"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Price
                            </label>
                            <div className="mt-2">
                              <input
                                value={product?.price}
                                id="price"
                                name="price"
                                type="text"
                                required
                                autoComplete="price"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                onChange={(e) =>
                                  setProduct({
                                    ...product,
                                    price: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="discountPercentage"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Discount Percentage
                            </label>
                            <div className="mt-2">
                              <input
                                value={product?.discountPercentage}
                                id="discountPercentage"
                                name="discountPercentage"
                                type="text"
                                required
                                autoComplete="discountPercentage"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                onChange={(e) =>
                                  setProduct({
                                    ...product,
                                    discountPercentage: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="availableStock"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Available Stock
                            </label>
                            <div className="mt-2">
                              <input
                                value={product?.availableStock}
                                id="availableStock"
                                name="availableStock"
                                type="text"
                                required
                                autoComplete="availableStock"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                onChange={(e) =>
                                  setProduct({
                                    ...product,
                                    availableStock: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-span-2">
                            <label
                              htmlFor="thumbnail"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Thumbnail
                            </label>
                            <div className="mt-2">
                              <input
                                value={product?.thumbnail}
                                id="thumbnail"
                                name="thumbnail"
                                type="text"
                                required
                                autoComplete="thumbnail"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                onChange={(e) =>
                                  setProduct({
                                    ...product,
                                    thumbnail: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-span-2">
                            <label
                              htmlFor="color"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Color
                            </label>
                            <div className="mt-2">
                              <Select
                                isMulti
                                options={data}
                                value={product?.color?.map((color) => {
                                  return { value: color, label: color };
                                })}
                                onChange={(e) => selectHandler(e)}
                                components={{ Option: CustomColorOption }}
                              />
                            </div>
                          </div>
                          <div className="col-span-2">
                            <label
                              htmlFor="category"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Category
                            </label>
                            <div className="mt-2">
                              <Select
                                isMulti
                                options={category}
                                value={product?.category?.map((ele) => {
                                  return { value: ele, label: ele };
                                })}
                                onChange={(e) =>
                                  setProduct({
                                    ...product,
                                    category: e?.map((ele) => ele?.value),
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="Size"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Size
                          </label>
                          <div className="mt-2 flex space-x-4">
                            {sizeOptions.map((size) => (
                              <div
                                key={size}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  id={`size-${size}`}
                                  name="size"
                                  type="checkbox"
                                  checked={product.size.includes(size)}
                                  onChange={() => checkHandler(size)}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`size-${size}`}
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  {size}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
