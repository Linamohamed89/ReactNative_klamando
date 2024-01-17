import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const WetterInfo = ({value, info}) => {
    return(
        <View>
            <Text>{info} </Text>
            <Text>{value}</Text>
        </View>
    );
}


    
//Alter Code
    //useEffect(() => {
    //    async function load() {
    //        try {
    //            let response = await fetch('https://zw-server.de/wetter.php');
    //            let result = await response.json();
    //            console.log(result.temperatur);    
    //            let temp = result.temperatur;
    //            //setTemp(temp);
    //            //let fact = result.fact;
    //            console.log(temp);
    //
    //        } catch (e){
    //            console.log('Ein Fehler ist aufgetreten' + e);
    //        }
    //    }
    //
    //    load();
    //    
    //  }, [count]);