import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function ChiliScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View> 
          <View>
            <Text>Chili</Text>
            <Text>Ingredients</Text>
            <Text>Garlic</Text>
            <Text>Onion</Text>
            <Text>Ground Beef</Text>
            <Text>Nature's Seasoning</Text>
            <Text>Chili Powder</Text>
            <Text>Red Pepper Flakes</Text>
            <Text>Crushed Cayenne Pepper</Text>
            <Text>Can of Crushed Tomatoes</Text>
            <Text>2-3 cans of dark red kidney beans{'\n'}</Text>
          </View>
          <View style={styles.container}>
            <Text>Mince garlic</Text>
            <Text>Chop onion</Text>
            <Text>In pot, place a little of oil and saute garlic and onion</Text>
            <Text>Put in ground beef, and allow to brown. Mix frequently to break up the champs of the ground beef</Text>
            <Text>Drain off some of the liquid</Text>
            <Text>Add in nature's seasoning, chili powder, red pepper flakes, and crushed cayenne pepper to taste.</Text>
            <Text>Drain the liquid from the cans of kidney beans and then add beans only to the pot</Text>
            <Text>Stir in the crushed tomatoes</Text>
            <Text>3/4 fill the crushed tomatoes can with water and swirl. Add to pot and stir to mix</Text>
            <Text>Allow to simmer. Can eat as is or served with rice</Text>
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
    padding: 10,
    textAlign: 'center'
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

export default ChiliScreen;