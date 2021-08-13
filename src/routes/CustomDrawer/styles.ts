import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const WrapperDrawer = styled.View`
  flex: 1;
  ${({theme: {COLORS}}) => `
		background-color: ${COLORS.primary}
	`}
`;

export const styles = StyleSheet.create({
  drawerStyle: {
    flex: 1,
    width: '65%',
    paddingRight: 20,
    backgroundColor: 'transparent',
  },
  sceneContainerStyle: {
    backgroundColor: 'transparent',
  },
});
