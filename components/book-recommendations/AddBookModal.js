import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AddBookModal = () => {
    const [openBookModal, setOpenBookModal] = useState(false);

    return (
        <View style={{ flex: 1 }}>

            <Modal visible={openContactModal}>
                <View style={styles.modalContent}>
                <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
                    <MaterialIcons
                        name="close"
                        size={36}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        onPress={() => setOpenBookModal(false)}
                    />
                    <Text style={styles.modalTitle}>Add Book Info</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Title"
                            // onChangeText={onChangeText}
                            // value={text}
                            />
                            <TextInput
                                style={styles.input}
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="Enter Author"
                            // keyboardType="numeric"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Description"
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
                onPress={() => setOpenBookModal(true)}
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
    }
});

export default AddBookModal;