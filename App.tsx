import React from 'react';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';

import {
  persistOptions,
  queryClient,
  setupOnlineManager,
} from './src/config/queryClient';
import { Routes } from './src/routes';
import { colors } from './src/theme';

setupOnlineManager();

const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.surface.app,
    border: colors.border.default,
    card: colors.surface.card,
    notification: colors.danger.text,
    primary: colors.brand.link,
    text: colors.text.primary,
  },
};

const App = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={persistOptions}
      onSuccess={() =>
        queryClient.resumePausedMutations().then(() => queryClient.invalidateQueries())
      }>
      <NavigationContainer theme={navigationTheme}>
        <Routes />
      </NavigationContainer>
    </PersistQueryClientProvider>
  );
};

export default App;
