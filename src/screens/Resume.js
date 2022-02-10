import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ScrollView } from 'react-native-gesture-handler';

export default function Resume({ navigation }) {
    const [loaded] = useFonts({
        MontserratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
        MontserratMedium: require('../../assets/fonts/Montserrat-Medium.ttf'),
        MontserratLight: require('../../assets/fonts/Montserrat-Light.ttf'),
        MontserratLightItalic: require('../../assets/fonts/Montserrat-LightItalic.ttf'),
    });

    if (!loaded) {
        return (
            <AppLoading />
        )
    }
    return (
        <LinearGradient colors={['#34a0a4', '#168aad', '#184e77']}>
            <SafeAreaView>
                <ScrollView>
                    <Text style={styles.bigTitle}>Experiences</Text>
                    <View>
                        <Text style={styles.mediumTitle}>Lanvest</Text>
                        <View style={styles.groupDates}>
                            <Text style={styles.dates}>Mai.2021- Décembre.2021 en</Text>
                            <Text style={styles.country}>France</Text>
                        </View>
                        <Text style={styles.text}>Création d'une application de management en interne avec <Text style={{ fontFamily: 'MontserratBold' }}>React-Native, Node.js, MongoDB, Express.js</Text>.</Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MySeen')}>
                            <Text style={styles.project}>Voir la fiche </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.mediumTitle}>Focus Games</Text>
                        <View style={styles.groupDates}>
                            <Text style={styles.dates}>Oct.2020 - Avril.2021 à</Text>
                            <Text style={styles.country}>Glasgow</Text>
                        </View>
                        <Text style={styles.text}>Création d'un projet de marketing en interne avec <Text style={{ fontFamily: 'MontserratBold' }}>PHP, JavaScript, MySQL</Text>.</Text>
                    </View>
                    <Text style={styles.bigTitle}>Diplomes et formations</Text>
                    <View style={styles.trainingGroup}>
                        <Text style={styles.bigDates}>2019</Text>
                        <Text style={styles.content}>Formation fullstack javascript à la wild code school.</Text>
                        <Text style={styles.bigDates}>2014</Text>
                        <Text style={styles.content}>Brevet des techniciens supérieur en communication et industries graphiques.</Text>
                    </View>
                    <Text style={styles.bigTitle}>Loisirs</Text>
                    <View style={styles.groupIcon}>
                        <AntDesign name="camera" size={35} color="#168AAD" />
                        <MaterialIcons name="pets" size={35} color="#168AAD" />
                        <FontAwesome5 name="pizza-slice" size={35} color="#168AAD" />
                        <FontAwesome5 name="plane-departure" size={35} color="#168AAD" />
                        <MaterialCommunityIcons name="bookshelf" size={35} color="#168AAD" />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bigTitle: {
        fontSize: 35,
        textTransform: 'capitalize',
        color: "#fff",
        fontFamily: "MontserratLight",
        alignSelf: "center",
        letterSpacing: 4,
        marginVertical: 15
    },
    mediumTitle: {
        marginVertical: 25,
        color: "#000",
        fontFamily: "MontserratMedium",
        fontSize: 28,
        textAlign: 'center',
        letterSpacing: 0.6,
        textTransform: "uppercase",
        textShadowColor: '#fff',
        textShadowOffset: {
            width: 1,
            height: 0
        },
        textShadowRadius: 15
    },
    groupDates: {
        flexDirection: "row",
        justifyContent: 'center',
        marginBottom: 5
    },
    dates: {
        color: "#fff",
        textTransform: "uppercase",
        fontFamily: "MontserratLight",
        textAlign: "center"
    },
    bigDates: {
        fontSize: 35,
        textShadowColor: "#fff",
        textShadowOffset: {
            width: 1,
            height: 0
        },
        textShadowRadius: 15,
        fontFamily: "MontserratLight",
        color: "#013a63",
        marginTop: 15,
        marginLeft: 15
    },
    country: {
        marginLeft: 5,
        color: "#fff",
        textTransform: "uppercase",
        fontFamily: "MontserratLightItalic",
        textAlign: "center"
    },
    groupIcon: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 50,
        marginTop: 20
    },
    text: {
        color: "#013a63",
        fontFamily: "MontserratMedium",
        textAlign: "left",
        alignSelf: "center",
        marginHorizontal: 8,
        marginVertical: 10,
        fontSize: 16,
        lineHeight: 25
    },
    project: {
        fontSize: 16,
        margin: 5,
        color: '#fff',
        textTransform: "uppercase",
        fontFamily: 'MontserratLight',
    },
    button: {
        backgroundColor: '#013a63',
        padding: 10,
        marginVertical: 35,
        borderRadius: 50,
        alignSelf: "center",
        elevation: 24
    },
    trainingGroup: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginBottom: 50
    },
    content: {
        color: "#fff",
        fontFamily: "MontserratLight",
        textAlign: "left",
        alignSelf: "center",
        marginHorizontal: 8,
        marginVertical: 10,
        fontSize: 16,
        lineHeight: 25
    },
});