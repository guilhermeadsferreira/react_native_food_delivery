import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {Text} from 'react-native';
import {AnimatedContainer} from './styles';
import useGetTabReduxState from '~/hooks/useGetTabReduxState';

import {
  Wrapper,
  PageHeader,
  PageHeaderLeft,
  PageHeaderLeftImage,
  PageHeaderRight,
  PageHeaderRightImage,
} from './styles';

interface IMainLayout {
  route: RouteProp<Record<string, object | undefined>, 'MainLayout'>;
  navigation: any;
  drawerAnimationStyle: any;
}

const MainLayout: React.FC<IMainLayout> = ({
  navigation,
  drawerAnimationStyle,
}) => {
  const {selectedTab} = useGetTabReduxState();

  return (
    <AnimatedContainer style={{...drawerAnimationStyle}}>
      <PageHeader
        title={selectedTab}
        leftComponent={
          <PageHeaderLeft onPress={() => navigation.openDrawer()}>
            <PageHeaderLeftImage />
          </PageHeaderLeft>
        }
        rightComponent={
          <PageHeaderRight onPress={() => navigation.openDrawer()}>
            <PageHeaderRightImage />
          </PageHeaderRight>
        }
      />
      <Wrapper>
        <Text>MainLayout</Text>
      </Wrapper>
    </AnimatedContainer>
  );
};

export default MainLayout;
