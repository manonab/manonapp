import React, { useState, useRef,useCallback } from 'react';
import { View, StyleSheet,Text, SafeAreaView, Linking, Alert, Image, TouchableOpacity, Button } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Video } from 'expo-av';

const Geneaka = ({ navigation }) => {
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
                            <Image source={require('../../assets/geneakaLogo.png')} style={styles.img} />
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.buttonInside} onPress={() => { setDescription(true), setMediaPart(false), setTechnicalPart(false) }}>
                                <Text style={styles.buttonsText}>Description</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonInside} onPress={() => { setTechnicalPart(true), setDescription(false), setMediaPart(false) }}>
                                <Text style={styles.buttonsText}>Outils Techniques</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonInside} onPress={() => { setMediaPart(true), setTechnicalPart(false), setDescription(false) }}>
                                <Text style={styles.buttonsText}>Vid??os/Photos</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            {description &&
                                <View style={styles.part}>
                                    <Text style={styles.text}>G??n??aka est une entreprise sp??cialis?? dans la cr??ation des arbres g??n??alogiques.</Text>
                                    <Text style={styles.text}>Ils avaient besoin d'un site web pour pr??senter les types d'abres et pour avoir la possibilit?? aux clients de demander un devis.</Text>
                                </View>
                            }
                            {technicalPart &&
                                <View style={styles.part}>
                                    <Text style={styles.text}>Pour la cr??ation du site internet G??n??aka, j'ai utilis?? React.js, j'ai l'habitude de coder ?? l'aide de VS CODE et d'utiliser Git.</Text>
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
                                        source={require('../../assets/geneakaVideo.mp4')}
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
        alignSelf: 'center',
        width: 350,
        height: 100,
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
export default Geneaka;