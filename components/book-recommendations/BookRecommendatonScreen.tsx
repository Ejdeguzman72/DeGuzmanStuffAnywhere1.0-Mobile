import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, Modal, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddBookModalComponent from './AddBookModalComponent';
import BookList from './BookList';

const BookRecommendationScreen = () => {

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
                <View>
                    <AddBookModalComponent />
                </View>
                {/* <Text>{'\n'}</Text> */}
                <View>
                    <BookList />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover"
    },
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 25
    },
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,

    },
    modalTitle: {
        textAlign: 'center',
        fontSize: 30
    },
    addContactModal: {

    },
    contactList: {
        padding: 10,
        // margin: 10
    },
    bookSubmitButton: {
        padding: 10,
        color: 'black'
    }
})

export default BookRecommendationScreen;