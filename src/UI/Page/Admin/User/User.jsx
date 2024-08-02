import axios from "axios";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { useEffect, useState } from "react";

export default function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get("http://localhost:9999/user/getAll")
            .then((res) => {
                if (res.data && res.data.data) {
                    setUsers(res.data.data);
                }
            })
            .catch((err) => {
                console.log("Error fetching users:", err);
            });
    };

   

    return (
        <div className="m-10">
            <Table striped>
                <TableHead className="bg-slate-300">
                    <TableHeadCell>Sr.No.</TableHeadCell>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Email</TableHeadCell>
                    <TableHeadCell>City</TableHeadCell>
                    <TableHeadCell>Mobile</TableHeadCell>
                    <TableHeadCell>Action</TableHeadCell> {/* New column for delete button */}
                </TableHead>
                <TableBody className="divide-y">
                    {users.map((user, index) => {
                        if (user.userType === "admin") return null; // Skip rendering admin users
                        return (
                            <TableRow key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.address?.[0]?.city}</TableCell>
                                <TableCell>{user.number}</TableCell>
                                <TableCell>
                                    <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}


// import axios from "axios";
// import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
// import { useEffect, useState } from "react";

// export default function User() {
//     const [users, setUsers] = useState(null); // Initialize as null for initial loading state

//     useEffect(() => {
//         axios.get("http://localhost:9999/user/getAll")
//             .then((res) => {
//                 if (res.data && res.data.data) {
//                     setUsers(res.data.data);
//                 }
//             })
//             .catch((err) => {
//                 console.log("Error fetching users:", err);
//             });
//     }, []);

//     return (
//         <div className="m-10">
//             <Table striped>
//                 <TableHead className="bg-slate-300">
//                     <TableHeadCell>Sr.No.</TableHeadCell>
//                     <TableHeadCell>Name</TableHeadCell>
//                     <TableHeadCell>Email</TableHeadCell>
//                     <TableHeadCell>City</TableHeadCell>
//                     <TableHeadCell>Mobile</TableHeadCell>
//                 </TableHead>
//                 <TableBody className="divide-y">
//                     {users &&
//                         users.map((user, index) => {
//                             if (user.userType === "admin") return null; // Skip rendering admin users
//                             return (
//                                 <TableRow key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                                     <TableCell>{index + 1}</TableCell>
//                                     <TableCell>{user.name}</TableCell>
//                                     <TableCell>{user.email}</TableCell>
//                                     <TableCell>{user.address?.[0]?.city}</TableCell>
//                                     <TableCell>{user.number}</TableCell>
//                                 </TableRow>
//                             );
//                         })}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// }
