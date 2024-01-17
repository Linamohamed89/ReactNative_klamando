import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CreditComment = () => {
    return (
        <View style={{marginLeft: 12, marginRight: 12}}>
            <Text style={styles.text}>Willkomen auf der Wetter-App Klamando</Text> 
            <Text style={styles.text}>created by Lina, Ziko, Günbay</Text>
        </View>
    )
}

const styles = StyleSheet.create({
text: {
    flex: 2,
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    
  },
})