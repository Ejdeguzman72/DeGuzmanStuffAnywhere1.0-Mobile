import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const HispanicRecipesButton = ({ navigation }) => {
    return (
        <Button color="black" title="Hispanic" onPress={() => navigation.navigate('Hispanic Recipes')} />
    )
}

export default HispanicRecipesButton;