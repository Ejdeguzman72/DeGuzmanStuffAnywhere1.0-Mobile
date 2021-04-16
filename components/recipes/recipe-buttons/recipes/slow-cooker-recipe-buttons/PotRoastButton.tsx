import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const PotRoastRecipesButton = ({ navigation }) => {
    return (
        <Button color="black" title="Pot Roast" onPress={() => navigation.navigate('Pot Roast')} />
    )
}

export default PotRoastRecipesButton;