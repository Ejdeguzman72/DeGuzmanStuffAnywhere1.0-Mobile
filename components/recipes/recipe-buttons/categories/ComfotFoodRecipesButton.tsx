import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const ComfortFoodRecipesButton = ({ navigation }) => {
    return (
        <Button color="black" title="Comfort Food" onPress={() => navigation.navigate('Comfort Food Recipes')} />
    )
}

export default ComfortFoodRecipesButton;