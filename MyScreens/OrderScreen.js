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
return (
    <SafeAreaView style={styles.container}>
      
  
                 
        <WebView
        style={{marginTop:6}}
        onLoad={() => { darkHandler(); }}
        scrollEnabled={true}
        source={{ uri: "https://apps.wixrestaurants.com/?type=wixorders.client.mobile.standalone&pageId=sc4q6&compId=TPASection_ij018utk&viewerCompId=TPASection_ij018utk&siteRevision=334&viewMode=site&deviceType=mobile&locale=en&tz=America%2FBogota&width=280&height=269&instance=j-Od1euo62ZjTL4jRPmim-7GugfhvZ5CkSmjq9SopdE.eyJpbnN0YW5jZUlkIjoiOWYwNDc2NTctYmQ2OS00NGJjLWIxODMtYmNiZTg0Y2Y3ZWVhIiwiYXBwRGVmSWQiOiIxM2U4ZDAzNi01NTE2LTYxMDQtYjQ1Ni1jODQ2NmRiMzk1NDIiLCJtZXRhU2l0ZUlkIjoiNGJjMjkzMGYtNDU5Mi00ODZmLWE5ODEtYmY3YzY3ZDliODNiIiwic2lnbkRhdGUiOiIyMDIxLTAzLTA5VDE1OjQwOjQ5LjUwOFoiLCJ2ZW5kb3JQcm9kdWN0SWQiOiJyZXN0X3BybyIsImRlbW9Nb2RlIjpmYWxzZSwib3JpZ2luSW5zdGFuY2VJZCI6ImIxNDZlYzVjLWIzNDktNDVlMS04YWMyLThmMTA4N2UwYTFhMCIsImFpZCI6ImQzODcwNGIzLWYwOTctNGI3Ni04ZmQ1LTk1ZmVhMjM2YjdiNCIsImJpVG9rZW4iOiJkNGM2ZTU1OC1mOGZiLTBjZDMtMTgwMi0wM2MyZTMxNmM2ZDEiLCJzaXRlT3duZXJJZCI6ImI2YjdkN2ZhLTQ0MDMtNDE2YS04YjViLTcyNWU3NTFjNGUxZSJ9&currency=USD&currentCurrency=USD&vsi=7081fa6e-dc9b-4590-96b5-59a54a1b326f&commonConfig=%7B%22brand%22%3A%22wix%22%2C%22bsi%22%3A%225cdcfc54-70ec-4e31-86dc-326936e25a50%7C2%22%2C%22BSI%22%3A%225cdcfc54-70ec-4e31-86dc-326936e25a50%7C2%22%7D&target=_top&section-url=https%3A%2F%2Fwww.lacostarestaurantlatincuisine.com%2Forder-online%2F&standAloneMode=1&pageId=null" }}
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