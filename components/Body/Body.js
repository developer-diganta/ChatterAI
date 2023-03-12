import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';

const Body = (props) => {
    return (
        <View style={styles.containerBody}>
            <Button
                title={props.language.Body.button}
                color="blue"
                accessibilityLabel="Learn more about this purple button"
                onPress={() => props.chatControl(true)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerBody: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    }
});

export default Body;
