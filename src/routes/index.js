import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AppRoutes from './app.routes';

export default function Routes() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <AppRoutes />
    </SafeAreaView>
  );
};