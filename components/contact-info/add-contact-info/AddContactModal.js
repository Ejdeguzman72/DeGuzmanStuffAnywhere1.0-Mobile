import axios from 'axios';
import { Image } from 'native-base';
import React, { useState } from 'react';
import { EventEmitter, Pressable } from 'react-native';
import { Alert } from 'react-native';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';
import { event } from 'react-native-reanimated';
import Axios from 'axios';

export default class AddContactModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            person_id: 0,
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            birthdate: "",
            modalVisible: false,
            submitted: false
        };

        // this.onHandleEmailChange = this.onHandleEmailChange(this);
        // this.onHandleFirstNameChange = this.onHandleFirstNameChange(this);
        // this.onHandleLastNameChange = this.onHandleLastNameChange(this);
        // this.onHandlePhoneChange = this.onHandlePhoneChange(this);
        // this.onhandleBirthdateChange = this.onhandleBirthdateChange(this);
        // this.newContact = this.newContact(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    newContact = () => {
        this.setState({
            person_id: 0,
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            birthdate: "",
            submitted: false
        })
    }

    onHandleFirstNameChange = (input) => {
        this.setState({
            firstname: input
        });
    }

    onHandleLastNameChange = (input) => {
        this.setState({
            lastname: input
        })
    }

    onHandleEmailChange = (input) => {
        this.setState({
            email: input
        });
    }

    onHandlePhoneChange = (input) => {
        this.setState({
            phone: input
        });
    }

    onhandleBirthdateChange = (input) => {
        this.setState({
            birthdate: input
        })
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    onSubmit = async (event) => {

        const data = {
            person_id: this.state.person_id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            birthdate: this.state.birthdate,
            phone: this.state.phone
        }

        event.preventDefault();

        try {
            const response = await fetch('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/person-info/add-person-information', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            });
            const json = await response.json();
            console.log(json);
            return this.setState({
                person_id: json.person_id,
                firstname: json.firstname,
                lastname: json.lastname,
                email: json.email,
                phone: json.phone,
                birthdate: json.birthdate, 
                submitted: true
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { modalVisible } = this.state
        return (
            <View >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                // onRequestClose={() => {
                //     Alert.alert("Modal has been closed.");
                //     this.setModalVisible(!modalVisible);
                // }}
                >

                    {this.state.submitted ? (
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Add Contact</Text>
                                <Text>First Name: {this.state.firstname}</Text>
                                <Text>Last Name: {this.state.lastname}</Text>
                                <Text>Email: {this.state.email}</Text>
                                <Text>Phone: {this.state.phone}</Text>
                                <Text>Date of Birth: {this.state.birthdate}</Text>
                                <Text>{this.state.firstname}  {this.state.lastname} has been submitted!`</Text>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={this.newContact}
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
                                <ImageBackground source={require('../../../assets/modal.jpg')} style={styles.image} >
                                    <Text style={styles.modalText}>Add Contact</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter First Name"
                                        value={this.state.firstname}
                                        onChangeText={this.onHandleFirstNameChange}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Last Name"
                                        value={this.state.lastname}
                                        onChangeText={this.onHandleLastNameChange}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Email"
                                        value={this.state.email}
                                        onChangeText={this.onHandleEmailChange}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Phone"
                                        value={this.state.phone}
                                        onChangeText={this.onHandlePhoneChange}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Birthdate"
                                        value={this.state.birthdate}
                                        onChangeText={this.onhandleBirthdateChange}
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
                    )}


                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => this.setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Add Contact Info</Text>
                </Pressable>
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