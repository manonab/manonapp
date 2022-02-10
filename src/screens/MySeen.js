import React, { useState, useRef, useCallback } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Linking, Alert, Image, TouchableOpacity, Button } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome5, Ionicons,Fontisto } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Video } from 'expo-av';

const MySeen = ({ navigation }) => {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const supportedURL = "https://geneaka.fr";

    const [loaded] = useFonts({
        MontserratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
        MontserratMedium: require('../../assets/fonts/Montserrat-Medium.ttf'),
        MontserratLight: require('../../assets/fonts/Montserrat-Light.ttf'),
    });

    const [description, setDescription] = useState(true);
    const [technicalPart, setTechnicalPart] = useState(false);
    const [mediaPart, setMediaPart] = useState(false);
    const OpenURLButton = ({ url, children }) => {
        const handlePress = useCallback(async () => {
            // Checking if the link is supported for links with custom URL scheme.
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                // by some browser in the mobile
                await Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        }, [url]);

        return (
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.project}>Visiter le site</Text>
            </TouchableOpacity>);
    };

    if (!loaded) {
        return (
            <AppLoading />
        )
    }
    return (
        <SafeAreaView>
            <LinearGradient colors={['#34a0a4', '#168aad', '#184e77']} style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="#013a63" style={{ marginHorizontal: 15, marginVertical: 10 }} />
                </TouchableOpacity>
                <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Image source={require('../../assets/mySeenCapture.png')} style={styles.img} />
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.buttonInside} onPress={() => { setDescription(true), setMediaPart(false), setTechnicalPart(false) }}>
                            <Text style={styles.buttonsText}>Description</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonInside} onPress={() => { setTechnicalPart(true), setDescription(false), setMediaPart(false) }}>
                            <Text style={styles.buttonsText}>Outils Techniques</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonInside} onPress={() => { setMediaPart(true), setTechnicalPart(false), setDescription(false) }}>
                            <Text style={styles.buttonsText}>Vidéos/Photos</Text>
                        </TouchableOpacity>
                    </View>
                        <View style={styles.container}>
                            {description &&
                                <View style={styles.part}>
                                    <Text style={styles.text}>MyS.E.E.N est une application de management en interne. Elle a pour but d'améliorer la gestion des employés au sein de leur entreprise.</Text>
                                    <Text style={styles.text}>Elle a différentes fonctionnalités en fonction de la catégorie de l'utilisateur. Il y a 4 catégories d'utilisateurs différent:</Text>
                                    <View style={styles.list}>
                                        <Text style={styles.textList}>ADMIN</Text>
                                        <Text style={styles.textList}>MANAGER</Text>
                                        <Text style={styles.textList}>CHEEF</Text>
                                        <Text style={styles.textList}>EMPLOYES</Text>
                                    </View>
                                    <Text style={styles.text}>Nous pouvons notamment retrouver un système de messagerie en interne, une gestion des fiches d'heures et enfin la création et consultation des chantiers.</Text>

                                </View>
                            }
                            {technicalPart &&
                                <View style={styles.part}>
                                    <Text style={styles.text}>Pour la concéption de My S.E.E.N, j'ai utilisé React-Native, Node.js et Express.js pour le back-end et enfin MongoDB pour la base de donnée. J'ai l'habitude de coder à l'aide de VS CODE et d'utiliser Git.</Text>
                                    <View style={styles.groupIcons}>
                                        <AntDesign name="github" size={50} color="#013a63" />
                                        <FontAwesome5 name="react" size={50} color="#013a63" />
                                        <FontAwesome5 name="node" size={50} color="#013a63" />
                                        <Fontisto name="mongodb" size={50} color="#013a63" />
                                        <FontAwesome5 name="git-alt" size={50} color="#013a63" />
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "center" , flexWrap:"wrap"}}>
                                        <Text style={styles.textBold}>React-Native</Text>
                                        <Text style={styles.textBold}>GitHub /  Git</Text>
                                        <Text style={styles.textBold}>MongoDB</Text><Text style={styles.textBold}>Node.js / Express.js</Text>
                                    </View>
                                </View>
                            }
                            {mediaPart &&
                                <View style={styles.part}>
                                    <Video
                                        ref={video}
                                        style={styles.video}
                                        source={require('../../assets/myseenvideo01.mp4')}
                                        useNativeControls
                                        resizeMode="cover"
                                        isLooping="true"
                                    />
                                </View>
                            }
                            {/* <View style={styles.button}>
                                <OpenURLButton url={supportedURL}>Visiter le site</OpenURLButton>
                            </View> */}
                        </View>
                </View>
                </ScrollView>

            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    img: {
        alignSelf: 'center',
        width: 250,
        height: 160,
        marginTop: 20
    },
    groupIcons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 25,
        flexWrap:"wrap"
    },
    part: {
        marginTop: 20
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        margin: 20,
        marginTop: 18
    },
    buttonsText: {
        fontSize: 14,
        color: "#fff",
        fontFamily: 'MontserratLight',
    },
    buttonInside: {
        paddingHorizontal: 10,
        marginLeft: 2,
        borderRightColor: '#013a63',
        borderRightWidth: 0.2,
        borderBottomRightRadius: 10,
        borderBottomWidth: 0.2,
        borderBottomColor: "#013a63",
        paddingVertical: 5
    },
    container: {
        minHeight: 650
    },
    text: {
        fontFamily: "MontserratMedium",
        marginHorizontal: 10,
        fontSize: 16,
        color: "#013a63",
        marginVertical: 12
    },
    textBold: {
        fontFamily: "MontserratBold",
        marginHorizontal: 5,
        fontSize: 16,
        color: "#013a63",
        marginVertical: 12
    },
    list: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    textList: {
        fontFamily: "MontserratBold",
        color: "#013a63",
        letterSpacing: 0.5,
        margin: 2
    },
    project: {
        fontSize: 17,
        margin: 5,
        color: '#fff',
        fontFamily: 'MontserratLight'
    },
    button: {
        backgroundColor: '#013a63',
        padding: 10,
        position: "absolute",
        top: 250,
        marginVertical: 35,
        borderRadius: 50,
        alignSelf: "center",
        elevation: 24
    },
    video: {
        alignSelf: 'center',
        resizeMode:"contain",
        width: 250,
        height: 550,
        marginBottom:150
    },
});
export default MySeen;