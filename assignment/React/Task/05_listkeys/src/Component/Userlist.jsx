import React from "react";

const Userlist = () => {
    const user = [
        { id: 1, name: "malek muzzafar", email: "malekmuzzafar@gmail.com" },
        { id: 2, name: "malek tosif", email: "malektosif1234@gmail.com" },
        { id: 3, name: "malek salim", email: "maleksalim9081@gmail.com" }
    ];

    return (
        <div>
            <h2>userlist </h2>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default Userlist;