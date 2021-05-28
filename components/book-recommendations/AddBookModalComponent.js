import axios from 'axios';
import { Image } from 'native-base';
import React, { useState } from 'react';
import { EventEmitter, Pressable } from 'react-native';
import { Alert } from 'react-native';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';
import { event } from 'react-native-reanimated';
import Axios from 'axios';

export default class AddBookModalComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            book_id: 0,
            name: "",
            author: "",
            descr: "",
            modalVisible: false,
            submitted: false
        };

        this.onHandleTitleChange = this.onHandleTitleChange.bind(this);
        this.onHandleAuthorChange = this.onHandleAuthorChange.bind(this);
        this.onHandleDescrChange = this.onHandleDescrChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    newBook = () => {
        this.setState({
            book_id: 0,
            name: "",
            author: "",
            descr: "",
            modalVisible: false,
            submitted: false
        })
    }

    onHandleTitleChange = (input) => {
        this.setState({
            name: input
        });
    }

    onHandleAuthorChange = (input) => {
        this.setState({
            author: input
        });
    }

    onHandleDescrChange = (input) => {
        this.setState({
            descr: input
        });
    }

    // handleInputChange = (input) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    onSubmit = async (event) => {

        const data = {
            book_id: this.state.book_id,
            name: this.state.name,
            author: this.state.author,
            descr: this.state.descr
        }

        event.preventDefault();

        try {
            const response = await fetch('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/books/add-book-information', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            });
            const json = await response.json();
            return this.setState({
                book_id: json.book_id,
                name: json.name,
                author: json.author,
                descr: json.descr,
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
                                <Text style={styles.modalText}>Add Book</Text>
                                <Text>{this.state.name} has been submitted!</Text>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={this.newBook}
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
                                <ImageBackground source={require('../../assets/modal.jpg')} style={styles.image} >
                                    <Text style={styles.modalText}>Add Book</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Title"
                                        value={this.state.name}
                                        // onChangeText={(event) => this.onHandleTitleChange(event)}
                                        onChangeText={this.onHandleTitleChange}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Author"
                                        value={this.state.author}
                                        onChangeText={this.onHandleAuthorChange}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Summary"
                                        value={this.state.descr}
                                        onChangeText={this.onHandleDescrChange}
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
                    <Text style={styles.textStyle}>Add Book</Text>
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
        marginTop: 20,
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        borderColor: '#2c3e50',
        borderWidth: 5,
        // height: 550,
        // width: 450,
        // padding: 35,
        alignItems: "center",
        shadowColor: "black",
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
        // width: 400,
        borderRadius: 20,
        padding: 10,
        margin: 10,
    },
    submittedAddModalButton: {
        width: 200,
        borderRadius: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: '#fefefa',
        textAlign: 'center',
        fontSize: 25,
        width: 300
    },
    image: {
        flex: 2,
        resizeMode: "cover",
        margin: 0,
        width: 'auto'
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