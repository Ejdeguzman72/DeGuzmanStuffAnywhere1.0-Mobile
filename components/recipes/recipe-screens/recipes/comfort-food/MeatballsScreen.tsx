import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function MeatballsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.recipe}> 
          <Text>Ingredients</Text>
          <Text>Large package of ground beef</Text>
          <Text>Medium Onion</Text>
          <Text>2 eggs</Text>
          <Text>4 slices of bread</Text>
          <Text>nature's seasoning</Text>
        </View>
        <View style={styles.container}>
          <Text>Directions</Text>
          <Text>Chop Onion</Text>
          <Text>Mix together the ground beef, eggs, and nature's seasoning</Text>
          <Text>Mix in onion</Text>
          <Text>Cut the breads into small cubes</Text>
          <Text>Mix in the bread</Text>
          <Text>Make meatballs</Text>
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
    padding: 10
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

export default MeatballsScreen;