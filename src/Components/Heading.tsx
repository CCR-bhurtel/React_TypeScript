import React from 'react';
export type HeadingProps = {
    children: JSX.Element;
};
function Heading({ children }: HeadingProps) {
    return <div>{children}</div>;
}

export default Heading;
