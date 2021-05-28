import React, { useState, useEffect } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Modal, Pressable, Alert } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Icon } from 'native-base';

const BookList = (props) => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/books/all')
            .then((response) => response.json())
            .then((json) => setBook(json))
            .catch((error) => console.log(error))
    }, []);

    console.log(book);

    return (
        <ScrollView>
            <View style={styles.table}>
                {book &&
                    book.map((book, index) => (
                        <ListItem style={styles.container} key={book.book_id} avatar>
                            <Left>

                            </Left>
                            <Body>
                                <Text>{`${book.name}`}</Text>
                                <Text>{`${book.author}`}</Text>
                            </Body>
                            <Right style={{ justifyContent: 'center' }}>
                                <Icon name="heart" style={{ paddingRight: 5, fontSize: 30 }} />
                            </Right>
                        </ListItem>
                    ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        textAlign: 'center'
    },
    row: {
        padding: 10
    },
    table: {
        padding: 10,
        flex: 1
    },
    listItem: {
        color: 'green'
    }
})

export default BookList;