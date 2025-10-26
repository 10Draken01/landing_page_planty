import styled from 'styled-components';
import { AppColors } from '../../../../../Core/Theme/AppColors';
import Logo from '../atoms/Logo';
import { CustomTitle } from '../atoms/CustomTitle';
import { CustomRow } from '../atoms/CustomRow';

const HeaderContainer = styled.header`
  color: ${AppColors.onPrimaryDark};
  width: 100%;
  height: auto;
`;
export default function CustomHeader() {
  return (
    <HeaderContainer>
      <CustomRow>
        <Logo />
        <CustomTitle text="Planty" />
      </CustomRow>
    </HeaderContainer>
  );
}