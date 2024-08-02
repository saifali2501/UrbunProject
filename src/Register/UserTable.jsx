// import React from "react";
// import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap";
// // import RegisterPage from "./RegisterPage";

// export default function UserTable({modal = false, toggle = () => {}}) {
  
 
//   return (
//     <div>
//        <Modal isOpen={modal} toggle={toggle} >
//         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//         <ModalBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </ModalBody>
       
//       </Modal>
//       {/* <RegisterPage isOpen={isOpen} toggle={toggle}/> */}
//       {/* <Modal isOpen={isOpen} toggle={toggle}>
//         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//         <ModalBody>
//           <Table>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Username</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <th scope="row">1</th>
//                 <td>Mark</td>
//                 <td>Otto</td>
//                 <td>@mdo</td>
//               </tr>
//             </tbody>
//           </Table>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="secondary" onClick={toggle}>Close</Button>
//         </ModalFooter>
//       </Modal> */}
//     </div>
//   );
// }

import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

export default function UserTable({ modal = false, toggle = () => {} }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
    </div>
  );
}
