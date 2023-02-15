import { ReactElement, ReactNode } from 'react';

export type OscarProps = {
    children: ReactNode | ReactElement;
};
function Oscar({ children }: OscarProps) {
    return <div>{children}</div>;
}

export default Oscar;
