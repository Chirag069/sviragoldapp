import React from 'react';
import AppNavigation from './navigation';
import Toast from 'react-native-toast-message';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';

import store from './redux/store.js';
import {Provider} from 'react-redux';
import {sc, vsc, msc} from './appConstants/Utils';
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppNavigation />
          <Toast style={{fontSize: vsc(14)}} ref={ref => Toast.setRef(ref)} />
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
