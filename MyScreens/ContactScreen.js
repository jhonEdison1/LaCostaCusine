import React, { useContext, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image, Button
} from 'react-native';
import { WebView } from "react-native-webview";

import s from './style';
import { Linking } from 'react-native'



import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { HeaderBackButton } from '@react-navigation/stack';





const latitude = "10";
const longitude = "20";
const label = "1851 S State Rd 7, Fort Lauderdale, FL 33317, EE. UU.";

const url = Platform.select({
  ios: "maps:" + latitude + "," + longitude + "?q=" + label ,
  android: "geo:" + latitude + "," + longitude + "?q=" + label
});



const Contact = () => {
  const navigation = useNavigation();
  return (
    <>
    
    <SafeAreaView  style={styles.container}>
      <ScrollView>
    <LinearGradient colors={['#017297', '#0c80a6', '#1f98bf']} style={styles.linearGradient}>
      
    <HeaderBackButton tintColor={'white'} 
       onPress={() => navigation.goBack()} style={{marginLeft: -10}} />

   <View style={s.userContainer2 }>
             <Image style={s.userImagen, {width: 380 , height:250}} source={require('./logo.png')} />

   </View>
     <View style={{alignItems: 'center', marginTop: 0 }}>
       <Text style={{ fontSize: 40, color: '#FFF', fontWeight: 'bold' }}>Contact Us</Text>
       <Text onPress={() => { Linking.openURL('tel:9546260714'); }}
         style={{ fontSize: 30, color: '#FFF', marginTop: 10, fontWeight: 'bold' }}>(954) 626 - 0714
     </Text>
      




       <TouchableOpacity onPress={() => Linking.openURL('mailto:lacostarestaurantfl@gmail.com')}>
         <Text style={{ fontSize: 20, color: '#FFF', marginTop: 10, fontWeight: 'bold' }} >lacostarestaurantfl@gmail.com</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => Linking.canOpenURL(url).then(supported => {
         if (supported) {
           return Linking.openURL(url);
         } else {
           const browser_url =
             "https://www.google.de/maps/@" +
             latitude +
             "," +
             longitude +
             "?q=" +
             label;
           return Linking.openURL(browser_url);
         }
       })}>
         <Text style={{ textAlign:'center' , fontSize: 20, color: '#FFF', marginTop: 10, fontWeight: 'bold' }} >1851 S State Road 7 Fort Lauderdale, Florida</Text>

         </TouchableOpacity>
         


     </View>

       
        
    </LinearGradient>
    </ScrollView>
    </SafeAreaView>
   
    </>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1f98bf'
  },

  titulo: {

    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 70 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    paddingBottom: 50
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

});
export default Contact;