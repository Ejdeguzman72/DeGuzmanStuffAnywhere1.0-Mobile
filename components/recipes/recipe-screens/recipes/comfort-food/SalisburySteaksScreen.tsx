import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function SalisburySteaksScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View> 
         <Text>Ingredients</Text>
         <Text>Ground Beef</Text>
         <Text>Mushrooms</Text>
         <Text>Onion</Text>
         <Text>Brown Gravy Mix</Text>
         <Text>Nature's Seasoning</Text>
        </View>
        <View style={styles.container}>
          <Text>Directions</Text>
          <Text>In mixing bowl, mix ground beef and nature's seasoning</Text>
          <Text>Make meat patties</Text>
          <Text>Place meat patties in frypan and brown sides</Text>
          <Text>After browning first side, place choppedonions into pan while browning the second side</Text>
          <Text>Slice mushrooms</Text>
          <Text>Place brown gravy mix in cup, add water and mix</Text>
          <Text>Place mushrooms on top</Text>
          <Text>Add some nature's seasoning and cover</Text>
          <Text>Allow to simmer</Text>
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

export default SalisburySteaksScreen;