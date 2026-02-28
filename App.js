 import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={Platform.OS === 'android' ? '#fff' : undefined} 
      />
      <WebView 
        source={{ uri: 'https://www.google.com' }} 
        style={styles.webview} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});
