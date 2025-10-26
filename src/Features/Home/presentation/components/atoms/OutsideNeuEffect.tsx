import styled from 'styled-components';
import { AppColors } from '../../../../../Core/Theme/AppColors';

const Container = styled.div`
  /* Efecto neomorfismo */
  box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.5),
              5px 5px 5px rgba(0, 0, 0, 0.2);
  
  width: fit-content;
  height: fit-content;
  background-color: ${AppColors.primaryLight};
  border-radius: 8px;
  padding: 16px;

  @media (prefers-color-scheme: dark) {
    background-color: ${AppColors.primaryDark};
  box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.2),
              5px 5px 5px rgba(0, 0, 0, 0.5);
  }
`;

interface OutsideNeuEffectProps {
  children: React.ReactNode;
}

export function OutsideNeuEffect({ children }: OutsideNeuEffectProps) {
  return <Container>{children}</Container>;
}