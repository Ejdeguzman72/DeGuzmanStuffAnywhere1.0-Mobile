import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function PotRoastScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.recipe}> 
          <Text>Ingredients</Text>
          <Text>Garlic</Text>
          <Text>Beef chuck roast</Text>
          <Text>Nature's seasoning</Text>
          <Text>Carrots</Text>
          <Text>Potatoes</Text>
          <Text>Green pepper</Text>
          <Text>Onion</Text>
        </View>
        <View style={styles.container}>
            <Text>Mince garlic</Text>
            <Text>Make cuts into beef that do not go all the way through</Text>
            <Text>Place garlic and nature's seasoning into incisions</Text>
            <Text>Peel carrots and potatoes and slice into bite-sized pieces</Text>
            <Text>Slice green pepper into strips</Text>
            <Text>Quarter onion</Text>
            <Text>Set the meat into the slow cooker</Text>
            <Text>Cover with vegetables</Text>
            <Text>Add nature's seasoning</Text>
            <Text>Let simmer on low for about 6 hours</Text>
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

export default PotRoastScreen;