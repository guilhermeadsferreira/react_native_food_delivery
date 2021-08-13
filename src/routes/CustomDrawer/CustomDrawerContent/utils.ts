import icons from '~/consts/icons';

export type ICustomDrawerItem = {
  label: string;
  icon: any;
  navigation?: any;
};

export const itemsAfterDivider: ICustomDrawerItem[] = [
  {
    label: 'Home',
    icon: icons.home,
  },
  {
    label: 'My Wallet',
    icon: icons.wallet,
  },
  {
    label: 'Notification',
    icon: icons.notification,
  },
  {
    label: 'Favourite',
    icon: icons.favourite,
  },
];

export const itemsBeforeDivider: ICustomDrawerItem[] = [
  {
    label: 'Track your Order',
    icon: icons.location,
  },
  {
    label: 'Coupons',
    icon: icons.coupon,
  },
  {
    label: 'Settings',
    icon: icons.setting,
  },
  {
    label: 'Invite a Friend',
    icon: icons.profile,
  },
  {
    label: 'Help Center',
    icon: icons.help,
  },
];
