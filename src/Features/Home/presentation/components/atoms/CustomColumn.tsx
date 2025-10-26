import styled from 'styled-components';

interface CustomColumnProps {
    padding?: number;
    gap?: number;
    alignItems?: string;
    justifyContent?: string;
}

export const CustomColumn = styled.div<CustomColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  padding: ${({ padding }) => padding || 16}px;
`;