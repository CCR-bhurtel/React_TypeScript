import React, { ReactElement } from 'react';
import { PersonProps } from '../Types/PersonTypes';
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
