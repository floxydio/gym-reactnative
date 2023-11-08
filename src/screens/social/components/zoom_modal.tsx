import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign"



export default function ZoomModal({ visible, imageSrc, handleModal }: { visible: boolean, imageSrc: string, handleModal: () => void }) {
    return (
        <Modal visible={visible} transparent={true}>
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
                <Image source={{ uri: imageSrc }} style={{ width: '100%', height: '100%' }} />
            </View>
        </Modal>

    )
}