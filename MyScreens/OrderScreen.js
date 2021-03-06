import React, {  useContext, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  import { WebView } from "react-native-webview";

import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
const darkHandler = () => {
    setTimeout(() => StatusBar.setBarStyle("dark-content"), 3000)
  };


const Order = () => {
  const navigation = useNavigation();
  let jsCode = `var offset = document.getElementById("SITE_HEADER").offsetHeight;
  document.getElementById("SITE_HEADER").style.display = "none";
  document.getElementById("mediaisk4n9hu1").style.display = "none";
  document.getElementById("PAGES_CONTAINER").style.marginTop = "-"+offset+"px";
  document.getElementById("SITE_FOOTER").style.display = "none";`;
  
return (
    <SafeAreaView style={styles.container}>
      
  
                 
        <WebView
        style={{marginTop:6}}
        onLoad={() => { darkHandler(); }}
        scrollEnabled={true}
        source={{ uri: "https://www.lacostarestaurantlatincuisine.com/order-online" }}
        injectedJavaScript={jsCode}
        javaScriptEnabledAndroid={true}
        onNavigationStateChange={() => StatusBar.setBarStyle("dark-content")}
        />

            
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignSelf: 'stretch',
      backgroundColor: 'white',
    }
  });
export default Order;