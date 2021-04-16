import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const FilipinoRecipesButton = ({ navigation }) => {
    return (
        <Button color="black" title="Filipino" onPress={() => navigation.navigate('Filipino Recipes')} />
    )
}

export default FilipinoRecipesButton;