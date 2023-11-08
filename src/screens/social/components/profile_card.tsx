import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { Color } from '../../../constant/Color'

import Icon from "react-native-vector-icons/AntDesign"
import EvilIcon from "react-native-vector-icons/Octicons"

interface PostModel {
    id: number,
    name: string,
    time_post: string,
    profile_picture: string,
    content: string
}

export default function ProfileCard({ mockPost }: { mockPost: PostModel[] }) {
    return (
        <FlatList style={{ marginTop: 40 }} data={mockPost} renderItem={({ item }) => <View style={{
            marginLeft: 24, marginRight: 24, marginBottom: 30, display: 'flex', flexDirection: 'column', borderRadius: 36,
            borderWidth: 1.5,
            borderColor: '#BFBFBF',
            padding: 15,
        }}>
            <View style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                <Image source={{ uri: item.profile_picture }} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 27 }} />
                <View>
                    <Text style={{ color: Color.BLACK, fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                    <Text style={{ color: "grey", fontSize: 14, }}>{item.time_post} ago</Text>
                </View>
            </View>
            <Text style={{
                color: Color.BLACK,
                marginTop: 16
            }}>{item.content}</Text>

            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 35, justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginRight: 20 }}>
                        <Icon onPress={() => console.log("A")} name='hearto' color={"#12131A"} size={20} />
                        <Text style={{
                            color: Color.BLACK,
                            marginLeft: 10
                        }}>125</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <EvilIcon onPress={() => console.log("A")} name='comment' color={"#12131A"} size={20} />
                        <Text style={{
                            color: Color.BLACK,
                            marginLeft: 10
                        }}>13</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', }}>
                    <Icon onPress={() => console.log("A")} name='sharealt' color={"#12131A"} size={20} />
                    <Text style={{ color: Color.BLACK, marginLeft: 11 }}>Share</Text>
                </View>
            </View>


        </View>} showsVerticalScrollIndicator={false} />
    )
}