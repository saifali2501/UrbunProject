// import React from 'react'
// import { Navigate } from 'react-router-dom';

// export default function PrivateRouter({children}) {
//     const currentUser = true;

//     if(!currentUser){
//         return <Navigate to="/" replace="true"/>
//     }
//   return children
// }

import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../AuthContext/AuthContex';

export default function PrivateRouter({ children }) {
  const { currentUser } = UserAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

