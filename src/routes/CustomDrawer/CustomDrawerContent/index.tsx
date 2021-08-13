import React from 'react';
import {
  DrawerScroll,
  Wrapper,
  CloseButton,
  CloseImage,
  ProfileButton,
  ProfileImage,
  ProfileContent,
  ProfileTitle,
  ProfileDescription,
  DrawerItems,
  DrawerItem,
  DrawerItemImage,
  DrawerItemText,
  DrawerItemsDivider,
} from './styles';
import {
  itemsAfterDivider,
  itemsBeforeDivider,
  ICustomDrawerItem,
} from './utils';
import icons from '~/consts/icons';
import useGetTabReduxState from '~/hooks/useGetTabReduxState';
import {useDispatch} from 'react-redux';
import {setSelectedTabSuccess} from '~/redux/tab/actions';

interface ICustomDrawerContent {
  navigation: any;
}

const CustomDrawerItem = ({label, icon, navigation}: ICustomDrawerItem) => {
  const {selectedTab} = useGetTabReduxState();
  const dispatch = useDispatch();

  return (
    <DrawerItem
      onPress={() => {
        dispatch(setSelectedTabSuccess(label));
        navigation.navigate('MainLayout');
      }}
      isFocused={selectedTab === label}>
      <DrawerItemImage source={icon} />
      <DrawerItemText>{label}</DrawerItemText>
    </DrawerItem>
  );
};

const CustomDrawerContent: React.FC<ICustomDrawerContent> = ({navigation}) => {
  return (
    <DrawerScroll>
      <Wrapper>
        <CloseButton>
          <CloseImage />
        </CloseButton>
        <ProfileButton onPress={() => console.log('Profile')}>
          <ProfileImage />
          <ProfileContent>
            <ProfileTitle>ByProgrammers</ProfileTitle>
            <ProfileDescription>ByProgrammers</ProfileDescription>
          </ProfileContent>
        </ProfileButton>
        <DrawerItems>
          {itemsAfterDivider.map((item, index) => (
            <CustomDrawerItem
              key={`key-${index}`}
              label={item.label}
              icon={item.icon}
              navigation={navigation}
            />
          ))}
          <DrawerItemsDivider />
          {itemsBeforeDivider.map((item, index) => (
            <CustomDrawerItem
              key={`key-${index}`}
              label={item.label}
              icon={item.icon}
              navigation={navigation}
            />
          ))}
        </DrawerItems>
        <CustomDrawerItem label="Logout" icon={icons.logout} />
      </Wrapper>
    </DrawerScroll>
  );
};

export default CustomDrawerContent;
