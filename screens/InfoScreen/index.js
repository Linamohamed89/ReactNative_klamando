import axios from 'axios'; 
import {React, useState, useEffect} from 'react';
import {StyleSheet, Text, Image, View, Pressable, Button} from 'react-native';

import {WetterInfo} from '../../components/temperatur/WetterInfo'
import {Wetter} from '../../components/wetter/wetter'


export const InfoScreen = ({navigation}) => {
  
  const wetterDatenUrl = 'https://zw-server.de/wetter.php';
  const [isWetter, setWetter] = useState(" ");
  const [count, setCount] = useState(0);

  useEffect( () => {
    async function load() {

        try {
            const response = await axios(wetterDatenUrl);
            console.log(response)
            const wetter = response.data.wetterdaten;
            console.log(wetter[3].temperatur)

            setWetter(wetter)

        } catch (error) {
            console.log(error.response);
        }
    }
    load()
}, [])




  return (
     <View style={styles.container}>
      <Text> Infoseite </Text>
      
      <View style={{flexDirection: "row", columnGap: 200, marginBottom: 10}}>
        <Button 
          onPress={() => {
            if(count <= isWetter.length -1)
            setCount(count - 1)
          }}
          title='letzter Ort'
          disabled={count == 0}
        />
        <Text> Temperatur: <WetterInfo value={isWetter[count].temperatur}/> </Text>
        <Text> Ortschaft: {count} </Text>
        <Button 
          onPress={() => {
            if(count < isWetter.length - 1)
            setCount(count + 1)  
          }}
          title="nächster Ort"
          disabled={isWetter.length - 1 <= count}
        />
      </View>

      <View style={{flexDirection: "row", columnGap: 200, marginBottom: 10, justifyContent: "center", alignContent: "center"}}>
        <WetterInfo value={isWetter[count].temperatur} info={"Temperatur"}/>
        <WetterInfo value={isWetter[count].zustand} info={"Zustand"}/>
        <WetterInfo value={isWetter[count].stadt} info={"Stadt / Ort"}/>
      </View>

      <View>
        <Image source={require('../../assets/landschaft.jpg')} style={{width: 400, height: 400}}></Image>
        <Text style={styles.text}>Die Details abrufen über das Menü</Text>
        <Pressable onPress={() => navigation.navigate('Detail')} ><Text>Go Back"</Text></Pressable>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    marginTop: 25,
  }
});