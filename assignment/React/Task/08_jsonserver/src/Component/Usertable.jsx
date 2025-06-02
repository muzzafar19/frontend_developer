import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Usertable() {

    const [users, setusers] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState('')

    useEffect(() => {
        const fetchusers = async () => {
            try {
                setloading(true)
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                setusers(res.data)
            } catch (error) {
                seterror("error fetching users!!")
            } finally {
                setloading(false)
            }
        }

        fetchusers();
    }, [])

    if (loading) return <p>loading users...</p>
    if (error) return <p>{error}</p>
    return (
        <div>
          
            <table border="1" cellPadding="10">
                <thead>
                    <tr><th>Name</th><th>Email</th><th>City</th></tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Usertable
