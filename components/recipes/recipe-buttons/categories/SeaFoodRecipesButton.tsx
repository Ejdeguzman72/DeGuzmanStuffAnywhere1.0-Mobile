import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const SeaFoodRecipesButton = ({ navigation }) => {
    return (
        <Button color="black" title="Seafood" onPress={() => navigation.navigate('Seafood Recipes')} />
    )
}

export default SeaFoodRecipesButton;