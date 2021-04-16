import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const ChiliButton = ({ navigation }) => {
    return (
        <View style={styles.recipes} >
            <Button color="black" title="Chili" onPress={() => navigation.navigate('Chili')} />
        </View >
    )
}

const styles = StyleSheet.create({
    recipes: {
        padding: 10
    }
});

export default ChiliButton;