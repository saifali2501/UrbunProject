// import React, { useState } from 'react';
// // import UserTable from './UserTable';
// import { Button } from 'reactstrap';
// import UserTable from './UserTable';

// export default function RegisterPage() {
//   const [loginModal, setLoginModal] = useState(false);

//   const toggleLoginModal = () => setLoginModal(!loginModal);

// //   const [user, setUser] = useState({
// //     email: "",
// //     password: ""
// //   });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     toggle();
// //   };


//   return (
//     <>
//       {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 rounded-2xl p-10 hover:drop-shadow-lg">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
//                   value={user.email}
//                   className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={(e) => setUser({ ...user, email: e.target.value })}
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   autoComplete="current-password"
//                   className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={(e) => setUser({ ...user, password: e.target.value })}
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500">
//             Not a member?{' '}
//             <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline">
//               Start a 14 day free trial
//             </a>
//           </p>
//         </div>
//       </div> */}
//       <Button  color="danger" onClick={toggleLoginModal}>
//         Click Me
//       </Button>
//       <UserTable modal={loginModal} toggle={toggleLoginModal} />
//     </>
//   );
// }

import React, { useState } from 'react';
import { Button } from 'reactstrap';
import UserTable from './UserTable';

export default function RegisterPage() {
  const [loginModal, setLoginModal] = useState(false);

  const toggleLoginModal = () => setLoginModal(!loginModal);

  return (
    <>
      <Button color="danger" onClick={toggleLoginModal}>
        Click Me
      </Button>
      <UserTable modal={loginModal} toggle={toggleLoginModal} />
    </>
  );
}
