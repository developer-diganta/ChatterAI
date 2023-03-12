import { Pressable, StyleSheet, Text, View, StatusBar } from 'react-native';
import TopBar from './components/TopBar/TopBar.js';
import Body from './components/Body/Body.js';
import ChatBox from './components/ChatBox/ChatBox.js';
import { useState } from 'react';
import English from './utils/languages/English';
import Bengali from './utils/languages/Bengali';
export default function App() {

  const [chatBody, updateChatBody] = useState(false);
  return (
    <View style={styles.container}>
      <TopBar backgroundColor="#2196F3" barStyle="light-content" />
      {!chatBody && <Body chatControl={updateChatBody} language={English} />}
      {chatBody && <ChatBox language={English} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
