import RootNavigator from '@/navigation/RootNavigator';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { store } from '@/store/store';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <PaperProvider>
          <RootNavigator />
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
