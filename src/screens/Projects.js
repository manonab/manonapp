import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from 'react-native-gesture-handler';

export default function Project({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <LinearGradient colors={['#34a0a4', '#168aad', '#184e77']}>
                <View style={{ marginBottom: 130, marginTop: 50}}>
                    <Text style={styles.title}>Sites web</Text>
                    <View style={styles.allCircle}>
                        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('Lanvest')}>
                            <Image source={require('../../assets/lanvest.png')} style={styles.imgLanvest} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('Geneaka')}>
                            <Image source={require('../../assets/geneakaLogo.png')} style={styles.imgLanvest}/>
                        </TouchableOpacity>
                    <Text style={styles.title}>Applications</Text>
                        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('MySeen')}>
                            <Image source={require('../../assets/mySeenCapture.png')} style={styles.imgLanvest}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('BunnyFinder')}>
                        <Image source={require('../../assets/BunnyFinder.png')} style={styles.imgLanvest}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
            </ScrollView>  
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 30,
        textTransform:"uppercase",
        color: "#fff",
        fontFamily: 'Montserrat_500Medium',
        marginVertical: 30
    },
    allCircle: {
        width: "100%",
        flexDirection: "column",
        justifyContent:"space-between"
    },
    appTitles: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 15,
    },
    smallText: {
        color: "#fff",
        fontSize: 18,
        fontFamily: 'Montserrat_200ExtraLight',
    },
    img: {
        resizeMode:"contain",
        width: "65%",
        alignSelf:"center"
    },
    imgMySeen:{
        resizeMode:"contain",
        width: "65%",
        alignSelf:"center"

    },
    imgLanvest:{
        width:"100%",
        alignSelf:"center",
        resizeMode:"contain",
        height: 150
    }
});
