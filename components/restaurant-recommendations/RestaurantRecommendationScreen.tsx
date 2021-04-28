import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ImageBackground, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import AddRestaurantModal from './AddRestaurantModal';
import RestaurantList from './RestaurantList';

const RestaurantRecommendationScreen = () => {

    const [restaurantModal, setRestaurantModal] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
                {/* <AddRestaurantModal /> */}
                <Modal visible={restaurantModal} animationType='fade'>
                    <View style={styles.modalContent}>
                        <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
                            <MaterialIcons
                                name="close"
                                size={36}
                                style={{ ...styles.modalToggle, ...styles.modalClose }}
                                onPress={() => setRestaurantModal(false)}
                            />
                            <Text style={styles.modalTitle}>Add Restaurant Info</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Restaurant Name"
                            // onChangeText={onChangeText}
                            // value={text}
                            />
                            <TextInput
                                style={styles.input}
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="Enter Address"
                            // keyboardType="numeric"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter City"
                            // onChangeText={onChangeText}
                            // value={text}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter State"
                            // onChangeText={onChangeText}
                            // value={text}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Zip"
                            // onChangeText={onChangeText}
                            // value={text}
                            />
                            <View style={styles.bookSubmitButton}>
                                <Button
                                    title='Submit'
                                    color='black'
                                    onPress={() => console.log('Book Info submitted')}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                </Modal>

                <View style={styles.modalToggle}>
                    <Button
                        title='Add Restaurant Information'
                        color='black'
                        onPress={() => setRestaurantModal(true)}
                    />
                </View>
                <RestaurantList />
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