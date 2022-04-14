import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';

const FinanceScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container} >
                <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                    {/* <Button
          title="Login" onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Register" onPress={() => navigation.navigate('Register')}
        /> */}
                    <View style={styles.card}>
                        <Card style={styles.boxWithShadow}>
                            <Card.Title title="Auto Finance" subtitle="Automotive Finance Information" />
                            <Card.Content>
                                <Button
                                    color='black' title="Auto Finance" onPress={() => navigation.navigate('Auto Finance')}
                                />
                            </Card.Content>
                            <Card.Cover source={require('../../assets/finance-pics/auto.jpg')} style={styles.cardCoverImg} />

                        </Card>
                    </View>

                    <Divider />

                    <View style={styles.card}>
                        <Card style={styles.boxWithShadow}>
                            <Card.Title title="General Finance" subtitle="General Finance Information" />
                            <Card.Content>
                                <Button
                                    color='black' title="General Finance" onPress={() => navigation.navigate('General Finance')}
                                />
                            </Card.Content>
                            <Card.Cover source={require('../../assets/finance-pics/general-finance.jpg')} style={styles.cardCoverImg} />

                        </Card>
                    </View>

                    <Divider />

                    <View style={styles.card}>
                        <Card style={styles.boxWithShadow}>
                            <Card.Title title="Medical Finance" subtitle="Medical Finance Information" />
                            <Card.Content>
                                <Button
                                    color='black' title="Medical Finance" onPress={() => navigation.navigate('Medical Finance')}
                                />
                            </Card.Content>
                            <Card.Cover source={require('../../assets/finance-pics/medical.jpg')} style={styles.cardCoverImg} />

                        </Card>
                    </View>
                </ImageBackground>
            </ScrollView>
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
    },
    cardCoverImg: {
        margin: 10
    },
    boxWithShadow: {
        borderColor: 'black',
        borderWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
});

export default FinanceScreen;