import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { Color } from '../../constant/Color'
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


GoogleSignin.configure({
    webClientId: '982588423241-6mfn1jra7t6o9ct8ho1pop5qtb3593jq.apps.googleusercontent.com',
});


export default function SignIn({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
    async function onGoogleButtonPress() {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const res = await auth().signInWithCredential(googleCredential);
        if (res.user) {
            console.log("Signed in with Google")
            navigation.navigate("HomeTab", { isSignedIn: true })
            Alert.alert("Signed in with Google")
        } else {
            console.log("Something went wrong")
        }
    }



    async function checkAlreadySignIn() {
        const res = await GoogleSignin.isSignedIn();
        if (res) {
            console.log("Already signed in")
            navigation.navigate("Home")
            Alert.alert("Already signed in")
        } else {
            console.log("Not signed in")
        }
    }

    useEffect(() => {
        checkAlreadySignIn()
    }, [])
    return (
        <View style={style.bg_signin}>
            {/* <Pressable style={style.btn_signin} onPress={() => onGoogleButtonPress().then(() => console.log("Signed")).catch((err) => console.log("Something went wrong"))}>
                <Text style={style.text_btn}>Sign In With Google</Text>
            </Pressable> */}
            <GoogleSigninButton style={style.btn_signin} size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark} onPress={() => onGoogleButtonPress()} />
        </View>
    )
}

const style = StyleSheet.create({
    bg_signin: {
        backgroundColor: Color.MAINCOLOR,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_signin: {

        alignSelf: 'center',
        justifyContent: 'center',
    },

})