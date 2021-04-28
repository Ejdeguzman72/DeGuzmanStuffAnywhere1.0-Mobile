import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native';
import ContactInfoList from './ContactInfoList';
import { MaterialIcons } from '@expo/vector-icons';
import AddContactModal from './add-contact-info/AddContactModal';
import Axios from 'axios';

const ContactInfoScreen = () => {

    const initialState = {
        contact_id: 0,
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        birthdate: ""
    };

    const [contactInfo, setContactInfo] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleInputChange = (event) => {
        const [name, value] = event.target;
        setContactInfo({ ...contactInfo, [name]: value });
    };
    
    const saveContactInfo = () => {
        let data = {
            contact_id: contactInfo.contact_id,
            firstname: contactInfo.firstname,
            lastname: contactInfo.lastname,
            phone: contactInfo.phone,
            email: contactInfo.email,
            birthdate: contactInfo.birthdate
        };

        fetch('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/person-info/add-person-information', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contact_id: data.contact_id,
                firstname: data.firstname,
                lastname: data.lastname,
                phone: data.phone,
                email: data.email,
                birthdate: data.birthdate
            })
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
                <View style={styles.addContactModal}>
                    <Modal visible={modalOpen} animationType='slide'>
                        <View style={styles.modalContent}>
                            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
                                <MaterialIcons
                                    name="close"
                                    size={24}
                                    style={{ ...styles.modalToggle, ...styles.modalClose }}
                                    onPress={() => setModalOpen(false)}
                                />
                                <Text style={styles.modalTitle}>Add Contact Information</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter First Name"
                                    onChangeText={handleInputChange}
                                    // value={contactInfo.firstname}
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleInputChange}
                                    // value={contactInfo.lastname}
                                    placeholder="Enter Last Name"
                                // keyboardType="numeric"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter Birthdate"
                                    onChangeText={handleInputChange}
                                    // value={contactInfo.birthdate}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter Email"
                                    onChangeText={handleInputChange}
                                    // value={contactInfo.email}
                                />
                                <TextInput
                                    style={styles.input}
                                    // secureTextEntry={true}
                                    onChangeText={handleInputChange}
                                    // value={contactInfo.phone}
                                    placeholder="Enter Phone Number"
                                    keyboardType='phone-pad'
                                />
                                <View style={styles.contactSubmitButton}>
                                    <Button
                                        title='Submit'
                                        color='black'
                                        onPress={saveContactInfo}
                                    />
                                </View>
                            </ImageBackground>
                        </View>
                    </Modal>
                    <View style={styles.modalToggle}>
                        <Button
                            title='Add Contact Info'
                            color='black'
                            onPress={() => setModalOpen(true)}
                        />
                    </View>
                    {/* < AddContactModal /> */}
                </View>
                {/* <Text>{'\n'}</Text> */}
                <View style={styles.contactList}>
                    <ContactInfoList />
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
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
        padding: 10
    },
    contactList: {
        // padding: 10,
        // margin: 10
    },
    contactSubmitButton: {
        padding: 10,
        color: 'black'
    }
});

export default ContactInfoScreen;