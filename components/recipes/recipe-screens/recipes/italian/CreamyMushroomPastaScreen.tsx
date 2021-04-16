import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function CreamyMushroomPastaScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.recipe}> 
            <Text>Ingredients</Text>
            <Text>4 teaspoons of extra-virgin olive oil</Text>
            <Text>1 lb of mixed mushrooms</Text>
            <Text>Salt</Text>
            <Text>2 medium shallots, finely chooped (garlic/onion substitute)</Text>
            <Text>1lb of spaghetti or bucatini</Text>
            <Text>1/3 cup of finely chopped parsley</Text>
            <Text>Zest and juice 1/2 lemon</Text>
            <Text>2 tablespoons unsalted butter, cut into pieces</Text>
            <Text>1/2 oz Parmesan, finely grated [about 1/2cup] plus more for serving</Text>
            <Text>Freshly ground black pepper{'\n'}</Text>
            <View style={styles.container}>
              <Text>Directions</Text>
              <Text>Heat 2 Tbsp. oil in a large pot over medium-high</Text>
              <Text>Cook half of mushrooms in a single layer, ubdisturbed, until edges are brown and crispy</Text>
              <Text>Give mushrooms a toss and continue to cool, tossing occassionally, until all sides are brown and crisp, about 5 minutes more</Text>
              <Text>Using a slotted spoon, transfer mushrooms to a plate, season with salt. Repeat with remaining 2 Tbsp oil and mushrooms and more salt</Text>
              <Text>Reduce heat to medium-low and return all of the mushrooms to the pot. Add shallots and cool, stirring often, until shallots are translucent and softened, about 2 minutes</Text>
              <Text>Cook pasta in a pot of boiling and salted water.</Text>
              <Text>Use tongs to transfer pasta to pot with mushrooms and add cream and 1 cup of pasta cooked water. Increase heat to medium and bring to a simmer</Text>
              <Text>Remove from heat and add lemon zest,lemon juice, parsley, butter, parmesan, and lots of pepper{'\n'}</Text>
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

export default CreamyMushroomPastaScreen;