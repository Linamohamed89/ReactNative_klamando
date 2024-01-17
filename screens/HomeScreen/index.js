import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Button, Text, View, Image, Pressable } from 'react-native';
import { SearchComponent } from '../../components/detail/search';
import { CreditComment } from '../../components/detail/creativeCredit';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={require('../../assets/landschaft.jpg')} resizeMode="cover" style={styles.backroundimage} >
       
        <SearchComponent />
        
        <View style={{flex: 2, marginTop: 500}}>    
            <Button 
              title="Zur Infoseite " 
              onClick={() => navigation.navigate("Info")} 
              >
            </Button>
        </View>

        <CreditComment />
        

      </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backroundimage: {
    flex: 1,
    justifyContent: 'center',
    opacity: 1,
    
  },


});