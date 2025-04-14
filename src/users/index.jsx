// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // function handleFetchUsers() {
  //   fetchUsers();
  // }

  const fetchUsers = async () => {
    try {
      const Data = await fetch("https://dummyjson.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const Response = await Data.json();
      if (Response?.users) {
        setUsers(Response.users); // Fixed setting the state
      }
      console.log(Response);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="text-center mt-5">
          <h1 className="text-2xl font-bold text-center ">List Of Users</h1>
          <button
            onClick={fetchUsers}
            className="p-2 border-2 border-black rounded-2xl m-5"
          >
            Fetch users List
          </button>
          <ul className="list-disc list-inside  p-5 border-2 border-black w-1/2 flex flex-col gap-2 mx-auto">
            {users.map((user) => (
              <li key={user.id}>
                {user.firstName} {user.lastName}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
};

export default Users;

// const Users = () => {
//   //   const [data, setdata] = useState({ value: "" });
//   //   console.log(data);
//   //   return (
//   //     <>
//   //       <input
//   //         type="text"
//   //         name=""
//   //         id=""
//   //         placeholder="Search"
//   //         onChange={(e) => {
//   //           console.log(e.target.value);
//   //           setdata({ value: e.target.value });
//   //         }}
//   //       />
//   //       {JSON.stringify(data)}
//   //     </>
//   //   );
//   // };

//   const [users, setUsers] = useState({ data: "", data2: "" });
//   // const [data,setdata]=useState("");
//   // const [data2,setdata2]=useState("");
//   // const { data, data2 } = users;
//   const [state, setstate] = useState([]);
//   console.log(users);
//   useEffect(()=>{
//     console.log("useEffect called")
//   })
//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Search"
//         onChange={(e) => {
//           // console.log(e.target.value);
//           // setUsers({ data: e.target.value });
//           setUsers((prev) => {
//             return { ...prev, data: e.target.value };
//           });
//         }}
//       />
//       <input
//         type="text"
//         placeholder="Search2"
//         onChange={(e) => {
//           // console.log(e.target.value);
//           // setUsers({ data2: e.target.value });
//           setUsers((prev) => {
//             return { ...prev, data2: e.target.value };
//           });
//         }}
//       />
//       {/* <p>Input-1 : {data}</p>
//       <p>Input-2 : {data2}</p>
//       <p>
//         Combined: {data} {data2}
//       </p> */}

//       <button
//         onClick={() => {
//           setstate((prev) => {
//             return [...prev, users];
//           });
//         }}
//       >
//         Click to submit
//       </button>

//       {JSON.stringify(users)}
//       {JSON.stringify(state)}

//       <div className=" border-2 border-black w-1/2 m-auto mt-5 p-5">
//         <h1 className="text-2xl font-bold">List Of Users</h1>
//         <ul className="list-disc list-inside">
//           {state.map((user, index) => (
//             <li key={index} className="text-xl font-semibold">
//               {user.data !== "" && user.data2 !== "" ? (
//                 <>
//                   {user.data} {user.data2}
//                 </>
//               ) : (
//                 <p className="text-red-500">No input provided</p>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Users;
