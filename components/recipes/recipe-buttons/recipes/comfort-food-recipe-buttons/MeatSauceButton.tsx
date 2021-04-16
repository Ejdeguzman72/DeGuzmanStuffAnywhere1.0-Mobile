import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const MeatSauceButton = ({ navigation }) => {
    return (
        <View style={styles.recipes} >
            <Button color="black" title="Meat Sauce" onPress={() => navigation.navigate('Meat Sauce')} />
        </View >
    )
}

const styles = StyleSheet.create({
    recipes: {
        padding: 10
    }
});

export default MeatSauceButton;