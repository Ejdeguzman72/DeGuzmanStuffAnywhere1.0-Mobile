import { Image } from 'native-base';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Alert } from 'react-native';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Button, Picker } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';

export default class AddMedicalTransactionModalComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            medicalTranasctionId: 0,
            amount: null,
            facility: "",
            medicalTransactionDate: "",
            person: "",
            transactionType: "",
            submitted: false,
            modalVisible: false
        };
    }

    onHandleAmountChange = (input) => {
        this.setState({
            amount: input
        });
    }

    onHandleFacilityChange = (input) => {
        this.setState({
            facility: input
        });
    }

    onHandleMedicalTransactionDateChange = (input) => {
        this.setState({
            medicalTransactionDate: input
        })
    }

    onHandlePersonChange = (input) => {
        this.setState({
            person: input
        })
    }

    onHandleTransactionTypeChange = (input) => {
        this.setState({
            transactionType: input
        })
    }

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
                                        placeholder="Enter Amount"
                                        onChangeText={this.onHandleAmountChange}
                                        value={this.state.amount}
                                        keyboardType="decimal-pad"
                                    />
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={this.onHandleFacilityChange}
                                        value={this.state.facility}
                                        placeholder="Enter Medical Facility"
                                    />
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={this.onHandleMedicalTransactionDateChange}
                                        value={this.state.medicalTransactionDate}
                                        placeholder="Enter Transaction Date"
                                    />
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