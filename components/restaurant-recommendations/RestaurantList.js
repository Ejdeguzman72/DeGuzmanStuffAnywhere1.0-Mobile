import React, { useState, useEffect } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native';
import CardFlip from 'react-native-card-flip';
import { FlatList } from 'react-native-gesture-handler';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Icon } from 'native-base';

const RestaurantList = (props) => {
    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        fetch('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/restaurants/all')
            .then((response) => response.json())
            .then((json) => setRestaurant(json))
            .catch((error) => console.log(error))
    }, []);

    

    console.log(restaurant);

    return (
        <ScrollView>
            {/* <AddContactModal /> */}
            <View style={styles.table}>
                {restaurant &&
                    restaurant.map((restaurant, index) => (
                        // <View style={styles.container}>
                        //     <Text style={styles.row}> {restaurant.name}  </Text>
                        //     <Divider />
                        // </View>
                        <ListItem style={styles.container} key={restaurant.restaurant_id} avatar>
                            <Left>
                                
                            </Left>
                            <Body>
                                <Text>{`${restaurant.name} `}</Text>
                                <Text note>{`${restaurant.address} ${restaurant.city}, ${restaurant.state} ${restaurant.zip}`}</Text>
                            </Body>
                            <Right style={{ justifyContent: 'center' }}>
                                <Icon name="heart" style={{ paddingRight: 5, fontSize: 30 }} />
                            </Right>
                        </ListItem>
                    ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        textAlign: 'center'
    },
    row: {
        padding: 10
    },
    table: {
        padding: 10,
        flex: 1
    },
    listItem: {
        color: 'green'
    }
})

export default RestaurantList;