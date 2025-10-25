import styled from 'styled-components';
import { AppColors } from './AppColors';

const Root = styled.div`

    background-color: ${AppColors.primaryLight};


    @media (prefers-color-scheme: dark) {
        background-color: ${AppColors.primaryDark};
    }
`;

export function AppTheme({children}: {children: React.ReactNode}) {
    return (
        <Root>
            {children}
        </Root>
    );
}
