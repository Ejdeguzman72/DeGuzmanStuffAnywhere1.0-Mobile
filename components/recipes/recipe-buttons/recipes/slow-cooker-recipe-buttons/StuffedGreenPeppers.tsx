import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const StuffedGreenPeppersRecipesButton = ({ navigation }) => {
    return (
        <Button color="black" title="Stuffed Green Peppers" onPress={() => navigation.navigate('Stuffed Green Peppers')} />
    )
}

export default StuffedGreenPeppersRecipesButton;