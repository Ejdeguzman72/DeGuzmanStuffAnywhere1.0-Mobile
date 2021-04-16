import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const AsianRecipesButton = ({ navigation }) => {
    return (
        <View stlye={styles.button}>
            <Button
                //style={styles.button} 
                color="black"
                title="Asian"
                onPress={() => navigation.navigate('Asian Recipes')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 100
    }
})


export default AsianRecipesButton;