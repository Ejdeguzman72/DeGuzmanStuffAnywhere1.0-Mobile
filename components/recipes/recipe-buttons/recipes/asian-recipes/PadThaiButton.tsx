import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const PadThaiRecipesButton = ({ navigation }) => {
    return (
        <Button color="black" title="Pad Thai" onPress={() => navigation.navigate('Pad Thai')} />
    )
}

export default PadThaiRecipesButton;