import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const InjectExample = () => {
  const [color, setColor] = useState('lightblue'); 

  const changeColor = () => {
    const script = `document.body.style.backgroundColor = '${color}';`;
    webViewRef.current.injectJavaScript(script);
  };

  const webViewRef = React.useRef(null);

  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a color (e.g., red, #ff0000)"
        value={color}
        onChangeText={setColor}
      />
      <Button title="Change Background Color" onPress={changeColor} />
      <WebView 
        ref={webViewRef}
        source={{ uri: 'https://www.google.com' }} 
        style={styles.webView}
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  webView: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default InjectExample;