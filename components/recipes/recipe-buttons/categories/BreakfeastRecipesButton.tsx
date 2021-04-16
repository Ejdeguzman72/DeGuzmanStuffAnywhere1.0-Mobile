import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const BreakfeastRecipesButton = ({ navigation }) => {
    return (
        <Button color="black" title="Breakfeast" onPress={() => navigation.navigate('Breakfeast Recipes')} />
    )
}

export default BreakfeastRecipesButton;