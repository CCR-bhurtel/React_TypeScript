import React from 'react';
import { Name } from '../Types/PersonTypes';

export type PersonListProps = {
    personList: Name[];
};
function PersonList({ personList }: PersonListProps) {
    return (
        <div>
            <h2>Persons</h2>
            <ul
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {personList.map((person): JSX.Element => {
                    return (
                        <li>
                            {person.first} {person.last}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default PersonList;
