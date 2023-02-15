import React, { ReactElement } from 'react';
export type PersonProps = {
    name: {
        first: string;
        last: string;
    };
};
function Person({ name }: PersonProps): ReactElement {
    return (
        <div>
            <h1>
                Hey there {name.first} {name.last}
            </h1>
        </div>
    );
}

export default Person;
