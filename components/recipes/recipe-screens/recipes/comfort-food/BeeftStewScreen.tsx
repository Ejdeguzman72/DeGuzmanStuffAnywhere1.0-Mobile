import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function BeefStewScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View> 
          <Text>Beef Stew (Red Sauce)</Text>
          <Text>Ingredients</Text>
          <Text>Beef Chuck</Text>
          <Text>Tomato</Text>
          <Text>Carrots</Text>
          <Text>Celery</Text>
          <Text>Green Pepper</Text>
          <Text>Onion</Text>
        </View>
        <View style={styles.container}>
          <Text>Directions</Text>
          <Text>Chop onion</Text>
          <Text>Slice beef bits into small pieces</Text>
          <Text>Add beef</Text>
          <Text>Add nature's seasoning and allow beef to brown</Text>
          <Text>Chop tomato and place into pot</Text>
          <Text>Cut celery into small pieces and add to pot</Text>
          <Text>Cut pepper into small pieces and place into pot</Text>
          <Text>Cover and allow to simmer until carrots are soft</Text>
          <Text>Can eat as is or over rice{"\n"}</Text>
        </View>
        <View> 
          <Text>Beef Stew (Brown Sauce)</Text>
          <Text>Ingredients</Text>
          <Text>Beef Chuck</Text>
          <Text>Brown gravy mix</Text>
          <Text>Carrots</Text>
          <Text>Celery</Text>
          <Text>Green Pepper</Text>
          <Text>Onion</Text>
        </View>
        <View style={styles.container}>
          <Text>Directions</Text>
          <Text>Chop onion</Text>
          <Text>Slice beef bits into small pieces</Text>
          <Text>Add beef</Text>
          <Text>Add nature's seasoning and allow beef to brown</Text>
          <Text>Chop tomato and place into pot</Text>
          <Text>Cut celery into small pieces and add to pot</Text>
          <Text>Cut pepper into small pieces and place into pot</Text>
          <Text>Cover and allow to simmer until carrots are soft</Text>
          <Text>Can eat as is or over rice{"\n"}</Text>
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

export default BeefStewScreen;