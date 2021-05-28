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
          <Card style={styles.boxWithShadow}>
            <Card.Title title="Books" subtitle="Family Book Recommendations" />
            <Card.Content>
            <Button
            color='rgb(40,44,53)' title="Books" onPress={() => navigation.navigate('Books')}
          />
            </Card.Content>
            <Card.Cover source={require('../../assets/home-screen-pics/books.jpeg')} style={styles.cardCoverImg}/>

          </Card>
        </View>

        <Divider />

        <View style={styles.card}>
          <Card style={styles.boxWithShadow}>
            <Card.Title title="Contacts" subtitle="Family Contact Information" />
            <Card.Content>
            <Button
            color='rgb(40,44,53)' title="Contacts" onPress={() => navigation.navigate('Contact Info')}
          />
            </Card.Content>
            <Card.Cover source={require('../../assets/home-screen-pics/landline.jpeg')} style={styles.cardCoverImg}/>

          </Card>
        </View>

        <Divider />

        <View style={styles.card}>
          <Card style={styles.boxWithShadow}>
            <Card.Title title="Finance" subtitle="Family Finances" />
            <Card.Content>
            <Button
            color='rgb(40,44,53)' title="Finance Information" onPress={() => navigation.navigate('Finance')}
          />
            </Card.Content>
            <Card.Cover source={require('../../assets/home-screen-pics/finance.jpg')} style={styles.cardCoverImg} />

          </Card>
        </View>

        <Divider />

        <View style={styles.card}>
          <Card style={styles.boxWithShadow}>
            <Card.Title title="Music" subtitle="Music Recommendations" />
            <Card.Content>
            <Button
            color='rgb(40,44,53)' title="Music" onPress={() => navigation.navigate('Music')}
          />
            </Card.Content>
            <Card.Cover source={require('../../assets/home-screen-pics/music.jpg')} style={styles.cardCoverImg} />

          </Card>
        </View>

        <Divider />

        <View style={styles.card}>
          <Card style={styles.boxWithShadow}>
            <Card.Title title="Recipes" subtitle="Family Recipes" />
            <Card.Content>
            <Button
            color='rgb(40,44,53)' title="Recipes" onPress={() => navigation.navigate('Recipes')}
          />
            </Card.Content>
            <Card.Cover source={require('../../assets/home-screen-pics/kitchen.jpg')} style={styles.cardCoverImg} />

          </Card>
        </View>

        <Divider />

        <View style={styles.card}>
          <Card style={styles.boxWithShadow}>
            <Card.Title title="Restaurants" subtitle="Family Restaurant Recommendations" />
            <Card.Content>
            <Button
            color='rgb(40,44,53)' title="Restaurants" onPress={() => navigation.navigate('Restaurants')}
          />
            </Card.Content>
            <Card.Cover source={require('../../assets/home-screen-pics/images.jpeg')} style={styles.cardCoverImg} />

          </Card>
        </View>

        <Divider />

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
    resizeMode: "cover"
  },
  text: {
    color: "black"
  },
  card: {
    padding: 20
  },
  boxWithShadow: {
    borderColor: 'black',
    borderWidth: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
},
  cardCoverImg: {
    margin: 10
  }
});