import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Button} from 'react-native';
import { DetailComponent } from '../../components/detail/details'

export const DetailScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={{fontSize: 40}}>
          Verschiedene Anziehsachen | DetailsScreen
        </Text>

        <DetailComponent />
        <DetailComponent />

        <Button 
          title="Go to Info..."
          onPress={() => navigation.navigate("Home")}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 24,
  },
});