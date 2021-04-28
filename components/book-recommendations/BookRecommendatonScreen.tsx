import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, Modal, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import AddBookModal from './AddBookModal';
import BookList from './BookList';

const BookRecommendationScreen = () => {

    const initialState = {
        book_id: 0,
        name: "",
        descr: "",
        author: ""
    }

    const [openBookModal, setOpenBookModal] = useState(false);
    const [bookInfo,setBookInfo] = useState(initialState);

    const handleInputChange = (event) => {
        const [name,value] = event.target;
        setBookInfo({ ...bookInfo, name: value });
    };

    const saveBookInfo = () => {
        let data = {
            book_id: bookInfo.book_id,
            name: bookInfo.name,
            author: bookInfo.author,
            descr: bookInfo.descr
        };

        fetch('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/books/add-book-information', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                book_id: 100,
                name: 'the fault in our stars',
                author: 'dfsdfsd',
                descr: 'sfsdfsdf'
            })
        });
        console.log(bookInfo + "this is the data");
    }


    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
                <View>
                    {/* <AddBookModal /> */}
                    <Modal visible={openBookModal}>
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
                                    onChangeText={handleInputChange}
                                // value={text}
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleInputChange}
                                    // value={number}
                                    placeholder="Enter Author"
                                // keyboardType="numeric"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter Description"
                                    onChangeText={handleInputChange}
                                // value={text}
                                />
                                <View style={styles.bookSubmitButton}>
                                    <Button 
                                        title='Submit'
                                        color='black'
                                        onPress={saveBookInfo}
                                    />
                                </View>
                            </ImageBackground>
                        </View>
                    </Modal>

                    <View style={styles.modalToggle}>
                        <Button
                            title='Add Book Information'
                            color='black'
                            onPress={() => setOpenBookModal(true)}
                        />
                    </View>
                </View>
                {/* <Text>{'\n'}</Text> */}
                <View>
                    <BookList />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover"
    },
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center'
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

    },
    contactList: {
        padding: 10,
        // margin: 10
    },
    bookSubmitButton: {
        padding: 10,
        color: 'black'
    }
})

export default BookRecommendationScreen;