import React, { useEffect } from 'react';
import { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import axios from 'axios';

const ChatBox = (props) => {
    const [message, setMessage] = useState('')
    const [text, onChangeText] = useState('')
    const [chat, updateChat] = useState([]);
    const [sendButtonDisabled, setSendButtonDisabled] = useState(false);
    console.log(props.language.ChatBox.chatbotMessage)
    const getInput = async (e) => {
        setMessage(text)
        setSendButtonDisabled(true);
        axios.post('https://openai-api-v949.onrender.com/question', {
            question: text
        }).then((response) => {
            console.log("FETCH SUCCESSFULL")
            setSendButtonDisabled(false)
            const newChat = [...chat];
            const newResponse = response.data.answer
            console.log({ newResponse })
            newChat.push({
                question: text,
                answer: newResponse
            })
            onChangeText('')
            updateChat(newChat);
            console.log({ newResponse })
            return response.data;
        })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <View style={styles.containerChatBox}>
            <ScrollView style={styles.scrollChat}>
                <Text style={styles.chatBotMessage}>{props.language.ChatBox.chatbotMessage}</Text>
                {
                    chat.map((x, i) => {
                        { console.log(x.question) }
                        return (<View key={i}>
                            <Text style={styles.userMessage}>{x.question}</Text>
                            <Text style={styles.chatBotMessage}>{x.answer}</Text>
                        </View>)
                    })
                }
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={props.language.TextInput.placeholder}
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TouchableOpacity style={styles.sendButton} onPress={getInput} disabled={sendButtonDisabled}>
                    <Text>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    containerChatBox: {
        minHeight: '100%',
        width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: StatusBar.currentHeight + 50,
    },
    chatBotMessage: {
        textAlign: 'left',
        backgroundColor: 'green',
        padding: 10,
        marginTop: 5,
        marginRight: 5,
        borderRadius: 10
    },
    userMessage: {
        textAlign: 'right',
        backgroundColor: '#fff000',
        padding: 10,
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 10
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderRadius: 10
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 18,
        marginLeft: 10
    },
    sendButton: {
        right: 0,
        backgroundColor: 'blue',
        padding: 10,
        position: 'absolute',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    scrollChat: {
        marginBottom: 60
    },
    aggregateView: {
        position: 'relative',
        zIndex: 9999,
        backgroundColor: "orange"
    }
});

export default ChatBox;
