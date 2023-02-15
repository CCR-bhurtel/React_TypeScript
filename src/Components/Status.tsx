import React from 'react';
type StatusProps = {
    status: 'Loading' | 'Fetched' | 'Error';
};
function Status({ status }: StatusProps) {
    const message =
        status === 'Loading'
            ? 'Loading...'
            : status === 'Fetched'
            ? 'Data fetched successfully'
            : status === 'Error'
            ? 'Error fetching data'
            : '';
    return (
        <div>
            <h4>Status: {message}</h4>
        </div>
    );
}

export default Status;
