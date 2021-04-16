import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const PulledPorkRecipesButton = ({ navigation }) => {
    return (
        <Button color="black" title="Pulled Pork" onPress={() => navigation.navigate('Pulled Pork Recipes')} />
    )
}

export default PulledPorkRecipesButton;