import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AddRestaurantModal = () => {
    const [openRestaurantModal, setOpenRestaurantModal] = useState(false);

    return (
        <View style={{ flex: 1 }}>


            <Modal visible={openRestaurantModal}>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name="close"
                        size={24}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        onPress={() => setOpenRestaurantModal(false)}
                    />
                    <Text style={styles.modalTitle}>Add Restaurant Information</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Restaurant Name"
                    // onChangeText={onChangeText}
                    // value={text}
                    />
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="Enter Restaurant Type"
                    // keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Address"
                    // onChangeText={onChangeText}
                    // value={text}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter City"
                    // onChangeText={onChangeText}
                    // value={text}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter State"
                    // onChangeText={onChangeText}
                    // value={text}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Zip"
                    // onChangeText={onChangeText}
                    // value={text}
                    />
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={36}
                style={styles.modalToggle}
                onPress={() => setOpenRestaurantModal(true)}
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
    modalTitle: {
        textAlign: 'center',
        fontSize: 30
    }
});

export default AddRestaurantModal;