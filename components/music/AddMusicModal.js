import axios from 'axios';
import { Image } from 'native-base';
import React, { useState } from 'react';
import { EventEmitter, Pressable } from 'react-native';
import { Alert } from 'react-native';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';
import { event } from 'react-native-reanimated';
import Axios from 'axios';

export default class AddMusicModal extends React.Component {

    state = {
        song_id: 0,
        artist: "",
        title: "",
        genre: "",
        modalVisible: false,
        submitted: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    onHandleArtistChange = (input) => {
        this.setState({
            artist: input
        })
    }

    onHandleTitleChange = (input) => {
        this.setState({
            title: input
        })
    }

    onHandleGenreChange = (input) => {
        this.setState({
            genre: input
        })
    }

    onSubmit = (event) => {

        const data = {
            song_id: this.state.song_id,
            artist: this.state.artist,
            title: this.state.title,
            genre: this.state.genre,
        }

        event.preventDefault();

        try {
            const response = fetch('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/music/add-music', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            });
            const json = response.json();
            return this.setState({
                song_id: json.song_id,
                title: json.title,
                artist: json.artist,
                genre: json.genre,
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
                <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
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
                                    <Text style={styles.modalText}>Add Song</Text>
                                    <Text>{this.state.title} has been submitted!</Text>
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
                                            value={this.state.title}
                                            // onChangeText={(event) => this.onHandleTitleChange(event)}
                                            onChangeText={this.onHandleTitleChange}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Artist"
                                            value={this.state.artist}
                                            onChangeText={this.onHandleArtistChange}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Genre"
                                            value={this.state.genre}
                                            onChangeText={this.onHandleGenreChange}
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
                        <Text style={styles.textStyle}>Add Music</Text>
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