import axios from 'axios';
import { Image } from 'native-base';
import React, { useState } from 'react';
import { EventEmitter, Pressable } from 'react-native';
import { Alert } from 'react-native';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Button, Picker } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';
import { event } from 'react-native-reanimated';
import Axios from 'axios';

export default class AddAutoTransactionModalComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoTransactionId: 0,
            amount: null,
            autoTransactionDate: new Date(),
            person: "Select a Person",
            transactionType: "",
            shopName: "",
            modalVisible: false,
            submitted: false
        };

        this.onHandleAmountChange = this.onHandleAmountChange.bind(this);
        this.onHandlePersonChange = this.onHandlePersonChange.bind(this);
        this.onHandleShopNameChange = this.onHandleShopNameChange.bind(this);
        this.onHandleTransactionDateChange = this.onHandleTransactionDateChange.bind(this);
        this.onHandleTransactionType = this.onHandleTransactionType.bind(this);
    }

    newAutoTransaction = () => {
        this.setState({
            autoTransactionId: "",
            autoTransactionDate: "",
            person: "",
            transactionType: "",
            shopName: "",
            submitted: false,
        })
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    onHandleAmountChange = (input) => {
        this.setState({
            amount: input
        })
    }

    onHandleTransactionDateChange = (input) => {
        this.setState({
            autoTransactionDate: input
        })
    }

    onHandlePersonChange = (input) => {
        this.setState({
            person: input
        })
    }

    onHandleTransactionType = (input) => {
        this.setState({
            transactionType: input
        })
    }

    onHandleShopNameChange = (input) => {
        this.setState({
            shopName: input
        })
    }

    onSubmit = async (event) => {

        const data = {
            autoTransactionId: this.state.autoTransactionId,
            amount: this.state.amount,
            autoTransactionDate: this.state.autoTransactionDate,
            person: this.state.person,
            transactionType: this.state.transactionType,
            shopName: this.state.shopName
        }

        event.preventDefault();

        try {
            const response = await fetch('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/auto-transactions/add-auto-transaction-information', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            });
            console.log(json);
            const json = await response.json();
            return this.setState({
                autoTransactionId: json.autoTransactionId,
                amount: json.amount,
                autoTransactionDate: json.autoTransactionDate,
                person: json.person,
                shopName: json.shopName,
                submitted: true
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { modalVisible } = this.state;
        const autoTransactionDate = this.state.autoTransactionDate;
        return (
            <View >
                <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image} >
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                    >
                        {this.state.submitted ? (
                            <View style={styles.addCenteredView}>
                                <View style={styles.addModalView}>
                                    <Text style={styles.modalText}>Add Auto Transaction</Text>
                                    <Text style={styles.descriptionSize}>Amount: {this.state.amount}</Text>
                                    <Text style={styles.descriptionSize}>Transaction Date: {this.state.autoTransactionDate}</Text>
                                    <Text style={styles.descriptionSize}>Shop Name: {this.state.shopName}</Text>
                                    <Text style={styles.descriptionSize}>Transaction Type: {this.state.transactionType}</Text>
                                    <Text style={styles.descriptionSize}>Person: {this.state.person}</Text>
                                    <Text >{this.state.transactionType}: {this.state.amount} has been submitted!</Text>
                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={this.newAutoTransaction}
                                    >
                                        <Text style={styles.textStyle}>Add </Text>
                                    </Pressable>
                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={() => this.setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Close </Text>
                                    </Pressable>
                                </View>
                            </View>
                        ) : (
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <ImageBackground source={require('../../../assets/modal.jpg')} style={styles.image}>
                                        <Text style={styles.modalText}>Add Auto Transaction Info</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Amount"
                                            value={this.state.amount}
                                            keyboardType="numeric"
                                            onChangeText={this.onHandleAmountChange}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            value={this.state.shopName}
                                            placeholder="Enter Shop Name"
                                            onChangeText={this.onHandleShopNameChange}
                                        />
                                        {/* <DatePicker display="default" mode="date" /> */}
                                        <TextInput
                                            style={styles.dateInput}
                                            value={this.state.autoTransactionDate}
                                            onChangeText={this.onHandleTransactionDateChange}
                                            placeholder="Enter Transaction Date (YYYY-MM_DD)"
                                            keyboard="date"
                                        />
                                        <View style={styles.pickerView}>
                                            <Picker
                                                style={styles.pickerstyles}
                                                selectedValue={this.state.transactionType}
                                                onValueChange={(
                                                    itemValue, itemPosition
                                                ) => this.setState({
                                                    transactionType: itemValue, choosenIndex: itemPosition
                                                })}
                                            >
                                                <Picker.Item label="Select a Transaction Type" value="Selet a Transaction Type" value="disabled" />
                                                <Picker.Item label="Oil Change" value="Oil Change" />
                                                <Picker.Item label="Brakes" value="Brakes" />
                                                <Picker.Item label="Bumper" value="Bumper" />
                                                <Picker.Item label="Car Detailing" value="Car  Detailing" />
                                                <Picker.Item label="General Auto Maintenance" value="General Auto Maintenance" />
                                                <Picker.Item label="Diagnostic" value="Diagnostic" />
                                                <Picker.Item label="Auto Accident" value="Auto Accident" />
                                                <Picker.Item label="Towing" value="Towing" />
                                                <Picker.Item label="Alignment" value="Alignment" />
                                                <Picker.Item label="Frame" value="Frame" />
                                                <Picker.Item label="Windows" value="Windows" />
                                                <Picker.Item label="Battery" value="Battery" />
                                            </Picker>
                                        </View>
                                        <View style={styles.pickerView}>
                                            <Picker
                                                style={styles.pickerstyles}
                                                selectedValue={this.state.person}
                                                onValueChange={(
                                                    itemValue, itemPosition
                                                ) => this.setState({
                                                    person: itemValue, choosenIndex: itemPosition
                                                })}
                                            >
                                                <Picker.Item label="Select a Person" value="Selet a Person" value="disabled" />
                                                <Picker.Item label="EJ DeGuzman" value="EJ DeGuzman" />
                                                <Picker.Item label="Edgar DeGuzman" value="Edgar DeGuzman" />
                                                <Picker.Item label="Jovelie DeGuzman" value="Jovelie DeGuzman" />
                                                <Picker.Item label="Lawrence DeGuzman" value="Lawrence DeGuzman" />
                                                <Picker.Item label="Jasmine DeGuzman" value="Jasmine DeGuzman" />
                                            </Picker>
                                        </View>
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
                        )}

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
    addCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 5,
        // padding: 35,
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
    addModalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 5,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 100,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 300,
        width: 300,
        fontSize: 20
    },
    descriptionSize: {
        fontSize: 10
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
        width: 300,
        borderRadius: 10
    },
    dateInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 15,
        width: 300,
        borderRadius: 10
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
        width: 300
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
    },
    pickerstyles: {
        width: 300,
        textAlign: 'center',
        // margin: 10,
        backgroundColor: 'white',
        fontSize: 30
    },
    pickerView: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 350,
        textAlign: 'center',
        fontSize: 50,
        width: 300,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1
    }
});