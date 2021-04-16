import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} >
      <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
        {/* <Button
          title="Login" onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Register" onPress={() => navigation.navigate('Register')}
        /> */}
        <View style={styles.card}>
          <Card>
            <Card.Title title="Books" subtitle="Family Book Recommendations" />
            <Card.Content>
            <Button
            title="Books" onPress={() => navigation.navigate('Books')}
          />
            </Card.Content>
            <Card.Cover source={require('../../assets/home-screen-pics/books.jpeg')} />

          </Card>
        </View>

        <Divider />

        <View style={styles.card}>
          <Card>
            <Card.Title title="Contacts" subtitle="Family Contact Information" />
            <Card.Content>
            <Button
            title="Contacts" onPress={() => navigation.navigate('Contact Info')}
          />
            </Card.Content>
            <Card.Cover source={require('../../assets/home-screen-pics/landline.jpeg')} />

          </Card>
        </View>

        <Divider />

        <View style={styles.card}>
          <Card>
            <Card.Title title="Recipes" subtitle="Family Recipes" />
            <Card.Content>
            <Button
            title="Recipes" onPress={() => navigation.navigate('Recipes')}
          />
            </Card.Content>
            <Card.Cover source={require('../../assets/home-screen-pics/kitchen.jpg')} />

          </Card>
        </View>

        <Divider />

        <View style={styles.card}>
          <Card>
            <Card.Title title="Restaurants" subtitle="Family Restaurant Recommendations" />
            <Card.Content>
            <Button
            title="Restaurants" onPress={() => navigation.navigate('Restaurants')}
          />
            </Card.Content>
            <Card.Cover source={require('../../assets/home-screen-pics/images.jpeg')} />

          </Card>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    // alignItems: 'center',
    //justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    color: "black"
  },
  card: {
    padding: 20
  }
});