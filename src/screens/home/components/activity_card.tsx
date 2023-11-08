import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { Color } from '../../../constant/Color'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import bgImage from "../../../assets/splash/splash_icon.png"
import eclipse from "../../assets/home/eclipse.png"
import Icon from "react-native-vector-icons/Ionicons"
import { GoogleSignin, User } from '@react-native-google-signin/google-signin'
import favicon from "../../../assets/adaptive-icon.png"


export default function ActivityCardComponent({ isSignedIn, navigation, profileData, exitSignIn }: { isSignedIn: boolean, navigation: NativeStackNavigationProp<any>, profileData: User | null, exitSignIn: () => void }) {


    async function navigateSignIn() {
        navigation.replace('SignIn')
    }

    return (
        <View>
            {!isSignedIn && <View style={style.activity_card}>
                <View>
                    <Text style={style.title_date_activity}>Today, 8 July</Text>
                    <Text style={style.sub_date_activity}>1 887 Kcal</Text>
                    <Pressable style={style.button_signin} onPress={() => navigateSignIn()}>
                        <Text style={style.text_buttonsignin}>Sign In To Track</Text>
                    </Pressable>
                </View>
                <Icon name='barbell' style={{
                    fontSize: 100,
                    color: Color.WHITE,

                }} />
            </View>}
            {isSignedIn && <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 24, paddingRight: 24, justifyContent: "space-between" }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Image source={{ uri: profileData?.user.photo?.toString() } ?? favicon} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ color: "grey" }}>Hello {profileData?.user.givenName}!</Text>
                        <Text style={{ color: Color.BLACK, fontWeight: "bold" }}>Welcome Back</Text>
                    </View>
                </View>
                <View>
                    <Icon.Button onPress={() => exitSignIn()} name='exit-outline' color={"black"} backgroundColor={"white"} />
                </View>
            </View>}
        </View>
    )
}

const style = StyleSheet.create({
    activity_card: {
        backgroundColor: "rgba(234,80,104,0.6)",
        borderRadius: 16,
        height: 200,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 13,
        paddingRight: 13,
        marginTop: 50,

    },
    title_date_activity: {
        fontSize: 21,
        fontWeight: 'bold',
        color: Color.WHITE,
    },
    sub_date_activity: {
        fontSize: 48,
        fontWeight: 'bold',
        color: Color.WHITE,
    },
    button_signin: {
        backgroundColor: Color.WHITE,
        width: 160,
        height: 32,
        borderRadius: 16,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_buttonsignin: {
        fontSize: 14,
        color: Color.MAINCOLOR,
        fontWeight: "600"
    },
    chip_date: {
        backgroundColor: "#FF6079",
        width: 111,
        height: 32,
        borderRadius: 16,
        marginTop: 14
    },
    chip_date_text: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 7,
        color: Color.BLACK,
        fontWeight: "600",
        fontSize: 14,
    },
    imgactivity: {
        position: 'absolute',
        top: -66,
        right: -20,
        marginBottom: 25,
        width: 200,
        resizeMode: 'cover',
        height: 265,
        borderRadius: 16,
    },
    calendar: {
        width: 20,
        height: 20,
        backgroundColor: Color.MAINCOLOR,
    }
})