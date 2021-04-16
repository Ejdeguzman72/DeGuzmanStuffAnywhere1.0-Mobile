import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function StuffedGreenPeppersScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.recipe}> 
          <Text>Ingredients</Text>
          <Text>Ground beef</Text>
          <Text>Green peppers</Text>
          <Text>Onion</Text>
          <Text>Cooked rice</Text>
          <Text>2 eggs</Text>
          <Text>Nature's seasoning</Text>
          <Text>Can of crushed tomatoes</Text>
        </View>
        <View style={styles.container}>
            <Text>Chop onion</Text>
            <Text>Cut tops off the green peppers</Text>
            <Text>Chop the tops of the green peppers</Text>
            <Text>In bowl, mix ground beef, 3/4 chopped onion, 3/4 choppedpepper, eggs and rice</Text>
            <Text>Add some nature's seasoning and mix well</Text>
            <Text>Fill green pepper bottoms with mixture. Do not pack tightly</Text>
            <Text>Place stuffed peppers into slow cooker</Text>
            <Text>Add remainder chopped onion and chopped pepper</Text>
            <Text>Add crsuhed tomato</Text>
            <Text>3/4 fill empty crushed tomato can with water and swirl to get the rest of the crushed tomato. Add to slow cooker</Text>
            <Text>Add nature's seasoning</Text>
            <Text>Set on low and allow to simmer 4-6 hours. On high simmer for about 3 hours</Text>
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

export default StuffedGreenPeppersScreen;