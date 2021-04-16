import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function BlackEyedPeasScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.recipe}> 
          <Text>Ingredients</Text>
          <Text>Smoked Ham Hocks</Text>
          <Text>Onions</Text>
          <Text>black Eyed Peas{'\n'}</Text>
        </View>
        <View style={styles.container}>
            <Text>Directions</Text>
            <Text>Rinse off the smoked ham hocks and place them in the slow cooker</Text>
            <Text>Cut onion into quarters and place in the slow cooker</Text>
            <Text>Rinse speas and place them into slow cooker</Text>
            <Text>add enough water to cover ham hocks</Text>
            <Text>add half teaspoon of salt</Text>
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

export default BlackEyedPeasScreen;