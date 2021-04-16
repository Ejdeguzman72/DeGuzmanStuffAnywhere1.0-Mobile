import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const ItalianRecipesButton = ({ navigation }) => {
    return (
        <Button color="black" title="Italian" onPress={() => navigation.navigate('Italian Recipes')} />
    )
}

export default ItalianRecipesButton;