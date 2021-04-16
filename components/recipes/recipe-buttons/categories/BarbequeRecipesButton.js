import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const BarbequeRecipesButton = ({ navigation })  => {
    return (
        <Button color="black" title="Barbeque" onPress={() => navigation.navigate('Barbeque Recipes')} />
    )
}

export default BarbequeRecipesButton;