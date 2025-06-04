import { createSlice } from "@reduxjs/toolkit";



const userslice = createSlice({
    name: "users",
    initialState: {
        users: [],
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push({
                id: Date.now(),
                name: action.payload.name,
                email: action.payload.email,
            });
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const user = state.users.find(user => user.id === id);
            if (user) {
                user.name = name,
                    user.email = email

            }
        },
    },
});

export const { addUser, updateUser, deleteUser } = userslice.actions;
export default userslice.reducer;