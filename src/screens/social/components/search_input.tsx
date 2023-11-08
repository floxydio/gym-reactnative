import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"

export default function SearchInput() {
    return (
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
    )
}