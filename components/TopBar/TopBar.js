import React from 'react';
import { View, Text, StyleSheet, StatusBar, Button, Pressable } from 'react-native';

const TopBar = (props) => {
  const pressBtn = () => {
    props.menu(true)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ChatterAI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: "flex",
    flexDirection: 'row',
    position: 'absolute',
    padding: 2,
    top: 0,
    marginTop: StatusBar.currentHeight
  }
});

export default TopBar;
