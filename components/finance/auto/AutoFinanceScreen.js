import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';
import AddAutoTransactionModalComponent from './AddAutoTransactionModalComponent';
import AutoListComponent from './AutoListComponent';

const AutoFinanceScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image} >
                <View>
                    <AddAutoTransactionModalComponent />
                </View>
                <View>
                   <AutoListComponent />
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        // alignItems: 'center',
        //justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    text: {
        color: "black"
    },
    card: {
        padding: 20
    }
});

export default AutoFinanceScreen;