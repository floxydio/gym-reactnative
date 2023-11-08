import React from 'react'
import { View, Dimensions } from 'react-native'

enum ColorChart {
    BLACK = '#000000',
    PINK = '#FF6079'
}

const dataArray = [
    {
        id: 1,
        color: ColorChart.BLACK,
        calories: 60,
    },
    {
        id: 2,
        color: ColorChart.PINK,
        calories: 28,
    },
    {
        id: 3,
        color: ColorChart.BLACK,
        calories: 20,
    },
    {
        id: 4,
        color: ColorChart.PINK,
        calories: 90,
    },
    {
        id: 5,
        color: ColorChart.BLACK,
        calories: 130,
    },


]

const maxBarHeight = 145;
const maxCalories = Math.max(...dataArray.map(item => item.calories));


export default function BarChart() {
    const screenWidth = Dimensions.get('window').width;


    return (
        <View style={{
            width: screenWidth,
            height: maxBarHeight,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            alignSelf: 'center',
            marginTop: 30,
        }}>
            {dataArray.map((item) => {
                const heightRatio = item.calories / maxCalories;
                const barHeight = maxBarHeight * heightRatio;

                return (
                    <View key={item.id} style={{
                        width: 15,
                        height: 145,
                        backgroundColor: "#E9EDF7",
                        borderRadius: 10,
                        marginLeft: 30,
                        marginRight: 30,
                    }}>
                        <View style={{
                            width: 15,
                            height: barHeight,
                            backgroundColor: item.color,
                            borderRadius: 16,
                            position: 'absolute',
                            bottom: 0,
                        }} />
                    </View>
                );
            })}
        </View>
    )
}
