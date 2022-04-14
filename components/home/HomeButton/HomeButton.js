const HomeButton = ({ navigation }) => {
    return (
        <View stlye={styles.button}>
            <Button
                //style={styles.button} 
                color="black"
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}
export default HomeButton;