import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, Image, FlatList, ScrollView, Switch } from "react-native"
import { Color } from '../../constant/color'
import { mockDate } from '../../mocks/date_mocks'
import BarChart from '../../components/BarChart'
import IconMenu from '../../components/IconMenu'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GoogleSignin, User } from '@react-native-google-signin/google-signin'
import ActivityCardComponent from './components/activity_card'
import ActivityCalories from './components/activity_calories'
import SoftHome from './components/soft_home'



export default function Home({ navigation, route }: { navigation: NativeStackNavigationProp<any>, route: any }) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isSignedIn, setIsSignedIn] = useState(route.params.isSignedIn || false)
    const [profileData, setProfileData] = useState<User | null>()
    const [isSoftHome, setSoftHome] = useState(false)
    const toggleSwitch = () => setSoftHome(previousState => !previousState);

    async function checkSignedIn() {
        const profileData = await GoogleSignin.getCurrentUser();
        const res = await GoogleSignin.isSignedIn();
        if (res) {
            setIsSignedIn(true)
            setProfileData(profileData)
        } else {
            console.log("Not signed in")
        }
    }
    useEffect(() => {
        setSelectedIndex(new Date().getDate() - 1)
        checkSignedIn()
    }, [])

    async function exitSignIn() {
        await GoogleSignin.signOut().then(() => {
            setIsSignedIn(false)
        });
    }


    return (

        <ScrollView style={style.bg_home}>
            <ActivityCardComponent isSignedIn={isSignedIn} navigation={navigation} profileData={profileData!} exitSignIn={exitSignIn} />
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isSoftHome ? Color.MAINCOLOR : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isSoftHome}
            />

            {!isSoftHome && <View>
                <FlatList style={{
                    marginTop: 30,
                    paddingLeft: 13,
                    flexGrow: 0,
                }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={mockDate}
                    renderItem={({ item, index }) => index === selectedIndex ? <View style={style.chip_date}>
                        <Text style={style.chip_date_text}>Today, {item} Okt</Text>

                    </View> : <Pressable onPress={() => setSelectedIndex(index)}><Text style={{ color: "black", margin: 20, fontWeight: "600" }}>{item}</Text></Pressable>} />
                <ActivityCalories />
                <BarChart />
                <IconMenu selectedIndex={0} />
            </View>}
            {isSoftHome && <SoftHome />}


        </ScrollView >
    )
}


const style = StyleSheet.create({
    bg_home: {
        flex: 1,
        color: Color.BLACK,
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 25,
        backgroundColor: Color.WHITE,
        height: '100%',

    },
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