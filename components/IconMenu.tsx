import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import barbelIcon from '../assets/home/barbel_icon.png'
import kcalIcon from '../assets/home/kcal_icon.png'
import { Color } from '../constant/color'

const dataMock = [
    {
        id: 1,
        icon: barbelIcon,
        titleFirst: "628",
        titleSecond: "Kcal",
        subtitle: "Dumbbell"
    },
    {
        id: 2,
        icon: kcalIcon,
        titleFirst: "235",
        titleSecond: "Kcal",
        subtitle: "Treadmill"
    },
    {
        id: 3,
        icon: kcalIcon,
        titleFirst: "432",
        titleSecond: "Kcal",
        subtitle: "Rope"
    }
]


export default function IconMenu({ selectedIndex }: { selectedIndex: number }) {
    return (
        <FlatList style={{
            marginTop: 50, paddingLeft: 13, flexGrow: 0,
        }} horizontal={true} showsHorizontalScrollIndicator={false} data={dataMock} renderItem={({ item, index }) => <View style={{
            marginRight: 20,
            width: 112,
            height: 112,
            backgroundColor: selectedIndex === index ? Color.MAINCOLOR : Color.WHITE,
            borderRadius: 16,
            justifyContent: 'center',
            marginBottom: 70
        }}>
            <View>
                <Image source={item.icon} style={{
                    marginLeft: 10,
                    backfaceVisibility: 'hidden',
                    backgroundColor: 'transparent',
                }} />
                <View style={{
                    flexDirection: "row"
                }}>
                    <Text style={{
                        color: selectedIndex === index ? Color.WHITE : Color.BLACK,
                        fontSize: 14,
                        fontWeight: 'bold',
                        marginTop: 10,
                        marginLeft: 10,
                    }}>{item.titleFirst}</Text>
                    <Text style={{
                        color: selectedIndex === index ? Color.WHITE : Color.BLACK,
                        fontSize: 14,
                        fontWeight: 'bold',
                        marginTop: 10,
                        marginLeft: 5,
                    }}>{item.titleSecond}</Text>
                </View>
                <Text style={{
                    color: selectedIndex === index ? Color.WHITE : Color.BLACK,
                    fontSize: 10,
                    fontWeight: 'bold',
                    marginTop: 10,
                    marginLeft: 10,
                }}>{item.subtitle}</Text>
            </View>
        </View>} />
    )
}