import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import Pokemon from './Pokemon';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Image, TouchableOpacity, Pressable } from 'react-native';

export default function App() {

  const [inputPokimon, setPokimonInput] = useState("")
  const [pokemon, setPokemon] = useState(null)
  const [location, setLocation] = useState(null)
  const [item, setItem] = useState(null)
  const onPokimonPress = async () => {
    if (inputPokimon) {//
        try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokimon}/`)
        const jsonData = await data.json()
        setPokemon(jsonData)
      } catch (err) {
        return 
      }
      try {
        const locationData = await fetch(`https://pokeapi.co/api/v2/location/${inputPokimon}/`)
        const jsonLocation = await locationData.json()
        setLocation(jsonLocation)
      } catch(err) {
        return
      }

      try {
        const itemData = await fetch(`https://pokeapi.co/api/v2/item/${inputPokimon}/`)
        const itemJson = await itemData.json()
        setItem(itemJson)
      } catch {
        return
      }
    } 
    
    
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./poki.png')}/>
      <SafeAreaView>
        <View style={styles.buttonFlex}>
          <TouchableOpacity style={styles.button} onPress={onPokimonPress}>
            <Text style={styles.white}>Generate Stats</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clear} onPress={() => setPokemon(null)}>
            <Text style={styles.white}>Clear</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} placeholder={"Enter a Pokemon Name or ID"} value={inputPokimon} onChangeText={setPokimonInput}></TextInput>
        {pokemon ?<Pokemon pokemon={pokemon} location={location} item={item}/>: <Text style={styles.stats}>No Stats</Text>}
      </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff00",
    margin: 0,
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    width: 300,
    borderRadius: 20,
    padding: 5,
    marginRight: 30,
    marginLeft: 10
  },
  image: {
    margin: 20,
    width: 200,
    height: 100
  },
  button: {
    flexShrink: 1,
    borderWidth: 2,
    borderColor: "black",
    padding: 5,
    color: "white",
    marginBottom: 10,
    backgroundColor: 'blue',
    width: 120,
    borderRadius: 10,
    height: 30,
  },
  clear: {
    fontSize: 1000,
    width: 50,
    borderWidth: 2,
    borderColor: "black",
    height: 30,
    color: "white",
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 10,
    marginRight: 50,
  },
  buttonFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    position: 'relative',
    
  },
  stats: {
    width: 300,
    margin:10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ffff00",
    padding: 20,
    backgroundColor: "#ADD8E6",
    textAlign: "center",
},
white: {
  color: "white",
  padding: 1,
  fontWeight: "600"
}

});
