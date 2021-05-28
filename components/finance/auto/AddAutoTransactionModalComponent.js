import axios from 'axios';
import { Image } from 'native-base';
import React, { useState } from 'react';
import { EventEmitter, Pressable } from 'react-native';
import { Alert } from 'react-native';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';
import { event } from 'react-native-reanimated';
import Axios from 'axios';

export default class AddAutoTransactionModalComponent extends React.Component {

    state = {
        autoTransactionId: 0,
        amount: 0.00,
        autoTransactionDate: "",
        person: "",
        transactionType: "",
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    onHandleAmountChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    onHandleTransactionDateChange = (event) => {
        this.setState({
            autoTransactionDate: event.target.value
        })
    }

    onHandlePersonChange = (event) => {
        this.setState({
            person: event.target.value
        })
    }

    onHandleTransactionType = (event) => {
        this.setState({
            transactionType: event.target.value
        })
    }

    onHandleShopNameChange = (event) => {
        this.setState({
            shopName: event.target.value
        })
    }

    onSubmit = (event) => {

        const data = {
            autoTransactionId: this.state.autoTransactionId,
            amount: this.state.amount,
            autoTransactionDate: this.state.autoTransactionDate,
            person: this.state.person,
            transactionType: this.state.person,
            shopName: this.state.shopName
        }

        event.preventDefault();

        Axios.post('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/auto-transactions/add-auto-transaction-information', data)
            .then(response => {
                this.setState({
                    amount: response.data.amount,
                    autoTransactionDate: response.data.autoTransactionDate,
                    person: response.data.person,
                    transactionType: response.data.transactionType,
                    shopName: response.data.shopName
                });
                window.location.reload();
            })
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
                    // onRequestClose={() => {
                    //     Alert.alert("Modal has been closed.");
                    //     this.setModalVisible(!modalVisible);
                    // }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <ImageBackground source={require('../../../assets/modal.jpg')} style={styles.image}>
                                    <Text style={styles.modalText}>Add Auto Transaction Info</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Person"
                                    // value={contactInfo.firstname}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        // value={contactInfo.lastname}
                                        placeholder="Enter Transaction Date"
                                    // keyboardType="numeric"
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Amount"
                                    // value={contactInfo.birthdate}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Transaction Type"
                                    // value={contactInfo.email}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        // secureTextEntry={true}
                                        // value={contactInfo.phone}
                                        placeholder="Enter Shop Name"
                                    />
                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={(event) => this.onSubmit(event)}
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
        // backgroundColor: "white",
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 20,
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