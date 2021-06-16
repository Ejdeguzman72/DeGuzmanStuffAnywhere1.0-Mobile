import { Image } from 'native-base';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Alert } from 'react-native';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Button, Picker } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';

export default class AddGeneralTransactionModalComponent extends React.Component {

    state = {
        transaction_id: 0,
        amount: null,
        paymentDate: "",
        entity: "",
        transactionType: "",
        person: "",
        modalVisible: false,
        submitted: false,
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    onHandleAmountChange = (input) => {
        this.setState({
            amount: input
        })
    }

    onHandlePaymentDateChange = (input) => {
        this.setState({
            paymentDate: input
        })
    }

    onHandleEntityChange = (input) => {
        this.setState({
            entity: input
        });
    }

    onHandleTransactionTypeChange = (input) => {
        this.setState({
            transactionType: input
        });
    }

    onHandlePersonChange = (input) => {
        this.setState({
            person: input
        });
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
                                        <Text style={styles.modalText}>Add General Transaction Info</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Amount"
                                            onChangeText={this.onHandleAmountChange}
                                            value={this.state.amount}
                                            keyboardType="decimal-pad"
                                        />
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={this.onHandlePaymentDateChange}
                                            value={this.state.paymentDate}
                                            placeholder="Date (YYYY-MM-DD)"
                                        />
                                        <View style={styles.pickerView}>
                                            <Picker
                                                style={styles.pickerstyles}
                                                selectedValue={this.state.entity}
                                                onValueChange={(
                                                    itemValue, itemPosition
                                                ) => this.setState({
                                                    entity: itemValue, choosenIndex: itemPosition
                                                })}
                                            >
                                                <Picker.Item label="Select a Entity" value="Selet a Entity" value="disabled" />
                                                <Picker.Item label="Rent" value="Rent" />
                                                <Picker.Item label="Statefarm" value="Statefarm" />
                                                <Picker.Item label="AT&T" value="AT&T" />
                                                <Picker.Item label="Optimum" value="Optimum" />
                                                <Picker.Item label="PSEG" value="PSEG" />
                                                <Picker.Item label="Walmart" value="Walmart" />
                                                <Picker.Item label="99 Ranch Market" value="99 Ranch Market" />
                                                <Picker.Item label="Target" value="Target" />
                                                <Picker.Item label="Hulu" value="Hulu" />
                                                <Picker.Item label="Gas Station" value="Gas Station" />
                                                <Picker.Item label="Restuarant" value="Restuarant" />
                                                <Picker.Item label="Amazon" value="Amazon" />
                                                <Picker.Item label="Shopping Mall" value="Shopping Mall" />
                                                <Picker.Item label="Hmart" value="Hmart" />
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
                                                <Picker.Item label="Rent" value="Rent" />
                                                <Picker.Item label="Home Gas" value="Home Gas" />
                                                <Picker.Item label="Electric" value="Electric" />
                                                <Picker.Item label="Cable" value="Cable" />
                                                <Picker.Item label="Internet" value="Internet" />
                                                <Picker.Item label="Phones" value="Phones" />
                                                <Picker.Item label="Auto Insurance" value="Auto Insurance" />
                                                <Picker.Item label="Medical Insurance" value="Medical Insurance" />
                                                <Picker.Item label="Homeowner's Insurance" value="Homeowner's Insurance" />
                                                <Picker.Item label="Mortgage" value="Mortgage" />
                                                <Picker.Item label="Groceries" value="Groceries" />
                                                <Picker.Item label="Restuarant" value="Restuarant" />
                                                <Picker.Item label="Office Supplies" value="Office Supplies" />
                                                <Picker.Item label="Social" value="Social" />
                                                <Picker.Item label="Vacation" value="Vacation" />
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