import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AddContactModal = () => {
    const [openContactModal, setOpenContactModal] = useState(false);

    return (
        <View style={{ flex: 1 }}>


            <Modal visible={openContactModal}>
                <View style={styles.modalContent}>
                    <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image} >
                        <MaterialIcons
                            name="close"
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setOpenContactModal(false)}
                        />
                        <Text style={styles.modalTitle}>Add Contact Information</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter First Name"
                        // onChangeText={onChangeText}
                        // value={text}
                        />
                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Enter Last Name"
                        // keyboardType="numeric"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Email"
                        // onChangeText={onChangeText}
                        // value={text}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Number"
                        // onChangeText={onChangeText}
                        // value={text}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Birthdate"
                        // onChangeText={onChangeText}
                        // value={text}
                        />
                    </ImageBackground>
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={36}
                style={styles.modalToggle}
                onPress={() => setOpenContactModal(true)}
            />
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 25
    },
    modalContent: {
        textAlign: 'center',
        fontSize: 30
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: 30
    }
});

export default AddContactModal;