import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const CreamyMushroomPastaButton = ({ navigation }) => {
    return (
        <View style={styles.recipes} >
            <Button color="black" title="Creamy Mushroom Pasta" onPress={() => navigation.navigate('Creamy Mushroom Pasta')} />
        </View >
    )
}

const styles = StyleSheet.create({
    recipes: {
        padding: 10
    }
});

export default CreamyMushroomPastaButton;