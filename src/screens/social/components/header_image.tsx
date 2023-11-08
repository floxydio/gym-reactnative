import { Image, Text, View } from "react-native";
import { Color } from "../../../constant/Color";
import Icon from "react-native-vector-icons/AntDesign"
import favicon from "../../assets/adaptive-icon.png"
import { User } from "@react-native-google-signin/google-signin";

export default function HeaderImage({ profileData }: { profileData: User }) {
    return (
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
    )
}