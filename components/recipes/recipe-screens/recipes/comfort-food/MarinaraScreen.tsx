import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function MarinaraScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.recipe}> 
          <View>
            <Text>Ingredients</Text>
            <Text>Garlic</Text>
            <Text>Small Onion</Text>
            <Text>Can of Crushed Tomatoes</Text>
            <Text>Nature's Seasoning</Text>
            <Text>Italian Seasoning</Text>
            <Text>Sugar</Text>
            <Text>Olive Oil{'\n'}</Text>
          </View>
          <View style={styles.container}>
            <Text>Directions</Text>
            <Text>Mince several cloves of garlic </Text>
            <Text>Chop small onion</Text>
            <Text>In saucepan, heat up oil</Text>
            <Text>Add garlic and stir for about 10 to 15 seconds</Text>
            <Text>Add onion and allow to cook for abouta minute or two</Text>
            <Text>Pour in crushed tomatoes, rinse can with about 3/4 withwater and pour water in</Text>
            <Text>Add about a teaspoon or so to the pot and mix</Text>
            <Text>Add about a tablespoon of the Italian seasoning and mix</Text>
            <Text>Add about 3 tablespoons of sugar</Text>
            <Text>Allow to simmer</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  container: {
    backgroundColor: '#FFF5EE',
    justifyContent: 'center',
  },
  containerText: {
    fontSize: 30,
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  recipe: {
    padding: 10
  }
})

export default MarinaraScreen;