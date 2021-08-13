import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const Left = styled.View``;

export const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: blue;
`;

export const Title = styled.Text`
  ${({theme: {FONTS}}) => `
    ${FONTS.h3};
  `}
`;

export const Right = styled.View``;
