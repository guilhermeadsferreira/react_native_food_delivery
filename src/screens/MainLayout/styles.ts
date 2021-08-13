import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import Header from '~/components/Header';

export const AnimatedContainer = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const PageHeader = styled(Header).attrs({
  containerStyle: {
    height: 50,
    borderWidth: 1,
    borderColor: 'green',
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
})``;

export const PageHeaderLeft = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-width: 1px;

  ${({theme: {COLORS, SIZES}}) => `
    border-color: ${COLORS.gray2};
    border-radius: ${SIZES.radius};
  `}
`;

export const PageHeaderLeftImage = styled.Image.attrs(props => ({
  source: props.theme.icons.menu,
}))``;

export const PageHeaderRight = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  ${({theme: {SIZES}}) => `
    border-radius: ${SIZES.radius};
  `}
`;

export const PageHeaderRightImage = styled.Image.attrs(props => ({
  source: props.theme.dummyData?.myProfile?.profile_image,
}))`
  width: 40px;
  height: 40px;

  ${({theme: {SIZES}}) => `
    border-radius: ${SIZES.radius};
  `}
`;

export const Wrapper = styled.View`
  flex: 1;
`;
