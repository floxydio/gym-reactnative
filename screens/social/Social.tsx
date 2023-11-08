import { View, Text, Image, TextInput, FlatList, Modal, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, User } from '@react-native-google-signin/google-signin'
import favicon from "../../assets/adaptive-icon.png"
import { Color } from '../../constant/color'
import Icon from "react-native-vector-icons/AntDesign"
import EvilIcon from "react-native-vector-icons/Octicons"

import { SafeAreaView } from 'react-native-safe-area-context'

const mockStory = [
    {
        id: 1,
        imgUrl: "https://randomuser.me/api/portraits/women/1.jpg",
        imgStory: "https://content.wepik.com/media/ai/top-image-6.png"
    },
    {
        id: 2,
        imgUrl: "https://randomuser.me/api/portraits/men/27.jpg",
        imgStory: "https://content.wepik.com/media/ai/top-image-6.png"
    },
    {
        id: 3,
        imgUrl: "https://randomuser.me/api/portraits/men/87.jpg",
        imgStory: "https://content.wepik.com/media/ai/top-image-6.png"
    },
    {
        id: 4,
        imgUrl: "https://randomuser.me/api/portraits/men/27.jpg",
        imgStory: "https://content.wepik.com/media/ai/top-image-6.png"
    },
    {
        id: 5,
        imgUrl: "https://randomuser.me/api/portraits/men/87.jpg",
        imgStory: "https://content.wepik.com/media/ai/top-image-6.png"
    }
]

const mockPost = [
    {
        id: 1,
        name: "Dio Rovelino",
        time_post: "2s",
        profile_picture: "https://randomuser.me/api/portraits/men/87.jpg",
        content: "Bete banget ya hari ini xD"
    },
    {
        id: 2,
        name: "Keropi",
        time_post: "10h",
        profile_picture: "https://randomuser.me/api/portraits/men/87.jpg",
        content: "Aku adalah mainan lucu yang suka makan lalat"
    },
    {
        id: 3,
        name: "Doraemon",
        time_post: "10h",
        profile_picture: "https://randomuser.me/api/portraits/men/87.jpg",
        content: "Aku suka makan dorayaki setiap pagi"
    }
]

export default function Social() {
    const [profileData, setProfileData] = useState<User | null>()
    const [visible, setIsVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);


    async function checkSignedIn() {
        const profileData = await GoogleSignin.getCurrentUser();
        const res = await GoogleSignin.isSignedIn();
        if (res) {
            setProfileData(profileData)
        } else {
        console.log("Not signed in")
        }
    }
    useEffect(() => {
        checkSignedIn()
    }, [])

    return (
        <SafeAreaView style={{ paddingTop: 20, backgroundColor: "white", height: "100%" }}>
            <ScrollView>
                <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 24, paddingRight: 24, justifyContent: "space-between" }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image source={{ uri: profileData?.user.photo?.toString() } ?? favicon} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                            <Text style={{ color: "grey" }}>Hello {profileData?.user.givenName}!</Text>
                            <Text style={{ color: Color.BLACK, fontWeight: "bold" }}>Welcome Back</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white" }}>
                        <Icon.Button size={30} onPress={() => console.log("A")} name='message1' color={"black"} backgroundColor={"white"} />
                    </View>
                </View>
                <View style={{ borderRadius: 16, marginTop: 20, marginLeft: 24, marginRight: 24, paddingLeft: 20, height: 50, backgroundColor: "#F5F5F5", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Icon name="search1" size={20} color={"grey"} />
                        <TextInput style={{ marginLeft: 10 }} placeholder="Search friends or neighbors" placeholderTextColor={"grey"} />
                    </View>
                    <Icon.Button onPress={() => console.log("BCA")} name="filter" size={20} color={"grey"} style={{ marginLeft: 10 }} backgroundColor={"#F5F5F5"} />
                </View>

                <View style={{ marginTop: 30 }}>
                    <FlatList data={mockStory} renderItem={({ item }) => <View style={{ marginLeft: 25 }}>
                        <View style={{
                            borderRadius: 50,
                            borderWidth: 3,
                            borderColor: '#FF6079',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 2,
                        }}>
                            <Pressable onPress={() => handleModal()}>
                                <Image
                                    source={{ uri: item.imgUrl }}
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 50,
                                    }}
                                />
                            </Pressable>
                        </View>

                        <Modal visible={isModalVisible} transparent={true}>
                            <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => handleModal()}
                                    style={{
                                        position: 'absolute',
                                        top: 40,
                                        right: 20,
                                        zIndex: 1,
                                    }}
                                >
                                    <Icon name="close" size={20} color="white" />
                                </TouchableOpacity>
                                <Image source={{ uri: item.imgStory }} style={{ width: '100%', height: '100%' }} />
                            </View>
                        </Modal>


                    </View>} horizontal={true} showsHorizontalScrollIndicator={false} />

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
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}