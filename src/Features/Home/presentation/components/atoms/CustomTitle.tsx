import styled from 'styled-components';
import { AppColors } from '../../../../../Core/Theme/AppColors';

interface CustomTitleProps {
    text?: string;
}

const Title = styled.h1`
    font-size: 48px;
    font-family: 'Montserrat', sans-serif;
    color: ${AppColors.onPrimaryLight};
    line-height: 1.09;
    font-weight: 300;

    @media (prefers-color-scheme: dark) {
        color: ${AppColors.onPrimaryDark};
    }
`;

export function CustomTitle({ text = "Dev: Ingresar Texto" }: CustomTitleProps) {
    return <Title>{text}</Title>;
}
