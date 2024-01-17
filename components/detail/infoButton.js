import React from "react"
import { View, Button } from "react-native"

export const InfoButtonComponent = () => {
    return (
        <View style={{flex: 2, marginTop: 500}}>    
            <Button 
              title="Zur Infoseite " 
              onPress={() => navigation.navigate('Detail')} 
              >
            </Button>
        </View>
    )
}