import React, { ReactElement } from 'react';

export type GreetProps = {
    name?: string;
    messageCount: number;
    isLoggedIn: boolean;
};
function Greet({ isLoggedIn, name, messageCount }: GreetProps): ReactElement {
    return (
        <h1>
            Hey {isLoggedIn ? name : 'guest'},You have {messageCount} unread messages!!{' '}
        </h1>
    );
}

export default Greet;
