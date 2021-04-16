import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function BeefaroniScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View> 
          <View style={styles.recipe} >
            <Text>Ingredients</Text>
            <Text>Marinara Sauce</Text>
            <Text>Meat</Text>
            <Text>Macaroni</Text>
          </View>
          <View style={styles.container}>
            <Text>Directions</Text>
            <Text>make the marinara sauce and add the meat as described above. Let it simmer while you cook the macaroni. After macaroni is cooked, drain and rinse with cold water. Put the macaroni in a 9x12 pan. Pour the meat sauce mixture over the macaroni, sprinkle with parmesan cheese and then place slices of mozzarella cheese on top to cover the mix. Bake at 350 until the cheese is melted.</Text>
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

export default BeefaroniScreen;