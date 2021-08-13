import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#FF6C44',
  transparentPrimray: 'rgba(227, 120, 75, 0.4)',
  orange: '#FFA133',
  lightOrange: '#FFA133',
  lightOrange2: '#FDDED4',
  lightOrange3: '#FFD9AD',
  green: '#27AE60',
  red: '#FF1717',
  blue: '#0064C0',
  darkBlue: '#111A2C',
  darkGray: '#525C67',
  darkGray2: '#757D85',
  gray: '#898B9A',
  gray2: '#BBBDC1',
  gray3: '#CFD0D7',
  lightGray1: '#DDDDDD',
  lightGray2: '#F5F5F8',
  white2: '#FBFBFB',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};

export const SIZES = {
  base: '8px',
  font: '14px',
  radius: '12px',
  padding: '24px',
  largeTitle: '40px',
  h1: '30px',
  h2: '22px',
  h3: '16px',
  h4: '14px',
  h5: '12px',
  body1: '30px',
  body2: '22px',
  body3: '16px',
  body4: '14px',
  body5: '12px',
  width,
  height,
};

export const FONTS = {
  largeTitle: `font-family: Poppins-Black; font-size: ${SIZES.largeTitle};`,
  h1: `font-family: Poppins-Bold; font-size: ${SIZES.h1}; line-height: 36px;`,
  h2: `font-family: Poppins-Bold; font-size: ${SIZES.h2}; line-height: 30px;`,
  h3: `font-family: Poppins-SemiBold; font-size: ${SIZES.h3}; line-height: 22px;`,
  h4: `font-family: Poppins-SemiBold; font-size: ${SIZES.h4}; line-height: 22px;`,
  h5: `font-family: Poppins-SemiBold; font-size: ${SIZES.h5}; line-height: 22px;`,
  body1: `font-family: Poppins-Regular; font-size: ${SIZES.body1}; line-height: 36px;`,
  body2: `font-family: Poppins-Regular; font-size: ${SIZES.body2}; line-height: 30px;`,
  body3: `font-family: Poppins-Regular; font-size: ${SIZES.body3}; line-height: 22px;`,
  body4: `font-family: Poppins-Regular; font-size: ${SIZES.body4}; line-height: 22px;`,
  body5: `font-family: Poppins-Regular; font-size: ${SIZES.body5}; line-height: 22px;`,
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
