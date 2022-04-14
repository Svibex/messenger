import React, { useEffect, useState } from "react";

function Table({socket}) {
    const [users, setUsers] = useState([]);

    // let db = [{id: 1, name: "Sveta"}, {id: 2, name: "Sveta"}, {id: 3, name: "Sveta"}, {id: 4, name: "Sveta"}];

//     const getTable = async () => {
//
//         await socket.emit("get_users");
//         setUsers(users => [...list, messageData]);
//         setCurrentMessage("");
//     }
//
//     fetch("http://localhost:3001")
//         .then(response => {
//             return response.json()
//                 .then(data => {
//                     db = data.slice(0);
//                     createTable();
//                     LASTPAGE = db.length / rowsPerPage
//                     addListeners();
//                 });
//         });
// }

    useEffect(() => {
        socket.on("get_users", (data) => {
            setUsers((list) => [...list, data]);
        });
    }, [socket]);

    return (
        <table className="table">
        <thead>
            <th className="col-1">
                <span>ID</span>
            </th>
            <th className="col-2">
                <span>NAME</span>
            </th>
        </thead>

    {db.map((user) => {
        return (
            <tbody>
          <tr key={user.id}>
            <td className="col-1">{user.id}</td>
            <td className="col-2">{user.name}</td>
          </tr>
            </tbody>
        )
    })}
        </table>
    )
}

export default Table;