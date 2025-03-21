import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const sizeOptions = ["S", "M", "L", "XL",];

export default function ProductPreview({ previewOpen, setPreviewOpen, details }) {
  const [selectedColor, setSelectedColor] = useState(details?.color?.[0] || {});
  const [selectedSize, setSelectedSize] = useState(details?.size?.[0] || {});

  return (
    <div>
      <Dialog open={previewOpen} onClose={() => setPreviewOpen(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <DialogPanel
              transition
              className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"
            >
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  onClick={() => setPreviewOpen(false)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
                {details && (
                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img alt={details.imageAlt} src={details.thumbnail} className="object-cover object-center" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{details.name}</h2>

                      <section aria-labelledby="information-heading" className="mt-2">
                        <h3 id="information-heading" className="sr-only">Product information</h3>
                        <p className="text-2xl text-gray-900">{details.price}</p>

                        <div className="mt-6">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  aria-hidden="true"
                                  className={classNames(
                                    details.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                />
                              ))}
                            </div>
                            <p className="sr-only">{details.rating} out of 5 stars</p>
                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              {details.reviewCount} reviews
                            </a>
                          </div>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-10">
                        <h3 id="options-heading" className="sr-only">Product options</h3>

                        <form>
                          {/* Colors */}
                          <fieldset aria-label="Choose a color">
                            <legend className="text-sm font-medium text-gray-900">Color</legend>
                            <RadioGroup
                              value={selectedColor}
                              onChange={setSelectedColor}
                              className="mt-4 flex items-center space-x-3"
                            >
                              {details.color.map((color) => (
                                <Radio
                                  key={color.name}
                                  value={color}
                                  aria-label={color.name}
                                  className={classNames(
                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1'
                                  )}
                                >
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      'h-8 w-8 rounded-full border border-black border-opacity-10'
                                    )}
                                    style={{ backgroundColor: color }}
                                  />
                                </Radio>
                              ))}
                            </RadioGroup>
                          </fieldset>

                          Sizes
                          <fieldset aria-label="Choose a size" className="mt-10">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium text-gray-900">Size</div>
                              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Size guide
                              </a>
                            </div>

                            <RadioGroup
                              value={selectedSize}
                              onChange={setSelectedSize}
                              className="mt-4 grid grid-cols-4 gap-4"
                            >
                              {sizeOptions.map((size) => (
                                
                                <Radio
                                  key={size}
                                  value={size}
                                  disabled={!details.size.find(s => s.name === size)?.inStock}
                                  className={classNames(
                                    details.size.find(s => s.name === size)?.inStock
                                      ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                      : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                    'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1'
                                  )}
                                >
                                  <span>{size}</span>
                                  {details.size.find(s => s.name === size)?.inStock ? (
                                    <span
                                      aria-hidden="true"
                                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                    />
                                  ) : (
                                    <span
                                      aria-hidden="true"
                                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                    >
                                      <svg
                                        stroke="currentColor"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      >
                                        <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                      </svg>
                                    </span>
                                  )}
                                </Radio>
                              ))}
                            </RadioGroup>
                          </fieldset>

                          <button
                            type="submit"
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Add to bag
                          </button>
                        </form>
                      </section>
                    </div>
                  </div>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}



      {/* <Button color="danger" onClick={toggle}>
          Click Me
        </Button> */}
{/* 
      <Modal isOpen={isOpen} toggle={toggle} backdrop="static">
        <ModalHeader toggle={toggle}>Product Details</ModalHeader>
        <ModalBody>
          {productDetails && (
            <>
              <div className="text-center p-2">
                <img
                  src={productDetails?.thumbnail}
                  alt=""
                  width="200px"
                  height="100px"
                />
              </div>
              <div className="border dark rounded-2">
                <div
                  className="d-flex justify-content-between border-bottom dark"
                  style={{ padding: "0px 11px" }}
                >
                  <div>
                    <span className="fw-bold">Title:-</span>{" "}
                    {productDetails?.title}
                  </div>
                  <div>
                    <span className="fw-bold">Description:-</span>{" "}
                    {productDetails?.description}
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between border-bottom dark"
                  style={{ padding: "0px 11px" }}
                >
                  <div>
                    <span className="fw-bold">Price:-</span>{" "}
                    {productDetails?.price}
                  </div>
                  <div>
                    <span className="fw-bold">Discount:-</span>{" "}
                    {productDetails?.discountPercentage || 0} %
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between border-bottom dark"
                  style={{ padding: "0px 11px" }}
                >
                  <div>
                    <span className="fw-bold">Final price:-</span>
                    {productDetails?.price -
                      (
                        (productDetails?.price *
                          productDetails?.discountPercentage) /
                        100
                      ).toFixed(1) || "not discount"}
                  </div>
                  <div>
                    <span className="fw-bold">Available Stock:-</span>{" "}
                    {productDetails?.availableStock}
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between border-bottom dark"
                  style={{ padding: "0px 11px" }}
                >
                  <div className="d-flex gap-2 align-items-baseline">
                    <span className="fw-bold">Color</span>
                    <div className="d-flex gap-2">
                      {productDetails?.color?.map((color, i) => {
                        return (
                          <div
                            key={i}
                            style={{
                              height: "10px",
                              width: "10px",
                              border: "1px solid black",
                              borderRadius: "50%",
                              background: color,
                            }}
                          >
                            {}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <span className="fw-bold">Gender:-</span>{" "}
                    {productDetails?.gender}
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between border-bottom dark"
                  style={{ padding: "0px 11px" }}
                >
                  <div>
                    <span className="fw-bold">Category:-</span>{" "}
                    {productDetails?.category}
                  </div>
                  <div>
                    <span className="fw-bold">Rating:-</span>{" "}
                    {productDetails?.rating}
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between border-bottom dark"
                  style={{ padding: "0px 11px" }}
                >
                  <div>
                    <span className="fw-bold">Brand:-</span>{" "}
                    {productDetails?.brand}
                  </div>
                  <div className="d-flex gap-2">
                    <span className="fw-bold">Size:-</span>
                    <div className="d-flex gap-1">
                      {sizeOptions?.map((size, i) => {
                        return (
                          <div
                            key={i}
                            style={{
                              border: "1px solid black",
                              padding: "3px",
                              color: productDetails?.size?.find(
                                (e) => e == size
                              )
                                ? "black"
                                : "gray",
                            }}
                          >
                            {size}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </ModalBody>
      </Modal> */}
 




/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


// import { useState } from 'react'
// import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'
// import { StarIcon } from '@heroicons/react/20/solid'

// // const product = {
// //   name: 'Basic Tee 6-Pack ',
// //   price: '$192',
// //   rating: 3.9,
// //   reviewCount: 117,
// //   href: '#',
// //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
// //   imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
// //   colors: [
// //     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
// //     { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
// //     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
// //   ],
// //   sizes: [
// //     { name: 'XXS', inStock: true },
// //     { name: 'XS', inStock: true },
// //     { name: 'S', inStock: true },
// //     { name: 'M', inStock: true },
// //     { name: 'L', inStock: true },
// //     { name: 'XL', inStock: true },
// //     { name: 'XXL', inStock: true },
// //     { name: 'XXXL', inStock: false },
// //   ],
// // }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   const [open, setOpen] = useState(false)
//   // const [selectedColor, setSelectedColor] = useState(product.colors[0])
//   // const [selectedSize, setSelectedSize] = useState(product.sizes[2])

//   return (
//     <Dialog open={open} onClose={setOpen} className="relative z-10">
//       <DialogBackdrop
//         transition
//         className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
//       />

//       <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//         <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
//           <DialogPanel
//             transition
//             className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
//           >
//             <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
//               <button
//                 type="button"
//                 onClick={() => setOpen(false)}
//                 className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
//               >
//                 <span className="sr-only">Close</span>
//                 <XMarkIcon aria-hidden="true" className="h-6 w-6" />
//               </button>

//               <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
//                 <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
//                   <img alt={product.imageAlt} src={product.imageSrc} className="object-cover object-center" />
//                 </div>
//                 <div className="sm:col-span-8 lg:col-span-7">
//                   <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

//                   <section aria-labelledby="information-heading" className="mt-2">
//                     <h3 id="information-heading" className="sr-only">
//                       Product information
//                     </h3>

//                     <p className="text-2xl text-gray-900">{product.price}</p>

//                     {/* Reviews */}
//                     <div className="mt-6">
//                       <h4 className="sr-only">Reviews</h4>
//                       <div className="flex items-center">
//                         <div className="flex items-center">
//                           {[0, 1, 2, 3, 4].map((rating) => (
//                             <StarIcon
//                               key={rating}
//                               aria-hidden="true"
//                               className={classNames(
//                                 product.rating > rating ? 'text-gray-900' : 'text-gray-200',
//                                 'h-5 w-5 flex-shrink-0',
//                               )}
//                             />
//                           ))}
//                         </div>
//                         <p className="sr-only">{product.rating} out of 5 stars</p>
//                         <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                           {product.reviewCount} reviews
//                         </a>
//                       </div>
//                     </div>
//                   </section>

//                   <section aria-labelledby="options-heading" className="mt-10">
//                     <h3 id="options-heading" className="sr-only">
//                       Product options
//                     </h3>

//                     <form>
//                       {/* Colors */}
//                       <fieldset aria-label="Choose a color">
//                         <legend className="text-sm font-medium text-gray-900">Color</legend>

//                         <RadioGroup
//                           value={selectedColor}
//                           onChange={setSelectedColor}
//                           className="mt-4 flex items-center space-x-3"
//                         >
//                           {product.colors.map((color) => (
//                             <Radio
//                               key={color.name}
//                               value={color}
//                               aria-label={color.name}
//                               className={classNames(
//                                 color.selectedClass,
//                                 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
//                               )}
//                             >
//                               <span
//                                 aria-hidden="true"
//                                 className={classNames(
//                                   color.class,
//                                   'h-8 w-8 rounded-full border border-black border-opacity-10',
//                                 )}
//                               />
//                             </Radio>
//                           ))}
//                         </RadioGroup>
//                       </fieldset>

//                       {/* Sizes */}
//                       <fieldset aria-label="Choose a size" className="mt-10">
//                         <div className="flex items-center justify-between">
//                           <div className="text-sm font-medium text-gray-900">Size</div>
//                           <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                             Size guide
//                           </a>
//                         </div>

//                         <RadioGroup
//                           value={selectedSize}
//                           onChange={setSelectedSize}
//                           className="mt-4 grid grid-cols-4 gap-4"
//                         >
//                           {product.sizes.map((size) => (
//                             <Radio
//                               key={size.name}
//                               value={size}
//                               disabled={!size.inStock}
//                               className={classNames(
//                                 size.inStock
//                                   ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
//                                   : 'cursor-not-allowed bg-gray-50 text-gray-200',
//                                 'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1',
//                               )}
//                             >
//                               <span>{size.name}</span>
//                               {size.inStock ? (
//                                 <span
//                                   aria-hidden="true"
//                                   className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
//                                 />
//                               ) : (
//                                 <span
//                                   aria-hidden="true"
//                                   className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
//                                 >
//                                   <svg
//                                     stroke="currentColor"
//                                     viewBox="0 0 100 100"
//                                     preserveAspectRatio="none"
//                                     className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
//                                   >
//                                     <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
//                                   </svg>
//                                 </span>
//                               )}
//                             </Radio>
//                           ))}
//                         </RadioGroup>
//                       </fieldset>

//                       <button
//                         type="submit"
//                         className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                       >
//                         Add to bag
//                       </button>
//                     </form>
//                   </section>
//                 </div>
//               </div>
//             </div>
//           </DialogPanel>
//         </div>
//       </div>
//     </Dialog>
//   )
// }
