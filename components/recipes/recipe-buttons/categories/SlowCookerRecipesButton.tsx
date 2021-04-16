import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const SlowCookerRecipesButton = ({ navigation }) => {
    return (
        <Button color="black" title="Slow Cooker" onPress={() => navigation.navigate('Slow Cooker Recipes')} />
    )
}

export default SlowCookerRecipesButton;