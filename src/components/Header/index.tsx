import React from 'react';
import {Container, Left, Center, Right, Title} from './styles';

interface IHeader {
  containerStyle?: any;
  title?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

const Header: React.FC<IHeader> = ({
  containerStyle,
  title,
  leftComponent,
  rightComponent,
}) => {
  return (
    <Container style={{...containerStyle}}>
      <Left>{leftComponent}</Left>
      <Center>
        <Title>{title}</Title>
      </Center>
      <Right>{rightComponent}</Right>
    </Container>
  );
};

export default Header;
