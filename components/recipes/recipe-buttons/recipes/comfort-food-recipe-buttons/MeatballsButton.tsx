import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const MeatballsButton = ({ navigation }) => {
    return (
        <View style={styles.recipes} >
            <Button color="black" title="Meatballs" onPress={() => navigation.navigate('Meatballs')} />
        </View >
    )
}

const styles = StyleSheet.create({
    recipes: {
        padding: 10
    }
});

export default MeatballsButton;