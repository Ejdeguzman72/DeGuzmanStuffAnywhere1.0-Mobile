import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const BlackEyedPeasRecipesButton = ({ navigation }) => {
    return (
        <Button color="black" title="Black Eyed Peas" onPress={() => navigation.navigate('Black Eyed Peas')} />
    )
}

export default BlackEyedPeasRecipesButton;