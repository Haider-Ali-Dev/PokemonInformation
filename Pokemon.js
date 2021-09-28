import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Image, ScrollView} from 'react-native';
import React from 'react'

const Pokemon = ({ pokemon, location, item }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Image style={styles.image} source={{uri: pokemon.sprites.front_shiny}}/>
            <Text style={styles.main}>Information</Text>
            <Text style={styles.text}>Name: {pokemon.name.toUpperCase()}</Text>
            <Text style={styles.text}>ID: {pokemon.id}</Text>
            <Text  style={styles.text}>Base Experince: {pokemon.base_experience}</Text>
            <Text  style={styles.text}>Height: {pokemon.height}</Text>
            <Text style={styles.main}>Abilities</Text>
            <Text style={styles.text}>Abilitiy: {pokemon ? pokemon.abilities[0].ability.name : null}</Text>

            <Text style={styles.main}>Stats</Text>
            <Text style={styles.text}>Base Stat: {pokemon.stats[0].base_stat}</Text>
            <Text style={styles.text}>Effort: {pokemon.stats[0].effort}</Text>
            <Text style={styles.text}>Name: {pokemon.stats[0].stat.name}</Text> 
            <Text style={styles.main}>Types</Text>
            <Text style={styles.text}>Type: {pokemon.types[0].type.name}</Text>

            <Text style={styles.main}>Location</Text>
            <Text style={styles.text}>Location Name: {location ? location.name : "None"}</Text>
            <Text style={styles.text}>Region: {location ? location.region.name: "None"}</Text>

            <Text style={styles.main}>Items</Text>
            <Text style={styles.text}>Item Name: {item ? item.name : null}</Text>
            <Text style={styles.text}>Fling Power: {item ? item.fling_power : <Text>None</Text>}</Text>
            <Text style={styles.text}>Item Cost: {item ? item.cost : null}</Text>
            <Text style={styles.text}>Effect: {item ? item.effect_entries[0].effect : null}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width: 300,
        margin:10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#ffff00",
        padding: 30,
        backgroundColor: "#ADD8E6",
        height: 500
    },
    image: {
        width: 200,
        height: 100,
        marginLeft: 20
    },
    text:{
        fontSize: 17,
        fontWeight: "800",//
    },
    main: {
        textAlign: "center",
        fontSize: 22,
        marginBottom: 10,
        textDecorationLine: "underline"
    }
})

export default Pokemon