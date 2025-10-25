import styled from 'styled-components';
import { AppColors } from '../../../../../Core/Theme/AppColors';
import Logo from '../atoms/Logo';

const HeaderContainer = styled.header`
  color: ${AppColors.onPrimaryDark};
  width: 100%;
  height: auto;
  padding: 16px;
`;
export default function CustomHeader() {
  return (
    <HeaderContainer>
      <Logo/>
    </HeaderContainer>
  );
}