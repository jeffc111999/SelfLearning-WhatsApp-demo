import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./style";

const InputBox = () => {

    const [ message, setMessage ] = useState('');

    const onMicrophonePress = () => {

    }

    const onSendPress = () => {
        // send message to backend
    }

    const onPress = () => {
        if (!message){
            onMicrophonePress();
        }else{
            onSendPress();
        }
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS == "ios"? "padding" : "height"}
            keyboardVerticalOffset={60}
            style={{width: '100%'}}
        >
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                    <TextInput 
                        placeholder={"Type a message"}
                        style = {styles.textInput}
                        multiline
                        value={message}
                        onChangeText={setMessage}
                    />
                    <Entypo name="attachment" size={24} color='grey' style={styles.icon} />
                    {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon}/>}
                </View>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.buttonContainer}>
                        {!message
                            ? <MaterialCommunityIcons name="microphone" size={28} color="white"/>
                            : <MaterialIcons name="send" size={28} color="white"/>
                        } 
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default InputBox;