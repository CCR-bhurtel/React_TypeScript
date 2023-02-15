import React, { useState } from 'react';
type AuthUser = {
    name: string;
    email: string;
};
function User() {
    // const [user, setUser] = useState<null | AuthUser>(null);
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogIn = () => {
        setUser({
            name: 'Shishir',
            email: 'shishir@example.com',
        });
    };
    // const handleLogOut = () => {
    //     setUser(null);
    // };
    return (
        <div>
            {/* <button onClick={handleLogOut}>Logout</button> */}
            <button onClick={handleLogIn}>Login</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    );
}

export default User;
