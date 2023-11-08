import { View, Text, Image, TextInput, FlatList, Modal, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, User } from '@react-native-google-signin/google-signin'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileCard from './components/profile_card'
import ZoomModal from './components/zoom_modal'
import SearchInput from './components/search_input'
import HeaderImage from './components/header_image'

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
                <HeaderImage profileData={profileData!} />
                <SearchInput />
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

                        <ZoomModal visible={isModalVisible} imageSrc={item.imgStory} handleModal={handleModal} />

                    </View>} horizontal={true} showsHorizontalScrollIndicator={false} />

                    <ProfileCard mockPost={mockPost} />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}