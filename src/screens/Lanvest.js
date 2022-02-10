import React, { useState, useRef,useCallback } from 'react';
import { View, StyleSheet,Text, SafeAreaView, Linking, Alert, Image, TouchableOpacity, Button } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Video } from 'expo-av';

const Lanvest = ({ navigation }) => {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const supportedURL = "https://lanvest.fr";
    const unsupportedURL = "slack://open?team=123456";

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
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        }, [url]);
        return( 
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
                            <Image source={require('../../assets/lanvest.png')} style={styles.img} />
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
                                    <Text style={styles.text}>Lanvest est l'entreprise qui avait besoin de créer une application de gestion d'entreprise, c'est ainsi qu'est né le projet My S.E.E.N.</Text>
                                    <Text style={styles.text}>Ils avaient donc besoin d'un site vitrine qui présenterai My S.E.E.N.</Text>
                                </View>
                            }
                            {technicalPart &&
                                <View style={styles.part}>
                                    <Text style={styles.text}>Pour la création du site internet Lanvest, j'ai utilisé React.js, j'ai l'habitude de coder à l'aide de VS CODE et d'utiliser Git.</Text>
                                    <View style={styles.groupIcons}>
                                        <AntDesign name="github" size={50} color="#013a63" />
                                        <FontAwesome5 name="react" size={50} color="#013a63" />
                                        <FontAwesome5 name="git-alt" size={50} color="#013a63" />
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                        <Text style={styles.textBold}>React</Text>
                                        <Text style={styles.textBold}>GitHub /  Git</Text>
                                    </View>
                                </View>
                            }
                            {mediaPart &&
                                <View style={styles.part}>
                                    <Video
                                        
                                        ref={video}
                                        style={styles.video}
                                        source={require('../../assets/lanvestVideo.mp4')}
                                        useNativeControls
                                        resizeMode="cover"
                                        isLooping="true"
                                    />
                                </View>
                            }
                            <View style={styles.button}>
                                <OpenURLButton url={supportedURL}>Visiter le site</OpenURLButton>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    img: {
        resizeMode: "center",
        alignSelf: 'center',
        width: "80%",
        height: 80,
        marginTop: 20
    },
    groupIcons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 25
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
        width: 400,
        height: 250,
    },
});
export default Lanvest;