import { View, Text } from 'react-native'
import React from 'react'
import { Color } from '../../../constant/color'

export default function ActivityCalories() {
    return (
        <View>
            <Text style={{
                fontWeight: "bold",
                fontSize: 36,
                alignSelf: 'center',
                color: Color.BLACK,
                marginTop: 30
            }}>1883 Kcal</Text>
            <Text style={{
                fontSize: 16,
                fontWeight: "600",
                alignSelf: 'center',
                color: "grey",
                marginTop: 10,
                marginBottom: 30,
            }}>Total Kilocalories</Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 25,
                    paddingRight: 25,
                    marginTop: 15
                }}
            >

                <View>
                    <Text style={{
                        color: Color.BLACK,
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>7580 M</Text>
                    <Text style={{
                        color: "grey",
                        fontSize: 14,
                    }}>Distance</Text>
                </View>
                <View>
                    <Text style={{
                        color: Color.BLACK,
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>9832</Text>
                    <Text style={{
                        color: "grey",
                        fontSize: 14,
                    }}>Steps</Text>
                </View>
                <View>
                    <Text style={{
                        color: Color.BLACK,
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>1248</Text>
                    <Text style={{
                        color: "grey",
                        fontSize: 14,
                    }}>Points</Text>
                </View>
            </View>
        </View>
    )
}