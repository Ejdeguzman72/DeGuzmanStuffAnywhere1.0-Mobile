import React, { useState, useEffect } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Modal, Pressable, Alert } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Icon } from 'native-base';
import Axios from 'axios';

const MedicalTrxListComponent = () => {
    const [medicalTransaction,setMedicalTransaction]  = useState([]);

    useEffect(() => {
        fetch('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/medical-transactions/all')
            .then((response) => response.json())
            .then((json) => setMedicalTransaction(json))
            .catch((error) => console.log(error))
    }, []);

    console.log(medicalTransaction);

    return (
        <ScrollView>
            <View style={styles.table}>
                {medicalTransaction &&
                    medicalTransaction.map((medicalTransaction, index) => (
                        // <View style={styles.container}>
                        //     <Text style={styles.row}>{contact.firstname + ' ' + contact.lastname}</Text>
                        //     <Text style={styles.row}>{contact.phone}</Text>
                        //     <Divider />
                        // </View>
                        <ListItem style={styles.container} key={medicalTransaction.medical_transaction_id} avatar>
                            <Left>
                                
                            </Left>
                            <Body>
                                <Text>{`${v.person} ${medicalTransaction.paymentDate}`}</Text>
                                <Text note>{`${medicalTransaction.amount}`}</Text>
                            </Body>
                            <Right style={{ justifyContent: 'center' }}>
                                <Icon name="heart" style={{ paddingRight: 5, fontSize: 30 }} />
                            </Right>
                        </ListItem>
                    ))}
                <Divider />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    table: {
        padding: 10,
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        textAlign: 'center'
    },
    contact: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black',
        fontFamily: 'monospace',
        fontSize: 15,
        justifyContent: 'center'
    },
    row: {
        padding: 10
    },
    listItem: {
        color: 'green'
    }
})

export default MedicalTrxListComponent;