import React, { useState } from 'react';

function LoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogIn = () => {
        setIsLoggedIn(true);
    };
    const handleLogOut = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            {isLoggedIn ? <button onClick={handleLogOut}>Logout</button> : <button onClick={handleLogIn}>Login</button>}

            <div>User is {isLoggedIn ? 'Logged In' : 'Logged out'}</div>
        </div>
    );
}

export default LoggedIn;
