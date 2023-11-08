import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Entypo"
import IconFontisto from "react-native-vector-icons/Fontisto"
import FeatherIcon from "react-native-vector-icons/Feather"
import { Color } from '../../../constant/color'
import iconStar from "../../../assets/home/menu_icon_star.png"
import LinearGradient from 'react-native-linear-gradient';
import beachIcon from "../../../assets/home/menu_icon_two.png"
import achievementIcon from "../../../assets/home/menu_icon_achievement.png"

const menuMocks = [
    {
        title: "Special",
        icon: iconStar
    },
    {
        title: "Beach",
        icon: beachIcon
    },
    {
        title: "Full Body",
        icon: achievementIcon
    }
]

export default function SoftHome() {
    return (
        <View style={{ paddingLeft: 13, paddingRight: 13, marginTop: 30 }}>
            {/* Style List My Plan */}
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>My Plan</Text>
                    <Text style={{ color: "#7F7F7F", marginTop: 5, fontSize: 14 }}>July, 2021</Text>
                </View>
                <Icon name='dots-three-vertical' size={20} color={"#7F7F7F"} />
            </View>
            <View style={{ marginTop: 24, backgroundColor: "#FFEFF2", width: 327, height: 198, borderRadius: 26 }}>
                {/* Style Top Card */}
                <View style={{ paddingTop: 28, paddingLeft: 24, display: 'flex', flexDirection: 'row' }}>
                    <View style={{
                        backgroundColor: "#FF6079", width: 56, height: 56, borderRadius: 100
                    }}>
                        <IconFontisto name='flash' size={25} color={"white"} style={{ alignSelf: 'center', marginTop: 13 }} />

                    </View>
                    <View style={{ marginLeft: 24 }}>
                        <Text style={{ color: "#7F7F7F", fontSize: 12 }}>WEEK 1</Text>
                        <Text style={{ marginTop: 3, color: "black", fontSize: 18, fontWeight: "bold" }}>Body Weight</Text>
                        <Text style={{ marginTop: 3, color: "black" }}>Workout 1 of 5</Text>
                    </View>
                </View>

                {/* Style White Card */}
                <View style={{ marginLeft: 26, marginTop: 24, width: 279, height: 64, backgroundColor: "white", borderRadius: 16 }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <FeatherIcon name='fast-forward' size={25} color={"black"} style={{ marginTop: 20, marginLeft: 25 }} />
                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ color: "#7F7F7F", fontSize: 12, marginTop: 10, marginLeft: 10 }}>Next exercise</Text>
                            <Text style={{ color: "black", fontSize: 18, fontWeight: "bold", marginTop: 3, marginLeft: 10 }}>Lower Strength</Text>
                        </View>
                    </View>
                </View>



            </View>

            {/* Home Icon */}
            <View style={{ marginTop: 40, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ color: Color.BLACK, fontWeight: "bold", fontSize: 18 }}>Recent Plan</Text>
                    <Text style={{ color: "#7F7F7F", fontSize: 14, marginTop: 4 }}>July, 2021</Text>
                </View>
                <Text style={{ color: Color.BLACK, fontSize: 14, fontWeight: 'bold' }}>See All</Text>
            </View>

            <FlatList data={menuMocks} renderItem={({ item }) => <View style={{
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center',
                marginRight: 20,

            }}>
                <LinearGradient colors={["#FF6079", "#FF6078B6"]} style={{
                    width: 64, height: 64, justifyContent: "space-between",
                    borderRadius: 24,
                    alignItems: 'center',
                    paddingTop: 15,
                }}>
                    <Image source={item.icon} style={{ alignSelf: 'center' }} />
                </LinearGradient>
                <Text style={{
                    marginLeft: 5,
                    color: Color.BLACK
                }}>{item.title}</Text>
            </View>} horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 24 }} />
        </View >
    )
}

const style = StyleSheet.create({

})