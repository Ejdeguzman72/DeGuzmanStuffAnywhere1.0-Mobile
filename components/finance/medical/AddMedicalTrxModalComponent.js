import { Image } from 'native-base';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Alert } from 'react-native';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';

export default class AddMedicalTransactionModalComponent extends React.Component {

    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state
        return (
            <View >
                <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image} >
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            this.setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <ImageBackground source={require('../../../assets/modal.jpg')} style={styles.image} >
                                    <Text style={styles.modalText}>Add Medical Info</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Person"
                                    // onChangeText={handleInputChange}
                                    // value={contactInfo.firstname}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        // onChangeText={handleInputChange}
                                        // value={contactInfo.lastname}
                                        placeholder="Enter Transaction Date"
                                    // keyboardType="numeric"
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Amount"
                                    // onChangeText={handleInputChange}
                                    // value={contactInfo.birthdate}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Transaction Type"
                                    // onChangeText={handleInputChange}
                                    // value={contactInfo.email}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        // secureTextEntry={true}
                                        // onChangeText={handleInputChange}
                                        // value={contactInfo.phone}
                                        placeholder="Enter Shop Name"
                                    />
                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={() => this.setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Submit</Text>
                                    </Pressable>
                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={() => this.setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Close </Text>
                                    </Pressable>
                                </ImageBackground>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => this.setModalVisible(true)}
                    >
                        <Text style={styles.textStyle}>Add Transaction</Text>
                    </Pressable>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 100,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 10,
    },
    modalButton: {
        // width: 200,
        borderRadius: 20,
        padding: 10,
        margin: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 25,
        width: 300
    },
    image: {
        // flex: 2,
        resizeMode: "cover",
    },
    buttonOpen: {
        backgroundColor: "black",
    },
    buttonClose: {
        backgroundColor: "black",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 30
    }
});