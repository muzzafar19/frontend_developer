import React from 'react'

function Alogin() {
    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label><br />
                    <input
                        type="text"
                        name="username"
                        value={admin.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <div>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        name="password"
                        value={admin.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Alogin
