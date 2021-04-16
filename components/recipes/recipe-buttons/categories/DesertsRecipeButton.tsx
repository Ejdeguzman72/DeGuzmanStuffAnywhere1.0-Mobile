import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const DesertsRecipesButton = ({ navigation }) => {
    return (
        <Button color="black" title="Deserts" onPress={() => navigation.navigate('Desert Recipes')} />
    )
}

export default DesertsRecipesButton;