import React from 'react';
import { StyleSheet, StatusBar, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Platform.OS === 'android' ? '#ffffff' : undefined}
        />
        <WebView
          source={{ uri: 'https://www.google.com' }}
          style={styles.webview}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
        />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  webview: {
    flex: 1,
  },
});
