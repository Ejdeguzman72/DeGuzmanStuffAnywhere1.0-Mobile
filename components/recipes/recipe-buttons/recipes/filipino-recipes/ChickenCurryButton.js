import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const ChickenCurryButton = ({ navigation }) => {
    return (
        <View style={styles.recipes} >
            <Button color="black" title="Chicken Curry" onPress={() => navigation.navigate('Chicken Curry')} />
        </View >
    )
}

const styles = StyleSheet.create({
    recipes: {
        padding: 10
    }
});

export default ChickenCurryButton;