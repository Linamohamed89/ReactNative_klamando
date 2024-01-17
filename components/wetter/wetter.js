import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const wetterUrl = 'https://zw-server.de/wetter.php';

export const Wetter = () => {
    useEffect( () => {
        async function load() {
    
            try {
                const response = await axios(wetterUrl);
                console.log(response.data.wetterdaten)
                const wetter = response.data.wetterdaten;
                console.log(wetter[3].zustand)
                setWetter(wetter[3].zustand) 

            } catch (error) {
                console.log(error.response);
            }
        }
        load()
    },[] )

    const [wetter, setWetter] = useState(" ");
    const [count, setCount] = useState(0);
    //useEffect(() => {
    //    async function load() {
    //        try {
    //            let response = await fetch('https://zw-server.de/wetter.php');
    //            let result = await response.json();
    //            console.log(result.wetter);
    //            let wetter = result.wetter;
    //            setWetter(wetter);
    //
    //        } catch (e){
    //            console.log('Ein Fehler ist aufgetreten' + e);
    //        }
    //    }
    //
    //    load();
    //    
    //  }, [count]);

    return(
        <View>
            <Text>Wetter: </Text>
            <Text>{wetter}</Text>
        </View>
    );
}