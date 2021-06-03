import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ImageBackground, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import AddRestaurantModal from './AddRestaurantModal';
import RestaurantList from './RestaurantList';

const RestaurantRecommendationScreen = () => {

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
                <View>
                    <AddRestaurantModal />
                </View>
                <View>
                    <RestaurantList />
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

export default RestaurantRecommendationScreen;