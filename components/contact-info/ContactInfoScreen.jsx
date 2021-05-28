import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native';
import ContactInfoList from './ContactInfoList';
import { MaterialIcons } from '@expo/vector-icons';
import AddContactModal from './add-contact-info/AddContactModal';
import Axios from 'axios';
import ContactService from '../../services/contact-info-service';

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

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
                <View style={styles.addContactModal}>
                    <View>
                        <AddContactModal />
                    </View>
                </View>
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