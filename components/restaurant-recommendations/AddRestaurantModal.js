import axios from 'axios';
import { Image } from 'native-base';
import React, { useState } from 'react';
import { EventEmitter, Pressable } from 'react-native';
import { Alert } from 'react-native';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Picker } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';
import { event } from 'react-native-reanimated';
import Axios from 'axios';

export default class AddRestaurantModal extends React.Component {

    state = {
        restaurant_id: 0,
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        restaurantType: null,
        modalVisible: false,
        submitted: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    onHandleNameChange = (input) => {
        this.setState({
            name: input
        })
    }

    onHandleAddressChange = (input) => {
        this.setState({
            address: input
        });
    }

    onHandleCityChange = (input) => {
        this.setState({
            city: input
        });
    }

    onHandleStateChange = (input) => {
        this.setState({
            state: input
        })
    }

    onHandleZipChange = (input) => {
        this.setState({
            zip: input
        })
    }

    onHandleTransactionTypeChange = (input) => {
        formatInput = parseInt(input);
        console.log(formatInput + "this is formatInput");
        this.setState({
            //restaurant_type_id: parseInt(formatInput)
            restaurantType: {
                restaurantTypeId: formatInput
            }
        })
    }


    newRestaurant = () => {
        this.setState({
            restaurant_id: 0,
            name: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            restaurantType: null,
            submitted: false
        })
    }
    onSubmit = async (event) => {

        const data = {
            restaurant_id: this.state.restaurant_id,
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            restaurant_type_id: this.state.resutaurant_id
        }

        event.preventDefault();

        try {
            const response = await fetch('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/restaurants/add-restaurant-information', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            });
            const json = await response.json();
            console.log(this.state.restaurant_type_id + " this is the restaurant type id");
            console.log(json);
            return this.setState({
                restaurant_id: json.restaurant_id,
                name: json.name,
                address: json.address,
                city: json.city,
                state: json.state,
                zip: json.zip,
                restaurantType: json.restaurantType,
                submitted: true
            });
        } catch (error) {
            console.log(error);
        } finally {
            console.log(this.state.restaurant_type_id + " this is the finally clause")
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
                                            placeholder="Enter Name"
                                            value={this.state.name}
                                            onChangeText={this.onHandleNameChange}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Street Address"
                                            value={this.state.address}
                                            onChangeText={this.onHandleAddressChange}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter City"
                                            value={this.state.city}
                                            onChangeText={this.onHandleCityChange}
                                        />
                                        <View style={styles.pickerView}>
                                            <Picker
                                                style={styles.pickerstyles}
                                                selectedValue={this.state.state}
                                                onValueChange={(
                                                    itemValue, itemPosition
                                                ) => this.setState({
                                                    state: itemValue, choosenIndex: itemPosition
                                                })}
                                            >
                                                <Picker.Item label="Select a State" value="Selet a State" value="disabled" />
                                                <Picker.Item label="Alabama" value="Alabama" />
                                                <Picker.Item label="Alaska" value="Alaska" />
                                                <Picker.Item label="Arizona" value="Arizona" />
                                                <Picker.Item label="Arkansas" value="Arkansas" />
                                                <Picker.Item label="California" value="California" />
                                                <Picker.Item label="Colorado" value="Colorado" />
                                                <Picker.Item label="Conneticut" value="Conneticut" />
                                                <Picker.Item label="Delaware" value="Delaware" />
                                                <Picker.Item label="Florida" value="Florida" />
                                                <Picker.Item label="Georgia" value="Georgia" />
                                                <Picker.Item label="Hawaii" value="Hawaii" />
                                                <Picker.Item label="Idaho" value="Idaho" />
                                                <Picker.Item label="Illinois" value="Illinois" />
                                                <Picker.Item label="Indiana" value="Indiana" />
                                                <Picker.Item label="Iowa" value="Iowa" />
                                                <Picker.Item label="Kansas" value="Kansas" />
                                                <Picker.Item label="Kentucky" value="Kentucky" />
                                                <Picker.Item label="Louisiana" value="Louisiana" />
                                                <Picker.Item label="Maine" value="Maine" />
                                                <Picker.Item label="Maryland" value="Maryland" />
                                                <Picker.Item label="Massachusetts" value="Massachusetts" />
                                                <Picker.Item label="Michigan" value="Michigan" />
                                                <Picker.Item label="Minnesota" value="Minnesota" />
                                                <Picker.Item label="Mississippi" value="Mississippi" />
                                                <Picker.Item label="Missouri" value="Missouri" />
                                                <Picker.Item label="Montana" value="Montana" />
                                                <Picker.Item label="Nebraska" value="Nebraska" />
                                                <Picker.Item label="Nevada" value="Nevada" />
                                                <Picker.Item label="New Hampshire" value="New Hampshire" />
                                                <Picker.Item label="New Jersey" value="New Jersey" />
                                                <Picker.Item label="New Mexico" value="New Mexico" />
                                                <Picker.Item label="New York" value="New York" />
                                                <Picker.Item label="North Carolina" value="North Carolina" />
                                                <Picker.Item label="North Dakota" value="North Dakota" />
                                                <Picker.Item label="Ohio" value="Ohio" />
                                                <Picker.Item label="Oklahoma" value="Oklahoma" />
                                                <Picker.Item label="Oregon" value="Oregon" />
                                                <Picker.Item label="Pennsylvania" value="Pennsylvania" />
                                                <Picker.Item label="Rhode Island" value="Rhode Island" />
                                                <Picker.Item label="South Carolina" value="South Carolina" />
                                                <Picker.Item label="South Dakota" value="South Dakota" />
                                                <Picker.Item label="Tennessee" value="Tennessee" />
                                                <Picker.Item label="Texas" value="Texas" />
                                                <Picker.Item label="Utah" value="Utah" />
                                                <Picker.Item label="Vermont" value="Vermont" />
                                                <Picker.Item label="Virginia" value="Virginia" />
                                                <Picker.Item label="Washington" value="Washington" />
                                                <Picker.Item label="West Virginia" value="West Virginia" />
                                                <Picker.Item label="Wisconsin" value="Wisconsin" />
                                                <Picker.Item label="Wyoming" value="Wyoming" />
                                            </Picker>
                                        </View>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter zip"
                                            value={this.state.zip}
                                            keyboardType="numeric"
                                            onChangeText={this.onHandleZipChange}
                                        />
                                        <View style={styles.pickerView}>
                                            <Picker
                                                style={styles.pickerstyles}
                                                selectedValue={this.state.restaurant_type_id}
                                                onValueChange={(
                                                    itemValue, itemPosition
                                                ) => this.setState({
                                                    restaurant_type_id: itemValue, choosenIndex: itemPosition
                                                })}
                                            >
                                                <Picker.Item label="Select a Restaurant Type" value="Select a Restaurant Type" value="disabled" />
                                                <Picker.Item label="American" value="1" />
                                                <Picker.Item label="Pizzeria" value="2" />
                                                <Picker.Item label="Chinese" value="3" />
                                                <Picker.Item label="Hispanic" value="4" />
                                                <Picker.Item label="Texmex" value="5" />
                                                <Picker.Item label="Breakfeast" value="6" />
                                                <Picker.Item label="Pasta" value="7" />
                                                <Picker.Item label="Steakhouse" value="8" />
                                                <Picker.Item label="Sushi" value="9" />
                                                <Picker.Item label="ramen" value="10" />
                                                <Picker.Item label="Pho" value="11" />
                                                <Picker.Item label="Fast Food" value="12" />
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
                        <Text style={styles.textStyle}>Add Restaurant</Text>
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