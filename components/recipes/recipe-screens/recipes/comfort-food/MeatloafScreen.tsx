import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function MeatloafScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View>
          <Text>Ingredients</Text>
          <Text>Large package of ground beef</Text>
          <Text>Large Onion</Text>
          <Text>Large green pepper</Text>
          <Text>2 eggs</Text>
          <Text>Oatmeat</Text>
          <Text>Nature's seasoning</Text>
          <Text>Can of crushed tomatoes</Text>
        </View>
        <View style={styles.container}>
          <Text>Directions</Text>
          <Text>Chop onion</Text>
          <Text>Chop green pepper</Text>
          <Text>In mixing bowl place ground beef, half of the chopped onion, half of the chopped green pepper, 2 eggs, nature’s seasoning and mix well</Text>
          <Text>Divide mixture in half and form loaf. Repeat with other half</Text>
          <Text>Place in fry pan and brown all sides</Text>
          <Text>When browning last side, add onions to pan to cook</Text>
          <Text>Add green pepper and allow to cook for about a minute or two.</Text>
          <Text>Pour crushed tomatoes over loaves</Text>
          <Text>3/4 fill empty can with water, swirl and pour intofry pan</Text>
          <Text>Let simmer for about 45 minutes</Text>
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

export default MeatloafScreen;