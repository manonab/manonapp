import React, { useState, useRef, useCallback } from 'react';
import { View, Text, ImageBackground, StyleSheet,Linking, Image, TouchableOpacity, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { AntDesign, Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const gitHubUrl = "https://github.com/manonab";
const linkedIn = "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFuIJmfLkAABQAAAX6hpKzYrqzEWw13Olp4ThhCHwVpsdTVlBlYsMMTqo4L1nFD-BGgtCRO-kc4pv5YaLeysR9h1CSQiKqO4AzmO-Fpj-7zClcLjARCiBcV6nDJ8D5-nGp2psk=&originalReferer=http://localhost:3000/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmanon-abel-coindoz-b6449211a%2F";
const number = "+33 620235734";
const email = "abelcoindozm@gmail.com";

const CustomDrawer = (props) => {
    const [loaded] = useFonts({
        MontserratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
        MontserratMedium: require('../../assets/fonts/Montserrat-Medium.ttf'),
        MontserratLight: require('../../assets/fonts/Montserrat-Light.ttf'),
        MontserratLightItalic: require('../../assets/fonts/Montserrat-LightItalic.ttf'),
    });

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if(isSupported){
            await Linking.openURL(url);
        }else{
            Alert('Do not know this url')
        }
    };

    if (!loaded) {
        return (
            <AppLoading />
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#006396' }}>
                <ImageBackground source={{ uri: 'https://i.imgur.com/wCG2csZ.png' }} style={styles.topDrawer}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo} />
                    <Text style={{ color: '#fff', textAlign: "center", marginTop: 10, fontFamily: "MontserratLight" }}>Manon Abel-Coindoz</Text>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.icons}>
                <TouchableOpacity onPress={() => openUrl(gitHubUrl)}>
                    <AntDesign name="github" size={26} color="#006396" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openUrl(linkedIn)}>
                    <Entypo name="linkedin" size={26} color="#006396" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Linking.openURL(`mailto:abelcoindozm@gmail.com`)
                }}>
                    <Ionicons name="mail" size={26} color="#006396" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Linking.openURL(`tel:${number}`)
                }}>
                    <FontAwesome name="phone" size={26} color="#006396" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topDrawer: {
        padding: 60,
        width: 300,
        height: 250,
        marginTop: -47,
        alignSelf: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        marginTop: 10,
        alignSelf: 'center',
        zIndex: -1
    },
    icons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-evenly',
        marginBottom: 20,
    },
    groupFlags: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    flagsIcons: {},
})
export default CustomDrawer;