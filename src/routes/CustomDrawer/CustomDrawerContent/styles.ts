import {DrawerContentScrollView} from '@react-navigation/drawer';
import styled from 'styled-components/native';

export const DrawerScroll = styled(DrawerContentScrollView).attrs({
  scrollEnabled: true,
  contentContainerStyle: {flex: 1},
})``;

export const Wrapper = styled.View`
  flex: 1;

  ${({theme: {SIZES}}) => `
    padding-horizontal: ${SIZES.radius}; 
  `}
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-start;
`;

export const CloseImage = styled.Image.attrs(props => ({
  source: props.theme.icons.cross,
}))`
  height: 35px;
  width: 35px;

  ${({theme: {COLORS}}) => `
    tint-color: ${COLORS.white};
  `}
`;

export const ProfileButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  ${({theme: {SIZES}}) => `
    margin-top: ${SIZES.radius};
  `}
`;

export const ProfileImage = styled.Image.attrs(props => ({
  source: props.theme.dummyData.myProfile?.profile_image,
}))`
  height: 50px;
  width: 50px;

  ${({theme: {SIZES}}) => `
    border-radius: ${SIZES.radius};
  `}
`;

export const ProfileContent = styled.View`
  ${({theme: {SIZES}}) => `
    margin-left: ${SIZES.radius};
  `}
`;

export const ProfileTitle = styled.Text`
  ${({theme: {COLORS, FONTS}}) => `
    color: ${COLORS.white};
    ${FONTS.h3};
  `}
`;

export const ProfileDescription = styled.Text`
  ${({theme: {COLORS, FONTS}}) => `
    color: ${COLORS.white};
    ${FONTS.body4};
  `}
`;

export const DrawerItems = styled.View`
  flex: 1;

  ${({theme: {SIZES}}) => `
    margin-top: ${SIZES.padding};
  `}
`;

export const DrawerItem = styled.TouchableOpacity<{isFocused: boolean}>`
  flex-direction: row;
  height: 40px;
  align-items: center;

  ${({isFocused, theme: {SIZES, COLORS}}) => `
    margin-bottom: ${SIZES.base};
    padding-left: ${SIZES.radius};
    border-radius: ${SIZES.base};
    background-color: ${isFocused ? COLORS.transparentBlack1 : 'transparent'};
  `}
`;

export const DrawerItemImage = styled.Image`
  width: 20px;
  height: 20px;

  ${({theme: {COLORS}}) => `
    tint-color: ${COLORS.white};
  `}
`;

export const DrawerItemText = styled.Text`
  margin-left: 15px;

  ${({theme: {COLORS, SIZES}}) => `
    color: ${COLORS.white};
    ${SIZES.h3};
  `}
`;

export const DrawerItemsDivider = styled.View`
  height: 1px;

  ${({theme: {SIZES, COLORS}}) => `
    margin-vertical: ${SIZES.radius};
    margin-left: ${SIZES.radius};
    background-color: ${COLORS.lightGray1};
  `}
`;
