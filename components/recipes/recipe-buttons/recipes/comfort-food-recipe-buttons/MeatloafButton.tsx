import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const MeatloafButton = ({ navigation }) => {
    return (
        <View style={styles.recipes} >
            <Button color="black" title="Meatloaf" onPress={() => navigation.navigate('Meatloaf')} />
        </View >
    )
}

const styles = StyleSheet.create({
    recipes: {
        padding: 10
    }
});

export default MeatloafButton;