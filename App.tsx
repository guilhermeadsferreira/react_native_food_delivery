import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import Routes from './src/routes';
import defaultTheme from './src/consts';
import {StatusBar} from 'react-native';
import ProviderRedux from '~/redux';

const App: React.FC = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ProviderRedux>
        <ThemeProvider theme={defaultTheme}>
          <Routes />
        </ThemeProvider>
      </ProviderRedux>
    </>
  );
};

export default App;
