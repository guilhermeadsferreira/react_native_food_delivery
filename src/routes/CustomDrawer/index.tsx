import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainLayout} from '~/screens';
import {WrapperDrawer, styles} from './styles';
import CustomDrawerContent from './CustomDrawerContent';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const CustomDrawer: React.FC = () => {
  const [progress, setProgress] = useState<Animated.Node<number>>(
    new Animated.Value(0)
  );

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = {
    borderRadius,
    transform: [{scale}],
  };

  return (
    <WrapperDrawer>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyle}
        sceneContainerStyle={styles.sceneContainerStyle}
        initialRouteName="MainLayout"
        drawerContent={props => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);

          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="MainLayout">
          {props => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </WrapperDrawer>
  );
};

export default CustomDrawer;
